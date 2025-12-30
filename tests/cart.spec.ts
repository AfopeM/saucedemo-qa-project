import { expect, test } from "@playwright/test";
import { LoginPage, InventoryPage, CartPage } from "./pages";
import { CART_ROUTE } from "./pages/CartPage";
import { CHECKOUT_ROUTES } from "./pages/CheckoutPage";

const CART_ITEM = "Sauce Labs Onesie";

test.describe("Cart Functionality - High Priority", () => {
  let inventory: InventoryPage;
  let cart: CartPage;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);

    //1. Login into Problem User account
    await login.loginSuccessfully("problem_user", "secret_sauce");
  });

  // TC-CART-001
  test("Should retain items in cart after page reload @regression @critical", async ({
    page,
  }) => {
    // 1. `Sauce Labs Onesie` has been added to the cart
    await inventory.addItemToCart(CART_ITEM);

    // 2. Verify the Cart Indicator is 1
    await inventory.assertCartBadgeCount(1);

    // 3. Navigate to Cart Page
    await cart.openCart();

    // 4. Locate and verify `Sauce Labs Onesie` is in the cart
    await cart.assertItemIsInCart(CART_ITEM);

    // 5. Refresh the page
    await page.reload();

    // 6. Locate and verify `Sauce Labs Onesie` is in the cart
    await cart.assertItemIsInCart(CART_ITEM);

    // 7. Verify the Cart Indicator is 1
    await inventory.assertCartBadgeCount(1);
  });

  // TC-CART-003
  test("Should prevent checkout when cart is empty @regression", async ({
    page,
  }) => {
    // 1. Navigate to Cart Page
    await cart.openCart();

    // 2. Verify the Cart Indicator is 0
    await inventory.assertCartBadgeCount(0);

    // 3. Verify cart is empty
    await cart.assertCartIsEmpty();

    // 4. Click Checkout button
    await cart.proceedToCheckout();

    // 5. Verify user is still on Cart page
    await expect(page).toHaveURL(CART_ROUTE);
  });

  // TC-CART-004
  test("Should allow checkout when cart has items @smoke @critical", async ({
    page,
  }) => {
    // 1. `Sauce Labs Onesie` has been added to the cart
    await inventory.addItemToCart(CART_ITEM);

    // 2. Verify the Cart Indicator is 1
    await inventory.assertCartBadgeCount(1);

    // 3. Navigate to Cart Page
    await cart.openCart();

    // 4. Locate and verify `Sauce Labs Onesie` is in the cart
    await cart.assertItemIsInCart(CART_ITEM);

    // 5. Click Checkout button
    await cart.proceedToCheckout();

    // 6. Verify user is still on Checkout Page One
    await expect(page).toHaveURL(CHECKOUT_ROUTES.STEP_ONE);
  });
});
