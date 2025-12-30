# Checkout Test Cases - Sauce Demo

- 📦 **Feature:** Checkout Functionality
- 📅 **Created:** 2025-12-13
- ✏️ **Updated:** 2025-12-15
- 👤 **Author:** Afope

## Test Case Summary

| Test ID         | Test Case Name                                   | Priority |
| --------------- | ------------------------------------------------ | -------- |
| TC-CHECKOUT-001 | Checkout Step One Blocks Incomplete Submission   | 🔴 High  |
| TC-CHECKOUT-002 | Checkout Step One Rejects Invalid Data           | 🔴 High  |
| TC-CHECKOUT-003 | Checkout Step One Accepts Valid User Information | 🔴 High  |
| TC-CHECKOUT-004 | Checkout Step Two Displays Correct Item in Cart  | 🔴 High  |
| TC-CHECKOUT-005 | Price Calculation Accuracy on Checkout Step Two  | 🔴 High  |
| TC-CHECKOUT-006 | Successfully Complete Checkout Process           | 🔴 High  |

---

## TC-CHECKOUT-001: Checkout Step One Blocks Incomplete Submission

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Negative |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `Johnny`
Last Name: `Bravo`
Zip/Postal Code: [Leave Empty]
```

### Test Steps

| Step | Action                                 | Expected Result                                                                            |
| ---- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1    | Enter `Johnny` in **First Name** field | **First Name** field displays the entered text correctly with no errors                    |
| 2    | Enter `Bravo` in **Last Name** field   | **Last Name** field displays the entered text correctly with no errors                     |
| 3    | Leave **Zip/Postal Code** fields empty | **Zip/Postal Code** field remains empty                                                    |
| 4    | Click the `Continue` button            | indicating **Zip/Postal Code** field is empty and user remains on `Checkout Step One Page` |

---

## TC-CHECKOUT-002: Checkout Step One Rejects Invalid Data

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Negative |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `1213`
Last Name: `Bravo`
Zip/Postal Code: `M5A M5V`
```

### Test Steps

| Step | Action                                       | Expected Result                                                                                       |
| ---- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1    | Enter `1213` in **First Name** field         | Error message displayed: `First Name field only accepts letters`                                      |
| 2    | Enter `Bravo` in **Last Name** field         | **Last Name** field displays the entered text correctly with no errors                                |
| 3    | Enter `M5A M5V` in **Zip/Postal Code** field | **Zip/Postal Code** field displays the entered text correctly with no errors                          |
| 4    | Click the `Continue` button                  | `Error Message` indicating **First Name** field is wrong and user remains on `Checkout Step One Page` |

---

## TC-CHECKOUT-003: Checkout Step One Accepts Valid User Information

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step One Page](https://www.saucedemo.com/checkout-step-one.html)

### Test Data

```
First Name: `Johnny`
Last Name: `Bravo`
Zip/Postal Code: `M5A M5V`
```

### Test Steps

| Step | Action                                       | Expected Result                                                              |
| ---- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| 1    | Enter `Johnny` in **First Name** field       | **First Name** field displays the entered text correctly with no errors      |
| 2    | Enter `Bravo` in **Last Name** field         | **Last Name** field displays the entered text correctly with no errors       |
| 3    | Enter `M5A M5V` in **Zip/Postal Code** field | **Zip/Postal Code** field displays the entered text correctly with no errors |
| 4    | Click the `Continue` button                  | User is navigated to `Checkout Step Two Page`                                |

---

## TC-CHECKOUT-004: Checkout Step Two Displays Correct Item in Cart

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
Item Name: `Sauce Labs Onesie`
Item Price: `$7.99`
```

### Test Steps

| Step | Action                                | Expected Result                                  |
| ---- | ------------------------------------- | ------------------------------------------------ |
| 1    | Locate and verify **Checkout Item**   | **Checkout Item** displayed: `Sauce Labs Onesie` |
| 2    | Verify the **Item Price** in checkout | **Item Price** displayed: `$7.99`                |

---

## TC-CHECKOUT-005: Price Calculation Accuracy on Checkout Step Two

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
Item Name: `Sauce Labs Onesie`
Item Price: `$7.99`
```

### Test Steps

| Step | Action                                       | Expected Result                                  |
| ---- | -------------------------------------------- | ------------------------------------------------ |
| 1    | Locate and verify **Checkout Item**          | **Checkout Item** displayed: `Sauce Labs Onesie` |
| 2    | Locate and verify **Item Total**             | **Item Total** displayed: `$7.99`                |
| 3    | Verify the calculated **Tax** amount         | **Tax** displayed `$0.64`                        |
| 4    | Verify the calculated **Final Total** amount | **Final Total** displayed `$8.63`                |

---

## TC-CHECKOUT-006: Successfully Complete Checkout Process

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- `Sauce Labs Onesie` has been added to the cart
- User is on the [Checkout Step Two Page](https://www.saucedemo.com/checkout-step-two.html)

### Test Data

```
N/A
```

### Test Steps

| Step | Action                           | Expected Result                                                |
| ---- | -------------------------------- | -------------------------------------------------------------- |
| 1    | Click the **Finish** button      | User is navigated to the `Checkout Complete Page`              |
| 2    | Verify the **Success Message**   | **Success Message** indicating order completion was successful |
| 3    | Verify **Cart Indicator** amount | **Cart Indicator** displayed: `0`                              |
