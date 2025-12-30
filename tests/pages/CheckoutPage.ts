import { Page, expect } from "@playwright/test";

export const CHECKOUT_ROUTES = {
  STEP_ONE: /checkout-step-one/,
  STEP_TWO: /checkout-step-two/,
  COMPLETE: /checkout-complete/,
};

export class CheckoutPage {
  constructor(readonly page: Page) {}

  //
  async continueCheckoutSuccessfully() {
    const continueButton = this.page.getByRole("button", { name: "continue" });

    await expect(continueButton).toBeVisible();
    await continueButton.click();
    await expect(this.page).toHaveURL(CHECKOUT_ROUTES.STEP_TWO);
  }

  //
  async fillCheckoutStepOneForm(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.getByTestId("firstName").fill(firstName);
    await this.page.getByTestId("lastName").fill(lastName);
    await this.page.getByTestId("postalCode").fill(postalCode);
  }

  //
  async assertCheckoutError(expectedMessage: string) {
    const continueButton = this.page.getByRole("button", { name: "continue" });
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    const error = this.page.getByTestId("error");
    await expect(error).toBeVisible();
    await expect(error).toContainText(expectedMessage);

    await expect(this.page).toHaveURL(CHECKOUT_ROUTES.STEP_ONE);
  }

  //
  async finishCheckout() {
    const finishButton = this.page.getByRole("button", { name: "finish" });

    await expect(finishButton).toBeVisible();
    await finishButton.click();
    await expect(this.page).toHaveURL(CHECKOUT_ROUTES.COMPLETE);
  }

  //
  async assertCheckoutSummaryItem(item: {
    name: string;
    desc: string;
    price: string;
  }) {
    await expect(this.page.getByTestId("inventory-item-name")).toHaveText(
      item.name
    );
    await expect(this.page.getByTestId("inventory-item-desc")).toContainText(
      item.desc
    );
    await expect(this.page.getByTestId("inventory-item-price")).toHaveText(
      item.price
    );
  }

  //
  async assertPriceBreakdown(itemPrice: string) {
    const itemTotal = Number(itemPrice.replace("$", ""));
    const tax = Number((itemTotal * 0.08).toFixed(2));
    const total = itemTotal + tax;

    await expect(this.page.getByTestId("subtotal-label")).toContainText(
      itemTotal.toFixed(2)
    );
    await expect(this.page.getByTestId("tax-label")).toContainText(
      tax.toFixed(2)
    );
    await expect(this.page.getByTestId("total-label")).toContainText(
      total.toFixed(2)
    );
  }
}
