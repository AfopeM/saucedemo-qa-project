import { Page, Locator, expect } from "@playwright/test";
import { INVENTORY_ROUTE } from "./InventoryPage";

export const USER = {
  valid_username: "standard_user",
  valid_password: "secret_sauce",
  invalid_username: "fake_user",
  invalid_password: "fake_sauce",
};

const LOGIN_ROUTE = "/";

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(readonly page: Page) {
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.getByText("Login");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async loginSuccessfully(username?: string, password?: string) {
    await this.page.goto(LOGIN_ROUTE);

    if (username !== undefined) {
      await this.page.getByTestId("username").fill(username);
    }

    if (password !== undefined) {
      await this.page.getByTestId("password").fill(password);
    }

    await this.page.getByTestId("login-button").click();
    await expect(this.page).toHaveURL(INVENTORY_ROUTE);
  }

  async loginFails(username?: string, password?: string) {
    await this.page.goto(LOGIN_ROUTE);

    if (username !== undefined) {
      await this.page.getByTestId("username").fill(username);
    }

    if (password !== undefined) {
      await this.page.getByTestId("password").fill(password);
    }

    await this.page.getByTestId("login-button").click();
    await expect(this.page).toHaveURL(LOGIN_ROUTE);
  }

  async assertLoginErrorIsVisible(expectedMessage: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }
}
