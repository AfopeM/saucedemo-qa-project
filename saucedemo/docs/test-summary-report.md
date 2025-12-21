# Test Summary Report - Saucedemo

## Report Metadata

| Item            | Value                       |
| --------------- | --------------------------- |
| **Project**     | SauceDemo                   |
| **Test Cycle**  | Cycle 1 – Initial Execution |
| **Test Period** | 2025-12-14 → 2025-12-16     |
| **Prepared By** | Afope                       |
| **Report Date** | 2025-12-16                  |

## 📋 Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Test Execution Results](#2-test-execution-results)
3. [Test Coverage Overview](#3-test-coverage-overview)
4. [Defect Summary](#4-defect-summary)
5. [Risk Assessment](#5-risk-assessment)
6. [Test Environment](#5-test-environment)
7. [Recommendations](#5-recommendations)
8. [Final Assessment](#5-final-assessment)
9. [Appendices](#9-appendices)

---

## 1. Executive Summary

### 1.1 Test Scope and Objectives

This report consolidates all defects identified during **functional and exploratory testing** of the Sauce Demo application.

Its purpose is to provide stakeholders with a **clear view of product stability, risk concentration, and release readiness**, based on defect severity and impact to core user workflows.

### 1.2 Test Execution Overview

| Metric               | Value |
| -------------------- | ----- |
| **Total Test Cases** | 20    |
| **Executed**         | 17    |
| **Passed**           | 9     |
| **Failed**           | 8     |
| **Blocked**          | 3     |
| **Pass Rate**        | 45.0% |

---

## 2. Test Execution Results

### 2.1 Overall Execution Status

| Status      | Count | Percentage |
| ----------- | ----- | ---------- |
| **Passed**  | 9     | 45.0%      |
| **Failed**  | 8     | 40.0%      |
| **Blocked** | 3     | 15%        |

### 2.2 Results by Functional Area

| Area          | Total | Passed | Failed | Pass Rate |
| ------------- | ----- | ------ | ------ | --------- |
| **Login**     | 5     | 4      | 1      | 80.0%     |
| **Inventory** | 5     | 1      | 4      | 20.0%     |
| **Cart**      | 4     | 3      | 1      | 75.0%     |
| **Checkout**  | 6     | 1      | 2      | 16.7%     |

> `checkout functionality` and `Inventory listing` present the **highest risk**, with a pass rate of **16.7%** and **20.0%** respectively

---

## 3. Test Coverage Overview

### 3.1 Functional Coverage

- Login & Authentication
- Inventory Listing & Sorting
- Add / Remove Cart Items
- Cart Overview
- Checkout (Step One & Step Two)

### 3.2 Test Types Executed

- Positive (happy path)
- Negative (invalid inputs)
- Boundary / edge cases
- Exploratory testing

---

## 4. Defect Summary

### 4.1 Defects Identified

| Bug ID  | Description                                    | Severity  | Status |
| ------- | ---------------------------------------------- | --------- | ------ |
| BUG-001 | Login Successfully Handles Trailing Whitespace | 🟡 Medium | Open   |
| BUG-002 | Inventory Items Display Correct Details        | 🟡 Medium | Open   |
| BUG-003 | Successfully Sort Products by Name (Z → A)     | 🟢 Low    | Open   |
| BUG-004 | Item Sort Order Persist After Page Refresh     | 🟢 Low    | Open   |
| BUG-005 | Remove Item From Cart on Inventory Page        | 🔴 High   | Open   |
| BUG-006 | Checkout Process Fails When Cart is Empty      | 🔴 High   | Open   |
| BUG-007 | Checkout Step One Form Rejects Invalid Data    | 🟡 Medium | Open   |
| BUG-008 | Checkout Step One Form Retains User Data       | 🔴 High   | Open   |

---

## 5. Risk Assessment

### 5.1 High-Risk Areas

- **Checkout Step One Form:** Blocks checkout progression (BUG-008)
- **Cart Item Removal:** Incorrect cart item removal logic (BUG-005)
- **Checkout with Empty Cart:** Invalid workflow allowed (BUG-006)

### 5.2 Medium-Risk Areas

- **Login Edge Case Handling:** Trailing whitespace in login Username field is not trimmed (BUG-001)
- **Inventory Sorting Broken:** Sorting fails to arrange items by Name (Z -> A) (BUG-003)
- **Inventory Sorting Inconsistencies:** Sorting resets on page refresh (BUG-004)

---

## 6. Test Environment

| Item                  | Details                            |
| --------------------- | ---------------------------------- |
| **Application URL**   | SauceDemo                          |
| **Browser**           | Brave 1.85.111                     |
| **Operating System**  | Windows 11                         |
| **Test Accounts**     | `standard_user` and `problem_user` |
| **Environment State** | Stable                             |

---

## 7. Recommendations

### Immediate

1. Fix Checkout Step One data retention issue (BUG-008).
2. Fix cart item removal logic (BUG-005).

### Before Next Cycle

- Test and resolve remaining open defects.
- Perform full regression testing on checkout and cart workflows.

---

## 8. Final Assessment

The application **does not meet release criteria** for this cycle due to:

- Multiple **high-severity** defects
- **Blocked** checkout flow for `problem_user`
- **Low pass rate** in critical functional areas

> A follow-up **confrimation** and **regressioin** test cycle is required after fixes are implemented.

---

## 9. Appendices

- **A. Test Execution Log** – [test-execution-log.md](test-execution-log.md)
- **B. Test Cases** – [Test Cases Folder](./test-cases/)
- **C. Defect Summary Report** – [bug-summary-report.md](./bug-reports/bug-summary-report.md)
- **D. Individual Bug Evidence** – [BUG Reports Folder](./bug-reports/)
