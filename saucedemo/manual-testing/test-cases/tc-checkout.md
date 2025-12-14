# Checkout Test Cases - Sauce Demo

- **Feature:** Checkout Functionality
- **Date Created:** 2025-12-13
- **Last Updated :** 2025-12-14
- **Author:** Afope

## Test Case Summary

| Test ID         | Test Case Name                                            | Priority  | Status     |
| --------------- | --------------------------------------------------------- | --------- | ---------- |
| TC-CHECKOUT-001 | Incomplete Checkout Step One Form Blocks Checkout Process | 🔴 High   | ⬜ Not Run |
| TC-CHECKOUT-002 | Checkout Step One Form Rejects Invalid Data               | 🟡 Medium | ⬜ Not Run |
| TC-CHECKOUT-003 | Checkout Step One Form Retains User Data                  | 🔴 High   | ⬜ Not Run |
| TC-CHECKOUT-004 | Checkout Step Two Displays Correct Item in Cart           | 🔴 High   | ⬜ Not Run |
| TC-CHECKOUT-005 | Price Calculation Accuracy on Checkout Step Two           | 🔴 High   | ⬜ Not Run |
| TC-CHECKOUT-006 | Successfully Complete Checkout Process                    | 🔴 High   | ⬜ Not Run |

## TC-CHECKOUT-001: Incomplete Checkout Step One Form Blocks Checkout Process

- **Priority:** 🔴 High
- **Test Type:** Negative

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User has at least one item in the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `Johnny`
Last Name: `Bravo`
Zip/Postal Code: [Leave Empty]
```

### Test Steps

| Step | Action                             | Expected Result                                          |
| ---- | ---------------------------------- | -------------------------------------------------------- |
| 1    | Enter `Johnny` in First Name field | First Name field accept the input                        |
| 2    | Enter `Bravo` in Last Name field   | Last Name field accept the input                         |
| 3    | Leave Zip/Postal Code fields empty | he Zip/Postal Code field remains empty                   |
| 4    | Click the `Continue` button        | Error message, `Zip/Postal code is missing` is displayed |

## TC-CHECKOUT-002: Checkout Step One Form Rejects Invalid Data

- **Priority:** 🟡 Medium
- **Test Type:** Negative

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User has at least one item in the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `1213`
Last Name: `Bravo`
Zip/Postal Code: `M5A, M5V`
```

### Test Steps

| Step | Action                                    | Expected Result                                                     |
| ---- | ----------------------------------------- | ------------------------------------------------------------------- |
| 1    | Enter `1213` in First Name field          | Error message, `First Name field only accepts letters` is displayed |
| 2    | Enter `Bravo` in Last Name field          | Last Name field accept the input                                    |
| 3    | Enter `M5A, M5V` in Zip/Postal Code field | Zip/Postal Code field accept the input                              |
| 4    | Click the `Continue` button               | Error message, `First Name is missing` is displayed                 |

## TC-CHECKOUT-003: Checkout Step One Form Retains User Data

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- User has at least one item in the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `Johnny`
Last Name: `Bravo`
Zip/Postal Code: `M5A, M5V`
```

### Test Steps

| Step | Action                                    | Expected Result                               |
| ---- | ----------------------------------------- | --------------------------------------------- |
| 1    | Enter `Johnny` in First Name field        | First Name field accept the input             |
| 2    | Enter `Bravo` in Last Name field          | Last Name field accept the input              |
| 3    | Enter `M5A, M5V` in Zip/Postal Code field | Zip/Postal Code field accept the input        |
| 4    | Click the `Continue` button               | User is navigated to `Checkout Step Two Page` |

## TC-CHECKOUT-004: Checkout Step Two Displays Correct Item in Cart

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
Item Name: `Sauce Labs Onesie`
Item Price: `$7.99`
```

### Test Steps

| Step | Action                                 | Expected Result                                   |
| ---- | -------------------------------------- | ------------------------------------------------- |
| 1    | Locate and verify the item in checkout | `Sauce Labs Onesie` is displayed in item checkout |
| 2    | Verify the price of item in checkout   | Item price displays `$7.99`                       |

## TC-CHECKOUT-005: Price Calculation Accuracy on Checkout Step Two

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- `Sauce Labs Onesie` has been added to the cart
- User is on [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
Item Name: `Sauce Labs Onesie`
Item Price: `$7.99`
```

### Test Steps

| Step | Action                                                   | Expected Result                                   |
| ---- | -------------------------------------------------------- | ------------------------------------------------- |
| 1    | Locate and verify the item in checkout                   | `Sauce Labs Onesie` is displayed in item checkout |
| 2    | Locate the Price Total section and verify the Item Total | Item total displays `$7.99`                       |
| 3    | Verify the calculated Tax amount                         | Tax line displays `$0.64`                         |
| 4    | Verify the Final Total amount                            | Total line displays `$8.63`                       |

## TC-CHECKOUT-006: Successfully Complete Checkout Process

- **Priority:** 🔴 High
- **Test Type:** Positive

### Preconditions

- User is logged in with a `standard_user` or `problem_user` account
- `Sauce Labs Onesie` has been added to the cart
- User is on [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
N/A
```

### Test Steps

| Step | Action                                          | Expected Result                                           |
| ---- | ----------------------------------------------- | --------------------------------------------------------- |
| 1    | Click the `Finish` button                       | User is navigated to the `Checkout Complete Page`         |
| 2    | Verify the success message                      | Success message, `Thank you for your order!` is displayed |
| 3    | Verify amount displayed on cart badge indicator | Cart badge indicator is `0`                               |
