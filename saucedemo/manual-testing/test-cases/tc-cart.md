# Cart Test Cases - Sauce Demo

- **Feature:** Cart Functionality
- **Date Created:** 2025-12-13
- **Last Updated :** 2025-12-14
- **Author:** Afope

## Test Case Summary

| Test ID     | Test Case Name                            | Priority  | Status     |
| ----------- | ----------------------------------------- | --------- | ---------- |
| TC-CART-001 | Cart Items Persist After Page Reload      | 🔴 High   | ⬜ Not Run |
| TC-CART-002 | Remove Item from Cart on Cart Page        | 🟡 Medium | ⬜ Not Run |
| TC-CART-003 | Checkout Process Fails When Cart is Empty | 🔴 High   | ⬜ Not Run |
| TC-CART-004 | Checkout Succeeds with Item in Cart       | 🔴 High   | ⬜ Not Run |

## TC-CART-001: Cart Items Persist After Page Reload

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User is on the [Cart Page](https://www.saucedemo.com/cart.html)
- `Sauce Labs Onesie` has been added to the cart

### Test Data

```
Item Name: Sauce Labs Onesie
Cart Quantity: 1
```

### Test Steps

| Step | Action                                     | Expected Result                             |
| ---- | ------------------------------------------ | ------------------------------------------- |
| 1    | Refresh the page                           | `Cart Page` successfully refreshes          |
| 2    | Verify the **Amount** of items in the cart | Cart has `1` item                           |
| 3    | Locate and verify the item in the cart     | Item displayed in cart: `Sauce Labs Onesie` |
| 4    | Verify the **Cart Indicator**              | **Cart Indicator** displays `1`             |

## TC-CART-002: Remove Item from Cart on Cart Page

- **Priority:** 🟡 Medium
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User is on the [Cart Page](https://www.saucedemo.com/cart.html)
- `Sauce Labs Onesie` has been added to the cart

### Test Data

```
Item Name: Sauce Labs Onesie
```

### Test Steps

| Step | Action                              | Expected Result                                                        |
| ---- | ----------------------------------- | ---------------------------------------------------------------------- |
| 1    | Locate and verify the item in cart  | Item displayed in cart: `Sauce Labs Onesie` and it has a remove button |
| 2    | Click the **remove** button on item | `Sauce Labs Onesie` is be removed from cart                            |
| 3    | Verify the **Cart Indicator**       | **Cart Indicator** is `0`                                              |

## TC-CART-003: Checkout Process Fails When Cart is Empty

- **Priority:** 🔴 High
- **Test Type:** Negative

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User is on the [Cart Page](https://www.saucedemo.com/cart.html)
- The cart is `empty`

### Test Data

```
N/A
```

### Test Steps

| Step | Action                        | Expected Result                                                              |
| ---- | ----------------------------- | ---------------------------------------------------------------------------- |
| 1    | Click the **checkout** button | Error message displayed: `Your Cart is Empty, Add Items from Inventory page` |

## TC-CART-004: Checkout Succeeds with Item in Cart

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User is on the [Cart Page](https://www.saucedemo.com/cart.html)
- `Sauce Labs Onesie` has been added to the cart

### Test Data

```
Item Name: Sauce Labs Onesie
```

### Test Steps

| Step | Action                             | Expected Result                               |
| ---- | ---------------------------------- | --------------------------------------------- |
| 1    | Locate and verify the item in cart | Item displayed in cart: `Sauce Labs Onesie`   |
| 2    | Click the **Checkout** button      | User is navigated to `Checkout Step One Page` |
