# Login Test Cases - Sauce Demo

- **Feature**: User Authentication
- **Date Created**: 2025-12-12
- **Author**: Afope

## Overview

This document covers login functionality for Sauce Demo, including positive authentication flows and error handling for invalid inputs.

- **Total Test Cases**: 5
- **Coverage**: Valid login, empty fields, incorrect credentials, trailing whitespace

## TC-LOGIN-001: Successful Login With Valid Credentials

**Priority:** High

**Preconditions:**

- User is on the [**Home Page**](https://www.saucedemo.com/)
- User is **not logged in**

**Test Data**:

- Username: `standard_user`
- Password: `secret_sauce`

**Test Steps:**

1. Enter `standard_user` into the Username field

   - **Expected Result:** Username field accepts the input

2. Enter `secret_sauce` into the Password field

   - **Expected Result:** Password field accepts the input

3. Click the **Login** button

   - **Expected Result:** User is redirected to the Inventory page and product list is displayed

## TC-LOGIN-002: Unsuccessful Login With Invalid Credentials

**Priority:** High

**Preconditions:**

- User is on the [**Home Page**](https://www.saucedemo.com/)
- User is **not logged in**

**Test Data**:

- Username: `fake_user`
- Password: `secret_sauce`

**Test Steps:**

1. Enter `fake_user` into the Username field

   - **Expected Result:** Username field accepts the input

2. Enter `secret_sauce` into the Password field

   - **Expected Result:** Password field accepts the input

3. Click the **Login** button

   - **Expected Result:**
     - System displays error message: `Epic sadface: Username and password do not match any user in this service`
     - User remains on [**Home Page**](https://www.saucedemo.com/)

## TC-LOGIN-003: Login Fails With Empty Username Field

**Priority:** Medium

**Preconditions:**

- User is on the [**Home Page**](https://www.saucedemo.com/)
- User is **not logged in**

**Test Data**:

- Password: `secret_sauce`

**Test Steps:**

1. Enter `secret_sauce` in password field and leave Username field empty and click the **Login** button
   - **Expected Result:**
     - System displays error message: `Epic sadface: Username is required`
     - User remains on [**Home Page**](https://www.saucedemo.com/)

## TC-LOGIN-004: Login Fails With Empty Password Field

**Priority:** Medium

**Preconditions:**

- User is on the [**Home Page**](https://www.saucedemo.com/)
- User is **not logged in**

**Test Data**:

- Username: `standard_user`

**Test Steps:**

1. Enter `standard_user` in Username field and leave Password field empty and click the **Login** button
   - **Expected Result:**
     - System displays error message: `Epic sadface: Password is required`
     - User remains on [**Home Page**](https://www.saucedemo.com/)

## TC-LOGIN-005:Login Successfully Handles Trailing Whitespace

**Priority:** High

**Preconditions:**

- User is on the [**Home Page**](https://www.saucedemo.com/)
- User is **not logged in**

**Test Data**:

- Username: `standard_user `
- Password: `secret_sauce`

**Test Steps:**

1. Enter `standard_user ` in the Username field

   - **Expected Result:** Username field accepts the input

2. Enter `secret_sauce` in the Password field

   - **Expected Result:** Password field accepts the input

3. Click the **Login** button
   - **Expected Result:**
     - Trailing Whitespace in the username field is **trimmed**
     - User is redirected to [**Inventory Page**](https://www.saucedemo.com/inventory.html)
