# Exploratory Testing Document - ([Saucedemo](https://www.saucedemo.com/))

---

## 1. Application Overview

### 1.1 Purpose

Sauce Demo is a sample e-commerce application created for practicing Quality Assurance(QA) testing.

### 1.2 Target Users

- **QA Testers:** Users can practice test design, create test cases, and document bugs
- **Online Shopper:** Users can login, browse inventory, add/remove item from cart, checkout cart, and complete checkout (no delivery fulfilment)

### 1.3 High-Level Functionality

- **Login/Logout:** User is granted access to certain browse invenrtory, add to cart, and complete checkout by login
- **Browse Inventory:** System displays all inventory items by name (ascending)
- **Sort Item:** Items can be arranged by name and price (descending/ascending)
- **Dedicated Item Page:** Displays a detailed description of item, along with name, image, add/remove button, and price
- **Add/Remove Items from Cart:** User can add/remove item(s) from cart
- **Complete Checkout Process:** User can checkout cart, coomplete user form, verify purchase, and complete checkout

### 1.4 Assumptions / Notes

- Simulates difference test users: **locked_out_user** is unable to login
- There **cannot be 2+** of a sigular item in cart at the same time.

---

## 2. Available Test Users

| Username                | Password     | Behavior / Notes                                                            |
| ----------------------- | ------------ | --------------------------------------------------------------------------- |
| standard_user           | secret_sauce | All pages, buttons, and flows function normally                             |
| locked_out_user         | secret_sauce | Login always fails                                                          |
| problem_user            | secret_sauce | Broken images, incorrect item info, and dysfunctional Add to Cart behaviour |
| performance_glitch_user | secret_sauce | Slow page load (> 3 seconds) and delayed button response                    |
| error_user              | secret_sauce | Error pop up during sorting                                                 |
| visual_user             | secret_sauce | Oversized images, font inconsistencies, and misaligned elements             |

---

## 3. Application Map

- **Login Page** (`/`)

  - Inventory Page (`/inventory.html`) on successful login
  - Error Message (invalid credentials)

- **Inventory Page** (`/inventory.html`)

  - Dedicated Item Page (`/inventory-item.html?id=[item_id_here]`)
  - Cart Page(`/cart.html`)

- **Dedicated Item Page** (`/inventory-item.html?id=[item_id_here]`)

  - Inventory Page (`/inventory.html`)
  - Cart Page (`/cart.html`)

- **Cart Page** (`/cart.html`)

  - Inventory Page (`/inventory.html`)
  - Checkout Step One Page (`/checkout-step-one.html`)

- **Checkout Step One Page** (`/checkout-step-one.html`)

  - Cart Page (`/cart.html`)
  - Checkout Step One Page(`https://www.saucedemo.com/checkout-step-two.html`)

- **Checkout Step Two Page** (`/checkout-step-one.html`)

  - Cart Page (`/cart.html`)
  - Inventory Page (`/inventory.html`)
  - Checkout Complete Page(`https://www.saucedemo.com/checkout-complete.html`)

- **Checkout Complete Page** (`/checkout-step-one.html`)

  - Cart Page (`/cart.html`)
  - Inventory Page (`/inventory.html`)

- **Side Menu**

  - Extenral About Page (`https://saucelabs.com/`)
  - Login Page (`\`) on successful logout
  - Inventory Page (`/inventory.html`)

---

## 4. Feature Inventory

---
