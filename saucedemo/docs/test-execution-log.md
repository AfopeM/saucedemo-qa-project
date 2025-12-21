# Test Execution Log - SauceDemo

## Test Cycle Information

| Item            | Value                       |
| --------------- | --------------------------- |
| **Environment** | https://www.saucedemo.com/  |
| **Test Cycle**  | Cycle 1 – Initial Execution |
| **Tester**      | Afope                       |
| **Start Date**  | 2025-12-14                  |
| **End Date**    | 2025-12-14                  |
| **Browser**     | Brave 1.85.111              |

---

## Test Execution Summary

### Execution Metrics

| Metric           | Value |
| ---------------- | ----- |
| Total Test Cases | 20    |
| Executed         | 17    |
| Passed           | 9     |
| Failed           | 8     |
| Blocked          | 3     |
| Pass Rate        | 45.0% |

### Execution Insights

- Execution was performed using the **problem_user** account, which exposes application defects.
- Majority of failures occurred in **Inventory sorting** and **Checkout Step One**.
- 3 test cases were blocked due to inability to proceed past **Checkout Step One**.
- Failures uncovered **8 unique defects**, indicating high defect density in core user flows.

---

## Executed Test Cases

| Test ID          | Title                                                     | Exec Time | Status  | Actual Result                                                                            | Defect ID | Notes                  |
| ---------------- | --------------------------------------------------------- | --------- | ------- | ---------------------------------------------------------------------------------------- | --------- | ---------------------- |
| TC-LOGIN-001     | Successful Login With Valid Credentials                   | 12:33 PM  | ✅ Pass | User is navigated to the `Inventory Page` and full product list is displayed             | —         | —                      |
| TC-LOGIN-002     | Unsuccessful Login With Invalid Credentials               | 12:36 PM  | ✅ Pass | Error message is displayed and user remained on `Home Page`                              | —         | —                      |
| TC-LOGIN-003     | Login Fails With Empty Username Field                     | 12:41 PM  | ✅ Pass | Error message is displayed and user remained on `Home Page`                              | —         | —                      |
| TC-LOGIN-004     | Login Fails With Empty Password Field                     | 12:41 PM  | ✅ Pass | Error message is displayed                                                               | —         | —                      |
| TC-LOGIN-005     | Login Successfully Handles Trailing Whitespace            | 12:44 PM  | ❌ Fail | Error message is displayed                                                               | BUG-001   | —                      |
| TC-INVENTORY-001 | Inventory Items Display Correct Details                   | 12:52 PM  | ❌ Fail | Item `Image` did not match test data                                                     | BUG-002   | —                      |
| TC-INVENTORY-002 | Successfully Sort Products by Name (Z → A)                | 12:56 PM  | ❌ Fail | **First Name** and **Last Name** do not match test data expectation                      | BUG-003   | —                      |
| TC-INVENTORY-003 | Item Sort Order Persist After Page Refresh                | 1:01 PM   | ❌ Fail | Sorting order of `Name Z->A` was reset after refresh                                     | BUG-004   | —                      |
| TC-INVENTORY-004 | Add Item to Cart From Inventory Page                      | 1:03 PM   | ✅ Pass | Item added to cart, button changed to **Remove** and **Cart Indicator** increases to `1` | —         | —                      |
| TC-INVENTORY-005 | Remove Item From Cart on Inventory Page                   | 1:04 PM   | ❌ Fail | Item remains in cart, button does not changed and **Cart Indicator** remains at `1`      | BUG-005   | —                      |
| TC-CART-001      | Cart Items Persist After Page Reload                      | 1:16 PM   | ✅ Pass | Cart item remain unchanged and **Cart Indicator** remains at `1`                         | —         | —                      |
| TC-CART-002      | Remove Item from Cart on Cart Page                        | 1:17 PM   | ✅ Pass | Item is removed from cart and **Cart Indicator** decreases by `1`                        | —         | —                      |
| TC-CART-003      | Checkout Process Fails When Cart is Empty                 | 1:17 PM   | ❌ Fail | User is navigated to `Checkout Step One Page`                                            | BUG-006   | —                      |
| TC-CART-004      | Checkout Succeeds with Item in Cart                       | 1:21 PM   | ✅ Pass | User is navigated to `Checkout Step One Page`                                            | —         | —                      |
| TC-CHECKOUT-001  | Incomplete Checkout Step One Form Blocks Checkout Process | 1:24 PM   | ✅ Pass | Error message is displayed and user remains on `Checkout Step One Page`                  | —         | —                      |
| TC-CHECKOUT-002  | Checkout Step One Form Rejects Invalid Data               | 1:27 PM   | ❌ Fail | User is navigated to `Checkout Step Two Page`                                            | BUG-007   | —                      |
| TC-CHECKOUT-003  | Checkout Step One Form Retains User Data                  | 1:31 PM   | ❌ Fail | **Last Name** field is cleared and user is navigated to `Checkout Step Two Page`         | BUG-008   | TC-CHECKOUT-004 to 006 |

## Blocked Test Cases

| Test ID         | Title                                           | Status     | Notes |
| --------------- | ----------------------------------------------- | ---------- | ----- |
| TC-CHECKOUT-004 | Checkout Step Two Displays Correct Item in Cart | ⏸️ Blocked | —     |
| TC-CHECKOUT-005 | Price Calculation Accuracy on Checkout Step Two | ⏸️ Blocked | —     |
| TC-CHECKOUT-006 | Successfully Complete Checkout Process          | ⏸️ Blocked | —     |
