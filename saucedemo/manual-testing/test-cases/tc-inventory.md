# Inventory Test Cases - Sauce Demo

- **Feature**: Inventory Exploration
- **Date Created**: 2025-12-13
- **Author**: Afope

## Overview

This document defines the inventory functionality in Sauce Demo, focusing on item display, item sorting, and cart interactions. Ensuring the user can reliably view inventory items, sort item, sorted items presist after page refresh, and add/remove items from the cart.

- **Total Test Cases**: 5
- **Coverage**: Inventory displayed correctly, sorting inventory items, sorting persists after page refresh, add item to cart, remove item from cart

---

## TC-INVENTORY-001: Inventory Items Display Correct Details

**Priority:** High

**Preconditions:**

- User is **logged in** with **standard_user / secret_sauce**
- User is on the [**Inventory Page**](https://www.saucedemo.com/inventory.html)

**Test Data**:

- Name: `Sauce Labs Bike Light` Price: `$9.99` Description:`A red light isn't the desired state in...`
- Name: `Sauce Labs Backpack` Price: `$29.99` Description: `carry.allTheThings() with the sleek...`

**Test Steps:**

1.  Locate the item, `Sauce Labs Bike Light` in inventory list

    - **Expected Result:** User locates item

2.  Verify the details displayed on `Sauce Labs Bike Light`

    - **Expected Result:**
      - Displayed description should match `A red light isn't the desired state in...`
      - Displayed price should match `$9.99`

3.  Locate the item, `Sauce Labs Backpack` in inventory list

    - **Expected Result:** User locates item

4.  Verify the details displayed on `Sauce Labs Backpack`

    - **Expected Result:**
      - Displayed description should match `carry.allTheThings() with the sleek...`
      - Displayed price should match `$29.99`

## TC-INVENTORY-002: Successfully Sort Products by Name (Z → A)

**Priority:** Medium

**Preconditions:**

- User is **logged in**
- User is on the [**Inventory Page**](https://www.saucedemo.com/inventory.html)

**Test Data**:

- Expected First Item: `Test.allTheThings() T-Shirt (Red)`
- Expected Last Item: `Sauce Labs Backpack`

**Test Steps:**

1.  Click the **“Sort”** icon/button

    - **Expected Result:** Dropdown menu opens with 4 options

2.  Select the **Name (Z -> A)** option

    - **Expected Result:** Items are sorted by `Name (Z -> A)`

3.  Verify the name of the first item on the inventory list

    - **Expected Result:** Name of first item matches `Test.allTheThings() T-Shirt (Red)`

4.  Verify the name of the last item on the inventory list

    - **Expected Result:** Name of last item matches `Sauce Labs Backpack`

## TC-INVENTORY-003: Item Sort Order Persist After Page Refresh

**Priority:** Medium

**Preconditions:**

- User is **logged in**
- User is on the [**Inventory Page**](https://www.saucedemo.com/inventory.html)
- Items are currently sorted by **name (Z -> A)**

**Test Data**:

- Expected First Item: `Test.allTheThings() T-Shirt (Red)`
- Expected Last Item: `Sauce Labs Backpack`

**Test Steps:**

1. Refresh the page

   - **Expected Results:** Page refreshes successfully

2. Verify the currently selected sort option in the sorting dropdown

   - **Expected Results:** The sort dropdown still displays `Name (Z -> A)`

3. Verify the name of the first item on the inventory list

   - **Expected Result:** First item's name matches `Test.allTheThings() T-Shirt (Red)`

4. Verify the name of the last item on the inventory list

   - **Expected Result:** Last item's name matches `Sauce Labs Backpack`

## TC-INVENTORY-004: Add Item to Cart From Inventory Page

**Priority:** High

**Preconditions:**

- User is **logged in**
- User is on the [**Inventory Page**](https://www.saucedemo.com/inventory.html)
- Cart is empty and cart indicator displays **zero**

**Test Data**:

- Item Name: `Sauce Labs Backpack`

**Test Steps:**

1. Locate `Sauce Labs Backpack` in inventory list

   - **Expected Results:**
     - `Sauce Labs Backpack` is located in inventory
     - `Sauce Labs Backpack` has add to cart button

2. Click the **Add to Cart** button on `Sauce Labs Backpack`

   - **Expected Results:**
     - Selected item is added to the cart
     - Cart indicator increases by **one**
     - `Sauce Labs Backpack` button updates to reflect its new state, **Remove**

3. Click the **Cart Icon** button at the top right corner

   - **Expected Results:** User is navigated to the Cart page

4. Verify `Sauce Labs Backpack` is in the cart
   `
   - **Expected Results:** Cart contains only one item, `Sauce Labs Backpack`

## TC-INVENTORY-005: Remove Item From Cart on Inventory Page

**Priority:** High

**Preconditions:**

- User is **logged in**
- User is on the [**Inventory Page**](https://www.saucedemo.com/inventory.html)
- Cart has one item and cart indicator displays **one**

**Test Data**:

- Item in Cart: `Sauce Labs Backpack`

**Test Steps:**

1. Locate `Sauce Labs Backpack` in inventory list

   - **Expected Results:**
     - `Sauce Labs Backpack` is located in inventory
     - `Sauce Labs Backpack` has remove button

2. Click the **Remove** button on `Sauce Labs Backpack`

   - **Expected Results:**
     - `Sauce Labs Backpack` is removed from the cart
     - Cart indicator decreases by **one**
     - `Sauce Labs Backpack` button updates to reflect its new state, **Add to Cart**

3. Click the **Cart Icon** button at the top right corner

   - **Expected Results:** User is navigated to the Cart page

4. Verify `Sauce Labs Backpack` is not in the cart

   - **Expected Results:** Cart is empty
