import { test } from "@playwright/test";
import { LoginPage } from "./pages";
import { USER } from "./pages/LoginPage";

const LOGIN_ERROR_MESSAGE = {
  USERNAME_REQUIRED: "Epic sadface: Username is required",
  PASSWORD_REQUIRED: "Epic sadface: Password is required",
  INVALID_CREDENTIALS:
    "Epic sadface: Username and password do not match any user in this service",
};

test.describe("User Authentication - High Priority", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  //   TC-LOGIN-001
  test("Should login successfully with valid credentials @smoke @critical", async () => {
    // 1. Login with valid credentials
    await loginPage.loginSuccessfully(USER.valid_username, USER.valid_password);
  });

  //   TC-LOGIN-002
  test("Should fail to login with invalid credentials and show error message @regression", async () => {
    // 1. Login with invalid credentials
    await loginPage.loginFails(USER.invalid_username, USER.invalid_password);

    // 2. Invalid credential error message
    await loginPage.assertLoginErrorIsVisible(
      LOGIN_ERROR_MESSAGE.INVALID_CREDENTIALS
    );
  });

  //   TC-LOGIN-003
  test("Should fail to login when username is empty and show required field error @regression", async () => {
    // 1. Login with blank username and valid password
    await loginPage.loginFails(undefined, USER.invalid_password);

    // 2. Blank username error message
    await loginPage.assertLoginErrorIsVisible(
      LOGIN_ERROR_MESSAGE.USERNAME_REQUIRED
    );
  });

  //   TC-LOGIN-004
  test("Should fail to login when password is empty and show required field error @regression", async () => {
    // 1. Login with valid username and blank password
    await loginPage.loginFails(USER.valid_username, undefined);

    // 2. Blank password error message
    await loginPage.assertLoginErrorIsVisible(
      LOGIN_ERROR_MESSAGE.PASSWORD_REQUIRED
    );
  });
});
