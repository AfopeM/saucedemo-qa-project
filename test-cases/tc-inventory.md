# Inventory Test Cases - Sauce Demo

- 📦 **Feature:** Inventory Exploration
- 📅 **Created:** 2025-12-13
- ✏️ **Updated:** 2025-12-15
- 👤 **Author:** Afope

## 📋 Test Case Summary

| Test ID          | Test Case Name                              | Priority  |
| ---------------- | ------------------------------------------- | --------- |
| TC-INVENTORY-001 | Inventory Items Display Correct Details     | 🔴 High   |
| TC-INVENTORY-002 | Successfully Sort Products by Name (Z → A)  | 🟡 Medium |
| TC-INVENTORY-003 | Item Sort Order Persists After Page Refresh | 🟢 Low    |
| TC-INVENTORY-004 | Add Item to Cart From Inventory Page        | 🔴 High   |
| TC-INVENTORY-005 | Remove Item From Cart on Inventory Page     | 🔴 High   |

---

## TC-INVENTORY-001: Inventory Items Display Correct Details

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- User is **logged in** as `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)

### Test Data

```
Item Name: `Sauce Labs Backpack`
Item Image: `Sauce Labs Backpack`
Item Price: `$29.99`
Item Description: `carry.allTheThings() with the sleek...`

Item Name: `Sauce Labs Fleece Jacket`
Item Image: `Sauce Labs Fleece Jacket`
Item Price: `$49.99`
Item Description: `It's not every day that you come across...`


Item Name: `Test.allTheThings() T-Shirt (Red)`
Item Image: `Test.allTheThings() T-Shirt (Red)`
Item Price: `$15.99`
Item Description: `This classic Sauce Labs t-shirt is perfect...`
```

### Test Steps

| Step | Action                                                                       | Expected Result                                                      |
| ---- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | Locate `Sauce Labs Backpack`, first item in inventory list                   | Item is visible in the inventory                                     |
| 2    | Verify the **Description** displayed for `Sauce Labs Backpack`               | Description matches: `carry.allTheThings() with the sleek...`        |
| 3    | Verify the **Price** displayed for `Sauce Labs Backpack`                     | Price matches: `$29.99`                                              |
| 4    | Verify the **Image** displayed for `Sauce Labs Backpack`                     | Image matches: `Sauce Labs Backpack`                                 |
| 5    | Locate `Sauce Labs Fleece Jacket`, most expensive item in inventory list     | Item is visible in the inventory                                     |
| 6    | Verify the **Description** displayed for `Sauce Labs Fleece Jacket`          | Description matches: `It's not every day that you come across...`    |
| 7    | Verify the **Price** displayed for `Sauce Labs Fleece Jacket`                | Price matches: `$49.99`                                              |
| 8    | Verify the **Image** displayed for `Sauce Labs Fleece Jacket`                | Image matches: `Sauce Labs Fleece Jacket`                            |
| 9    | Locate `Test.allTheThings() T-Shirt (Red)`, last item in inventory list      | Item is visible in the inventory                                     |
| 10   | Verify the **Description** displayed for `Test.allTheThings() T-Shirt (Red)` | Description matches: `This classic Sauce Labs t-shirt is perfect...` |
| 11   | Verify the **Price** displayed for `Test.allTheThings() T-Shirt (Red)`       | Price matches: `$15.99`                                              |
| 12   | Verify the **Image** displayed for `Test.allTheThings() T-Shirt (Red)`       | Image matches: `Test.allTheThings() T-Shirt (Red)`                   |

---

## TC-INVENTORY-002: Successfully Sort Products by Name (Z → A)

| Attribute | Value     |
| --------- | --------- |
| Priority  | 🟡 Medium |
| Test Type | Positive  |

### Preconditions

- User is **logged in** as `problem_user`
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)

### Test Data

```
Sort Order: `Name (Z → A)`
```

### Test Steps

| Step | Action                                          | Expected Result                                             |
| ---- | ----------------------------------------------- | ----------------------------------------------------------- |
| 1    | Click the **Sort** dropdown                     | Dropdown menu opens displaying 4 sorting options            |
| 2    | Select the **Name (Z → A)** option              | Items are reordered by **Name (Z → A)**                     |
| 3    | Verify the **First Item** in the inventory list | **First Item** matches: `Test.allTheThings() T-Shirt (Red)` |
| 4    | Verify the **Last Item** in the inventory list  | **Last Item** matches: `Sauce Labs Backpack`                |

---

## TC-INVENTORY-003: Item Sort Order Persist After Page Refresh

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🟢 Low   |
| Test Type | Positive |

### Preconditions

- User is **logged in** as `standard_user`
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Items are currently sorted by **name (Z -> A)**

### Test Data

```
N/A
```

### Test Steps

| Step | Action                                          | Expected Result                                         |
| ---- | ----------------------------------------------- | ------------------------------------------------------- |
| 1    | Refresh the page (F5 or browser refresh button) | Page reloads successfully                               |
| 2    | Verify the selected sort option in the dropdown | Sort dropdown displays: `Name (Z → A)`                  |
| 3    | Verify the first item in the inventory list     | First item matches: `Test.allTheThings() T-Shirt (Red)` |
| 4    | Verify the last item in the inventory list      | Last item matches: `Sauce Labs Backpack`                |

---

## TC-INVENTORY-004: Add Item to Cart From Inventory Page

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- User is **logged in** as `problem_user` account
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Cart is empty (cart indicator displays **0**)

### Test Data

```
Item Name: Sauce Labs Backpack
```

### Test Steps

| Step | Action                                                    | Expected Result                                        |
| ---- | --------------------------------------------------------- | ------------------------------------------------------ |
| 1    | Locate `Sauce Labs Backpack` in inventory list            | Item is visible and Item has **Add to Cart** button    |
| 2    | Click the **Add to Cart** button on `Sauce Labs Backpack` | Item is added to cart and button changed to **Remove** |
| 3    | Verify **Cart Indicator** count                           | **Cart Indicator** increases to `1`                    |
| 4    | Click the **Cart Icon** at the top right corner           | User is navigated to the `Cart Page`                   |
| 5    | Verify `Sauce Labs Backpack` is in the cart               | Cart contains exactly one item: `Sauce Labs Backpack`  |

---

## TC-INVENTORY-005: Remove Item From Cart on Inventory Page

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- User is **logged in** as `problem_user`
- User is on the [Inventory Page](https://www.saucedemo.com/inventory.html)
- Cart contains `Sauce Labs Backpack`

### Test Data

```
N/A
```

### Test Steps

| Step | Action                                               | Expected Result                                                 |
| ---- | ---------------------------------------------------- | --------------------------------------------------------------- |
| 1    | Locate `Sauce Labs Backpack` in inventory list       | Item is visible and item has **Remove** button                  |
| 2    | Click the **Remove** button on `Sauce Labs Backpack` | Item is removed from cart and button changed to **Add to Cart** |
| 3    | Verify **Cart Indicator** count                      | **Cart indicator** decreases to `0`                             |
| 4    | Click the **Cart Icon** at the top right corner      | User is navigated to the `Cart page`                            |
| 5    | Verify `Sauce Labs Backpack` is not in the cart      | Cart is empty with no items displayed                           |
