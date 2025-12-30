import { Page, expect } from "@playwright/test";
import { CHECKOUT_ROUTES } from "./CheckoutPage";

export const CART_ROUTE = /cart/;

export class CartPage {
  constructor(readonly page: Page) {}

  async openCart() {
    const shoppingCartButton = this.page.getByTestId("shopping-cart-link");

    await expect(shoppingCartButton).toBeVisible();
    await shoppingCartButton.click();
    await expect(this.page).toHaveURL(CART_ROUTE);
  }

  async proceedToCheckout() {
    const checkoutButton = this.page.getByRole("button", { name: "checkout" });

    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();
    await expect(this.page).toHaveURL(CHECKOUT_ROUTES.STEP_ONE);
  }

  async assertItemIsInCart(itemName: string) {
    const item = this.page
      .getByTestId("inventory-item")
      .filter({ hasText: itemName });

    await expect(item).toHaveCount(1);
  }

  async assertCartIsEmpty() {
    const cartItems = this.page
      .getByTestId("cart-list")
      .filter({ hasText: "inventory-item" });
    await expect(cartItems).toHaveCount(0);
  }
}
