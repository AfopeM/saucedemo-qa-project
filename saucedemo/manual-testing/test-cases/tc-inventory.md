# Inventory Test Cases - Sauce Demo

- **Feature**: Inventory Exploration
- **Date Created**: 2025-12-13
- **Last Updated :** 2025-12-14
- **Author**: Afope

## 📋 Test Case Summary

| Test ID          | Test Case Name                              | Priority  | Status     |
| ---------------- | ------------------------------------------- | --------- | ---------- |
| TC-INVENTORY-001 | Inventory Items Display Correct Details     | 🔴 High   | ⬜ Not Run |
| TC-INVENTORY-002 | Successfully Sort Products by Name (Z → A)  | 🟡 Medium | ⬜ Not Run |
| TC-INVENTORY-003 | Item Sort Order Persists After Page Refresh | 🟡 Medium | ⬜ Not Run |
| TC-INVENTORY-004 | Add Item to Cart From Inventory Page        | 🔴 High   | ⬜ Not Run |
| TC-INVENTORY-005 | Remove Item From Cart on Inventory Page     | 🔴 High   | ⬜ Not Run |

## TC-INVENTORY-001: Inventory Items Display Correct Details

- **Priority** 🔴 High
- **Test Type** Positive

### Preconditions

- User is **logged in** with a `standard_user` or `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)

### Test Data

```
Item Name: `Sauce Labs Bike Light`
Item Price: `$9.99`
Item Description: `A red light isn't the desired state in...`

Item Name: `Sauce Labs Backpack`
Item Price: `$29.99`
Item Description: `carry.allTheThings() with the sleek...`
```

### Test Steps

| Step | Action                                                   | Expected Result                                                                             |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1    | Locate `Sauce Labs Bike Light` in inventory list         | Item is visible in the inventory                                                            |
| 2    | Verify the details displayed for `Sauce Labs Bike Light` | Description matches: `A red light isn't the desired state in...` and Price matches: `$9.99` |
| 3    | Locate `Sauce Labs Backpack` in inventory list           | Item is visible in the inventory                                                            |
| 4    | Verify the details displayed for `Sauce Labs Backpack`   | Description matches: `carry.allTheThings() with the sleek...` and Price matches: `$29.99`   |

## TC-INVENTORY-002: Successfully Sort Products by Name (Z → A)

- **Priority:** 🟡 Medium
- **Test Type** Positive

### Preconditions

- User is **logged in** with a `standard_user` or `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)

### Test Data

```
Sort Order: `Name (Z → A)`
```

### Test Steps

| Step | Action                                      | Expected Result                                              |
| ---- | ------------------------------------------- | ------------------------------------------------------------ |
| 1    | Click the **Sort** dropdown                 | Dropdown menu opens displaying 4 sorting options             |
| 2    | Select the **Name (Z → A)** option          | Items are reordered by name in descending alphabetical order |
| 3    | Verify the first item in the inventory list | First item name matches: `Test.allTheThings() T-Shirt (Red)` |
| 4    | Verify the last item in the inventory list  | Last item name matches: `Sauce Labs Backpack`                |

## TC-INVENTORY-003: Item Sort Order Persist After Page Refresh

- **Priority:** 🟡 Medium
- **Test Type** Positive

### Preconditions

- User is **logged in** with a `standard_user` or `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Items are currently sorted by **name (Z -> A)**

### Test Data

```
Sort Order: Name (Z → A)
```

### Test Steps

| Step | Action                                          | Expected Result                                              |
| ---- | ----------------------------------------------- | ------------------------------------------------------------ |
| 1    | Refresh the page (F5 or browser refresh button) | Page reloads successfully                                    |
| 2    | Verify the selected sort option in the dropdown | Sort dropdown displays: `Name (Z → A)`                       |
| 3    | Verify the first item in the inventory list     | First item name matches: `Test.allTheThings() T-Shirt (Red)` |
| 4    | Verify the last item in the inventory list      | Last item name matches: `Sauce Labs Backpack`                |

## TC-INVENTORY-004: Add Item to Cart From Inventory Page

- **Priority** 🔴 High
- **Test Type** Positive

### Preconditions

- User is **logged in** with a `standard_user` or `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Cart is empty (cart indicator displays **0**)

### Test Data

```
Item Name: Sauce Labs Backpack
```

### Test Steps

| Step | Action                                                    | Expected Result                                             |
| ---- | --------------------------------------------------------- | ----------------------------------------------------------- |
| 1    | Locate `Sauce Labs Backpack` in inventory list            | Item is in inventory and Item has **Add to Cart** button    |
| 2    | Click the **Add to Cart** button on `Sauce Labs Backpack` | Item is added to cart and button text changes to **Remove** |
| 3    | Verify **Cart Indicator** amount                          | Cart indicator increases to **1**                           |
| 4    | Click the **Cart Icon** at the top right corner           | User is navigated to the Cart page                          |
| 5    | Verify `Sauce Labs Backpack` is in the cart               | Cart contains exactly one item: `Sauce Labs Backpack`       |

## TC-INVENTORY-005: Remove Item From Cart on Inventory Page

- **Priority** 🔴 High
- **Test Type** Positive

### Preconditions

- User is **logged in** with a `standard_user` or `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Cart contains one item (cart indicator displays **1**)

### Test Data

```
Item in Cart: Sauce Labs Backpack
```

### Test Steps

| Step | Action                                               | Expected Result                                                                                         |
| ---- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | Locate `Sauce Labs Backpack` in inventory list       | Item is in inventory and item has **Remove** button                                                     |
| 2    | Click the **Remove** button on `Sauce Labs Backpack` | Item is removed from cart, cart indicator decreases to **0** and button text changes to **Add to Cart** |
| 3    | Click the **Cart Icon** at the top right corner      | User is navigated to the Cart page                                                                      |
| 4    | Verify `Sauce Labs Backpack` is not in the cart      | Cart is empty with no items displayed                                                                   |
