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
- **Item Details Page:** Displays a detailed description of item, along with name, image, add/remove button, and price
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

### Login Page (`/`)

- Inventory Page (`/inventory.html`) on successful login
- Error Message (invalid credentials)

### Inventory Page (`/inventory.html`)

- Item Details Page (`/inventory-item.html?id=[item_id_here]`)
- Cart Page(`/cart.html`)

### Item Details Page (`/inventory-item.html?id=[item_id_here]`)

- Inventory Page (`/inventory.html`)
- Cart Page (`/cart.html`)

### Cart Page (`/cart.html`)

- Inventory Page (`/inventory.html`)
- Checkout Step One Page (`/checkout-step-one.html`)

### Checkout Step One Page (`/checkout-step-one.html`)

- Cart Page (`/cart.html`)
- Checkout Step One Page(`https://www.saucedemo.com/checkout-step-two.html`)

### Checkout Step Two Page (`/checkout-step-one.html`)

- Cart Page (`/cart.html`)
- Inventory Page (`/inventory.html`)
- Checkout Complete Page(`https://www.saucedemo.com/checkout-complete.html`)

### Checkout Complete Page (`/checkout-step-one.html`)

- Cart Page (`/cart.html`)
- Inventory Page (`/inventory.html`)

### Side Menu

- External About Page (`https://saucelabs.com/`)
- Login Page (`\`) on successful logout
- Inventory Page (`/inventory.html`)

---

## 4. Feature Inventory

### 4.1 Global Features (Available on All Logged-In Pages)

**Side Menu**

- _All Items (Menu Option)_: Navigates to the Inventory page
- _About (Menu Option)_: Opens an external site
- _Logout (Menu Option)_: Logs the user out and returns to the Login page
- _Reset App State (Menu Option)_: Clears the cart and resets application state

**Cart Icon**

- _Cart Icon (Button)_: Navigates to the Cart page
- _Cart Badge (Indicator)_: Displays the current number of items in the cart

**Footer**

- _Social Media Icons (External Links)_: Opens Twitter, Facebook, and LinkedIn in a new tab

---

### 4.2 Page-Specific Features

**Login Page**

- _Login Button (Button)_: Authenticates the user with the provided credentials
- _Username Field (Text Input)_: Accepts username input
- _Password Field (Password Input)_: Accepts password input (masked)
- _Error Message (Alert / Message)_: Displays an error when authentication fails

**Inventory Page**

- _Add to Cart Button (Button)_: Adds the selected item to the cart
- _Remove Button (Button)_: Removes the selected item from the cart
- _Sort Dropdown (Dropdown Menu)_: Sorts products by name or price (A–Z, Z–A, low–high, high–low)
- _Product Item Link (Link)_: Clicking the product image or title navigates to the Item Details page

**Product Details Page**

- _Back to Products Link (Link)_: Navigates back to the Inventory page
- _Add to Cart Button (Button)_: Adds the selected item to the cart
- _Remove Button (Button)_: Removes the selected item from the cart

**Cart Page**

- _Remove Button (Button)_: Removes the selected item from the cart
- _Continue Shopping Button (Button)_: Returns the user to the Inventory page
- _Checkout Button (Button)_: Proceeds to Checkout Step One
- _Product Item Link (Link)_: Clicking the product image or title navigates to the Item Details page

**Checkout Step One Page**

- _First Name Field (Text Input)_: Accepts first name
- _Last Name Field (Text Input)_: Accepts last name
- _Zip / Postal Code Field (Text Input)_: Accepts zip/postal code
- _Cancel Button (Button)_: Returns the user to the Cart page
- _Continue Button (Button)_: Proceeds to Checkout Step Two
- _Error Message (Alert / Message)_: Displays an error when form submission fails

**Checkout Step Two Page**

- _Total Price (Dynamic Text)_: Displays the subtotal, tax, and final total
- _Product Item Link (Link)_: Clicking the product image or title navigates to the Product Details page
- _Cancel Button (Button)_: Returns the user to the Inventory page
- _Finish Button (Button)_: Completes the checkout process and navigates to the Checkout Complete page

**Checkout Complete Page**

- _Success Message (Alert / Message)_: Displays a confirmation message when checkout is completed successfully
- _Back Home Button (Button)_: Returns the user to the Inventory page

---

## 5. Initial Observations

### 5.1 Functional Observations

- Unable to add more than one of the same item to the cart
- The Zip/Postal Code field on Checkout Step One accepts any characters instead of enforcing a valid postal/ZIP format

### 5.2 Edge Cases Noticed

- Sorted items revert to the default ordering after a page refresh
