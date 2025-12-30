import { test, expect} from "@playwright/test";
import { LoginPage, CartPage, InventoryPage } from "./pages";

const INVENTORY_ITEMS = {
  first_item: {
    name: `Sauce Labs Backpack`,
    desc: `carry.allTheThings() with the sleek`,
    price: `$29.99`,
    imgAlt: `Sauce Labs Backpack`,
  },

  most_expensive_item: {
    name: `Sauce Labs Fleece Jacket`,
    desc: `It's not every day that you come across`,
    price: `$49.99`,
    imgAlt: `Sauce Labs Fleece Jacket`,
  },

  last_item: {
    name: `Test.allTheThings() T-Shirt (Red)`,
    desc: `This classic Sauce Labs t-shirt is perfect`,
    price: `$15.99`,
    imgAlt: `Test.allTheThings() T-Shirt (Red)`,
  },
};

test.describe("Inventory Page Functionality - High Priority", () => {
  let inventory: InventoryPage;
  let cart: CartPage;

  test.beforeEach(async ({ page }) => {
    inventory = new InventoryPage(page);
    const login = new LoginPage(page);
    cart = new CartPage(page);

    //1. Login into Problem User account
    await login.loginSuccessfully("problem_user", "secret_sauce");
  });

  // TC-INVENTORY-001
  test("Should display all inventory items with correct details @smoke", async () => {
    // 1. Validate First Item in inventory
    await inventory.assertInventoryItemDetails(INVENTORY_ITEMS.first_item);

    // 2. Validate Most Expensive Item in inventory
    await inventory.assertInventoryItemDetails(
      INVENTORY_ITEMS.most_expensive_item
    );

    // 3. Validate Last Item in inventory
    await inventory.assertInventoryItemDetails(INVENTORY_ITEMS.last_item);
  });

  // TC-INVENTORY-004
  test("Should add selected inventory item to cart and update badge @smoke @critical", async ({
    page,
  }) => {
    // 1. Initial State
    await inventory.assertCartBadgeCount(0);

    // 2. Added selected item to the cart
    await inventory.addItemToCart(INVENTORY_ITEMS.first_item.name);

    // 3. Verify badge updates on the current page before moving
    await inventory.assertCartBadgeCount(1);

    // 4. Navigate to Cart page
    await cart.openCart();

    // 5. Target the specific name element within the cart item
    const cartItemName = page
      .getByTestId("inventory-item")
      .filter({ hasText: INVENTORY_ITEMS.first_item.name });
    await expect(cartItemName).toBeVisible();
  });

  // TC-INVENTORY-005
  test("Should remove item from cart and update cart badge correctly @regression @critical", async () => {
    // 1. Added selected item to the cart
    await inventory.addItemToCart(INVENTORY_ITEMS.first_item.name);

    // 2. Check Cart Badge count
    await inventory.assertCartBadgeCount(1);

    // 3. Added selected item to the cart
    await inventory.removeItemFromCart(INVENTORY_ITEMS.first_item.name);
  });
});
