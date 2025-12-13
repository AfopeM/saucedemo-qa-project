# 🧪 Exploratory Testing Document

**Application:** [Saucedemo](https://www.saucedemo.com/)  
**Focus:** `standard_user` and `problem_user`

## 📌 Summary

This document captures exploratory testing observations for the Saucedemo application, focusing on the Login, Inventory, Cart, Checkout features across `standard_user` and `problem_user` accounts.

## 📋 Table of Contents

1. [Application Overview](#1-application-overview)
2. [Available Test Users](#2-available-test-users)
3. [Application Map](#3-application-map)
4. [Feature Inventory](#4-feature-inventory)
5. [Initial Observations](#5-initial-observations)

## 1. Application Overview

### 1.1 Purpose

Sauce Demo is a sample e-commerce application created for practicing Quality Assurance(QA) testing.

### 1.2 Target Users

- **QA Testers:** Users can practice test design, create test cases, and document bugs
- **Online Shopper:** Users can login, browse inventory, add/remove item from cart, checkout cart, and complete checkout (no delivery fulfilment)

### 1.3 High-Level Functionality

| Feature                 | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Login/Logout**        | User authentication to access inventory, cart, and checkout                    |
| **Browse Inventory**    | System displays all inventory items by name (ascending order)                  |
| **Sort Items**          | Arrange items by name and price (ascending/descending)                         |
| **Dedicated Item Page** | Detailed view with description, name, image, add/remove button, and price      |
| **Cart Management**     | Add/remove items from shopping cart                                            |
| **Checkout Process**    | Complete purchase flow including user form, verification, and order completion |

### 1.4 Assumptions / Notes

- **Cannot add 2+ of the same item** to cart

## 2. Available Test Users

| Username        | Password       | Behavior / Notes                                              |
| --------------- | -------------- | ------------------------------------------------------------- |
| `standard_user` | `secret_sauce` | All pages, buttons, and flows function normally               |
| `problem_user`  | `secret_sauce` | Broken images, incorrect item info, dysfunctional Add to Cart |

## 3. Application Map

```
Login Page (/)
│
├─► Inventory Page (/inventory.html)
│   │
│   ├─► Dedicated Item Page (/inventory-item.html?id=[item_id])
│   │   └─► Back to Inventory or Cart
│   │
│   └─► Cart Page (/cart.html) (Available on all logged-in pages)
│       │
│       ├─► Continue Shopping → Inventory
│       │
│       └─► Checkout Step One (/checkout-step-one.html)
│           │
│           └─► Checkout Step Two (/checkout-step-two.html)
│               │
│               └─► Checkout Complete (/checkout-complete.html)
│                   └─► Back Home → Inventory
│
└─► Side Menu (Available on all logged-in pages)
    ├─► All Items → Inventory
    ├─► About → External (https://saucelabs.com/)
    ├─► Logout → Login Page
    └─► Reset App State
```

### 3.1 Navigation Flow Details

| Current Page          | Navigation Options                                                      |
| --------------------- | ----------------------------------------------------------------------- |
| **Login Page**        | → Inventory (on success)<br>→ Error Message (on failure)                |
| **Inventory Page**    | → Dedicated Item<br>→ Cart Page                                         |
| **Dedicated Item**    | → Inventory<br>→ Cart Page                                              |
| **Cart Page**         | → Inventory<br>→ Checkout Step One                                      |
| **Checkout Step One** | → Cart (Cancel)<br>→ Checkout Step Two (Continue)                       |
| **Checkout Step Two** | → Cart (Cancel)<br>→ Inventory (Cancel)<br>→ Checkout Complete (Finish) |
| **Checkout Complete** | → Inventory (Back Home)<br>→ Cart Page                                  |

## 4. Feature Inventory

### 4.1 Global Features (Available on All Logged-In Pages)

#### Side Menu

| Feature         | Type        | Function                         |
| --------------- | ----------- | -------------------------------- |
| All Items       | Menu Option | Navigate to Inventory page       |
| About           | Menu Option | Open external site (Sauce Labs)  |
| Logout          | Menu Option | Log out and return to Login page |
| Reset App State | Menu Option | Clear cart and reset application |

#### Cart Icon

| Feature    | Type      | Function                           |
| ---------- | --------- | ---------------------------------- |
| Cart Icon  | Button    | Navigate to Cart page              |
| Cart Badge | Indicator | Display current item count in cart |

#### Footer

| Feature            | Type           | Function                                    |
| ------------------ | -------------- | ------------------------------------------- |
| Social Media Icons | External Links | Open Twitter, Facebook, LinkedIn in new tab |

### 4.2 Page-Specific Features

#### Login Page

| Feature        | Type           | Function                       |
| -------------- | -------------- | ------------------------------ |
| Username Field | Text Input     | Accept username                |
| Password Field | Password Input | Accept password (masked)       |
| Login Button   | Button         | Authenticate user              |
| Error Message  | Alert          | Display authentication failure |

#### Inventory Page

| Feature            | Type     | Function                                          |
| ------------------ | -------- | ------------------------------------------------- |
| Product Item Link  | Link     | Navigate to Item Details (via image/title)        |
| Add to Cart Button | Button   | Add item to cart                                  |
| Remove Button      | Button   | Remove item from cart                             |
| Sort Dropdown      | Dropdown | Sort by name/price (A–Z, Z–A, Low–High, High–Low) |

#### Product Details Page

| Feature               | Type   | Function                 |
| --------------------- | ------ | ------------------------ |
| Back to Products Link | Link   | Return to Inventory page |
| Add to Cart Button    | Button | Add item to cart         |
| Remove Button         | Button | Remove item from cart    |

#### Cart Page

| Feature                  | Type   | Function                                   |
| ------------------------ | ------ | ------------------------------------------ |
| Product Item Link        | Link   | Navigate to Item Details (via image/title) |
| Remove Button            | Button | Remove item from cart                      |
| Continue Shopping Button | Button | Return to Inventory page                   |
| Checkout Button          | Button | Proceed to Checkout Step One               |

#### Checkout Step One

| Feature               | Type       | Function                       |
| --------------------- | ---------- | ------------------------------ |
| First Name Field      | Text Input | Accept first name              |
| Last Name Field       | Text Input | Accept last name               |
| Zip/Postal Code Field | Text Input | Accept zip/postal code         |
| Cancel Button         | Button     | Return to Cart page            |
| Continue Button       | Button     | Proceed to Checkout Step Two   |
| Error Message         | Alert      | Display form validation errors |

#### Checkout Step Two

| Feature           | Type         | Function                                   |
| ----------------- | ------------ | ------------------------------------------ |
| Product Item Link | Link         | Navigate to Item Details (via image/title) |
| Total Price       | Dynamic Text | Display subtotal, tax, and final total     |
| Cancel Button     | Button       | Return to Inventory page                   |
| Finish Button     | Button       | Complete checkout → Checkout Complete      |

#### Checkout Complete

| Feature          | Type   | Function                   |
| ---------------- | ------ | -------------------------- |
| Success Message  | Alert  | Display order confirmation |
| Back Home Button | Button | Return to Inventory page   |

## 5. Initial Observations

### 5.1 Functional Observations

#### `standard_user` Behavior

- All features work as expected
- Cannot add multiple quantities of same item

#### `problem_user` Issues

| Issue                     | Severity  | Description                                              |
| ------------------------- | --------- | -------------------------------------------------------- |
| **Sorting Dysfunction**   | 🔴 High   | Sort dropdown does not function                          |
| **Image Display**         | 🔴 High   | All Inventory page images are incorrect                  |
| **Remove Button Failure** | 🔴 High   | Some items have non-functional Remove buttons            |
| **Content Errors**        | 🟡 Medium | Incorrect item titles and descriptions                   |
| **Layout Issues**         | 🟢 Low    | Footer elements not centered                             |
| **Form Field Bug**        | 🟡 Medium | Last Name field clears unexpectedly on Checkout Step Two |

### 5.2 Edge Cases Noticed (System Vulnerabilities & Unexpected Behaviors)

1. **Empty Cart Checkout** (`problem_user`)  
   User can proceed to checkout with an empty cart

2. **Input Validation Missing** (`standard_user` & `problem_user`)  
   Zip/Postal Code field accepts any characters instead of enforcing valid format

3. **State Persistence** (`standard_user`)  
   Sorted items revert to default ordering after page refresh
