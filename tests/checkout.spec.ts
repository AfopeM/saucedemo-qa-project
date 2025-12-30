import { test } from "@playwright/test";
import { LoginPage, CartPage, CheckoutPage, InventoryPage } from "./pages";

const CHECKOUT_ITEM = {
  name: `Sauce Labs Onesie`,
  desc: "Rib snap infant onesie for the junior automation",
  price: `$7.99`,
};

const CHECKOUT_FORM_DATA = {
  valid: {
    firstName: "Johnny",
    lastName: "Bravo",
    postalCode: "M5A M5V",
  },
  invalid: {
    firstName: "1234",
    lastName: "5678",
    postalCode: "MMM 555",
  },
};

let login: LoginPage;
let checkout: CheckoutPage;
let inventory: InventoryPage;
let cart: CartPage;

async function setupCartWithItem(
  login: LoginPage,
  inventory: InventoryPage,
  cart: CartPage
) {
  await login.loginSuccessfully("problem_user", "secret_sauce");
  await inventory.addItemToCart(CHECKOUT_ITEM.name);
  await inventory.assertCartBadgeCount(1);
  await cart.openCart();
  await cart.proceedToCheckout();
}

test.describe("Checkout Step One - User Information Validation", () => {
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);

    await setupCartWithItem(login, inventory, cart);
  });

  // TC-CHECKOUT-001
  test("Should block submission when required fields are empty @regression @critical", async () => {
    await checkout.assertCheckoutError("Error: First Name is required");
  });

  // TC-CHECKOUT-002
  test("Should reject checkout with invalid user information @regression @critical", async () => {
    await checkout.fillCheckoutStepOneForm(
      CHECKOUT_FORM_DATA.invalid.firstName,
      CHECKOUT_FORM_DATA.valid.lastName,
      CHECKOUT_FORM_DATA.valid.postalCode
    );
    await checkout.assertCheckoutError("Error: First Name is required");
  });

  // TC-CHECKOUT-003
  test("Should proceed to next step with valid user information @smoke @critical", async () => {
    await checkout.fillCheckoutStepOneForm(
      CHECKOUT_FORM_DATA.valid.firstName,
      CHECKOUT_FORM_DATA.valid.lastName,
      CHECKOUT_FORM_DATA.valid.postalCode
    );
    await checkout.continueCheckoutSuccessfully();
  });
});

// CHECKOUT STEP TWO & CHECKOUT COMPLETE - HIGH PRIORITY
test.describe("Checkout Step Two & Completion - Summary and Payment Validation", () => {
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);

    await setupCartWithItem(login, inventory, cart);

    await checkout.fillCheckoutStepOneForm(
      CHECKOUT_FORM_DATA.valid.firstName,
      CHECKOUT_FORM_DATA.valid.lastName,
      CHECKOUT_FORM_DATA.valid.postalCode
    );

    await checkout.continueCheckoutSuccessfully();
  });

  // TC-CHECKOUT-004
  test("Should display correct items in checkout summary @smoke @critical", async () => {
    await checkout.assertCheckoutSummaryItem(CHECKOUT_ITEM);
  });

  // TC-CHECKOUT-005
  test("Should calculate subtotal, tax, and total correctly @smoke @critical", async () => {
    await checkout.assertPriceBreakdown(CHECKOUT_ITEM.price);
  });

  // TC-CHECKOUT-006
  test("Should complete checkout process successfully @smoke @critical", async () => {
    await checkout.finishCheckout();
  });
});
