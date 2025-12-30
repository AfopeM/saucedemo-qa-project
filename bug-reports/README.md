# Bug Summary Report - Saucedemo

## Report Metadata

| Item            | Value                       |
| --------------- | --------------------------- |
| **Project**     | SauceDemo                   |
| **Test Cycle**  | Cycle 1 – Initial Execution |
| **Test Period** | 2025-12-14 → 2025-12-16     |
| **Prepared By** | Afope                       |
| **Report Date** | 2025-12-16                  |

## 📋 Table of Contents

1. [Defect Summary](#1-defect-summary)
2. [Severity Distribution](#2-severity-distribution)
3. [Defects by Functional Area](#3-defects-by-functional-area)
4. [High Severity Defects](#4-high-severity-defects)
5. [Observations](#5-observations)
6. [Recommendations](#6-Recommendations)
7. [Appendices](#7-appendices)

---

## 1. Defect Summary

### 1.1 Overview

This report summarizes all the defects identified during **functional and exploratory testing** of the Sauce Demo e-commerce application. Its purpose is to provide stakeholders with a **clear view of product stability, feature risk, and release readiness**, based on defect severity and impact to core user purchase workflows.

### 1.2 Defect Insight

| Metric               | Value |
| -------------------- | ----- |
| Total Defects Logged | 11    |
| High                 | 5     |
| Medium               | 2     |
| Low                  | 1     |
| Open                 | 8     |
| Blocked              | 3     |
| Fixed                | 0     |

---

## 2. Severity Distribution

| Severity | Count | % of Total |
| -------- | ----- | ---------- |
| High     | 5     | 62.5%      |
| Medium   | 2     | 25.0%      |
| Low      | 1     | 12.5%      |

---

## 3. Defects by Functional Area

| Module    | Defect Count |
| --------- | ------------ |
| Login     | 1            |
| Inventory | 4            |
| Cart      | 1            |
| Checkout  | 2            |

---

## 4. High Severity Defects

| Bug ID  | Severity | Module   | Status | Impact Summary                    |
| ------- | -------- | -------- | ------ | --------------------------------- |
| BUG-006 | 🔴 High  | Cart     | Open   | User can checkout with Empty cart |
| BUG-007 | 🔴 High  | Checkout | Open   | Wrong data type submit            |
| BUG-008 | 🔴 High  | Checkout | Open   | Prevents order completion         |

---

## 5. Observations

- UI-related issues are minimal
- **Inventory** and **Checkout** make up the majority of defects.
- Over **50% of defects are High**, indicating high risk in user **purchase flows**.

---

## 6. Recommendations

Due to the high risk in core user workflow I beleive saucedemo application is not ready for release

1. Resolve all **High** severity defects
2. Perform focused regression testing on **Inventory and Checkout**
3. Re-evaluate release readiness after fixes are verified

---

## 7. Appendices

- **A. Test Summary Report** – [README.md](/test-cases/README.md)
- **B. Test Execution Log** – [test-execution-log.md](/docs/test-execution-log.md)
- **C. Individual Bug Evidence** – [BUG Evidence Folder](/evidence/)
