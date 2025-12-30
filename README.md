# SAUCEDEMO - QA PROJECT

## Overview

In this project I focused on building manual and automation testing fundamentals: exploratory testing, test case design, bug reporting, and test planning.

**Duration**: 2025/12/13 - 2025/12/24
**Time Invested**: ~30 hours across 10 days
**Application Tested**: [Sauce Demo](https://www.saucedemo.com/)

---

## Deliverables

### 🔍 Application Discovery - [View Exploratory Test →](./docs/exploratory-testing.md)

Initial exploratory testing findings including:

- Target user
- Application map
- Test user behaviour
- Feature inventory
- Edge cases identified

---

### 📋 Test Plan - [View Test Plan →](./docs/test-plan.md)

Comprehensive testing strategy covering scope, approach, risk assessment, and success criteria.

**Highlights**:

- Risk matrix prioritizing login and checkout flows
- Clear entry/exit criteria
- Measurable success metrics
- Alignment with business priorities

---

### 🧪 Test Cases (20 Total) - [View All Test Cases →](/test-cases/)

| Feature   | Test Cases | Coverage                                                                        |
| --------- | ---------- | ------------------------------------------------------------------------------- |
| Login     | 5          | Valid credentials, empty fields, missing username/password, trailing whitespace |
| Inventory | 5          | Browsing, sorting, persistence sorting, add/remove items                        |
| Cart      | 4          | Remove items, persistence, counter validation, fail checkout with empty cart    |
| Checkout  | 6          | Complete flow, form validation, errors                                          |

---

### 🐛 Bug Report (8 Documented) - [View All Bugs →](/bug-reports/)

| Bug ID  | Title                                                    | Severity  | Priority | Status |
| ------- | -------------------------------------------------------- | --------- | -------- | ------ |
| BUG-001 | Login Fails When Credentials Contain Trailing Whitespace | 🟡 Medium | P2       | Open   |
| BUG-002 | Inventory Items Display Incorrect Product Details        | 🔴 High   | P2       | Open   |
| BUG-003 | Item Sorting by Name (Z → A) Fails                       | 🟡 Medium | P3       | Open   |
| BUG-004 | Refreshing Page Resets Item Sorting                      | 🟢 Low    | P3       | Open   |
| BUG-005 | Remove Button Does Not Remove Item From Cart             | 🔴 High   | P2       | Open   |
| BUG-006 | Checkout Process Succeeds With an Empty Cart             | 🔴 High   | P2       | Open   |
| BUG-007 | Checkout Step One Accepts Invalid Data                   | 🔴 High   | P2       | Open   |
| BUG-008 | Checkout Step One Form Does Not Retain Data              | 🔴 High   | P2       | Open   |

**Each bug includes**:

- Step-by-step reproduction
- Screenshots/evidence
- Expected vs. actual results
- Environment details

---

### 🧪 Automated Execution Summary (16 Automated Tests) - [View Test Execution Report →](/tests/)

| Metric                | Result                  |
| --------------------- | ----------------------- |
| **Framework**         | Playwright + TypeScript |
| **Primary Test User** | `problem_user`          |
| **Total Tests**       | 16                      |
| **Overall Pass Rate** | **65.5%**               |

---

### 🚦 Test Health Breakdown

| Suite          | Passed | Failed | Pass Rate |
| -------------- | ------ | ------ | --------- |
| **Smoke**      | 4      | 4      | 50%       |
| **Regression** | 6      | 2      | 75%       |
| **Critical**   | 6      | 5      | 54.5%     |

---

### ❌ Failed Critical Scenarios (7)

| Test ID          | Area      | Description                     | Impact    |
| ---------------- | --------- | ------------------------------- | --------- |
| TC-CART-003      | Cart      | Empty cart checkout not blocked | 🔴 High   |
| TC-CHECKOUT-002  | Checkout  | Invalid user info accepted      | 🔴 High   |
| TC-CHECKOUT-003  | Checkout  | Valid user info rejected        | 🔴 High   |
| TC-CHECKOUT-004  | Checkout  | Incorrect order summary         | 🔴 High   |
| TC-CHECKOUT-005  | Checkout  | Price calculation incorrect     | 🔴 High   |
| TC-CHECKOUT-006  | Checkout  | Checkout completion fails       | 🔴 High   |
| TC-INVENTORY-001 | Inventory | Image validation false positive | 🟡 Medium |

---

### ⚠️ Known Automation Limitation

| Test ID          | Issue Type     | Notes                                                                                               |
| ---------------- | -------------- | --------------------------------------------------------------------------------------------------- |
| TC-INVENTORY-001 | False Positive | Image `alt` text is correct, but actual image assets are broken. Visual validation not implemented. |

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download Version 18+](https://nodejs.org/)
- **pnpm**: (Recommended) Install via `npm install -g pnpm`
- **VS Code**: (Recommended) With the **Playwright Test** extension installed.

---

## 🚀 Getting Started

### 1. Clone the Repository

If you are working with an existing project, clone it first:

```bash
git clone <your-repo-url>
cd saucedemo-qa-project
```
