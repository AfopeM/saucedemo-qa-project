import { Page, Locator, expect } from "@playwright/test";

export const INVENTORY_ROUTE = /inventory/;

export class InventoryPage {
  constructor(readonly page: Page) {}

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(INVENTORY_ROUTE);
  }

  private inventoryItem(itemName: string): Locator {
    return this.page
      .getByTestId("inventory-item")
      .filter({ hasText: itemName });
  }

  async addItemToCart(itemName: string) {
    const addButton = this.inventoryItem(itemName).getByRole("button", {
      name: "Add to cart",
    });

    await expect(addButton).toBeVisible();
    await addButton.click();
  }

  async removeItemFromCart(itemName: string) {
    const removeButton = this.inventoryItem(itemName).getByRole("button", {
      name: "Remove",
    });

    await expect(removeButton).toBeVisible();
    await removeButton.click();
  }

  async assertInventoryItemDetails({
    name,
    desc,
    price,
    imgAlt,
  }: {
    name: string;
    desc: string;
    price: string;
    imgAlt: string;
  }) {
    const item = this.inventoryItem(name);

    await expect(item.getByTestId("inventory-item-desc")).toContainText(desc);
    await expect(item.getByTestId("inventory-item-price")).toHaveText(price);
    await expect(item.locator("img.inventory_item_img")).toHaveAttribute(
      "alt",
      imgAlt
    );
  }

  async assertCartBadgeCount(expectedCount: number) {
    const badge = this.page.locator(".shopping_cart_badge");

    if (expectedCount === 0) {
      await expect(badge).toHaveCount(0);
      return;
    }

    await expect(badge).toBeVisible();
    await expect(badge).toHaveText(String(expectedCount));
  }
}
