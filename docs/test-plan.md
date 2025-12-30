# Test Plan - SauceDemo

## Document Information

- 📦 **Project**: Sauce Demo
- 🏷️ **Version**: 2.0
- 📅 **Created:** 2025-12-14
- ✏️ **Updated:** 2025-12-24
- 👤 **Tester:** Afope
- ✅ **Status**: Final

## 📋 Table of Contents

1. [Test Plan Overview](#1-test-plan-overview)
2. [Scope](#2-scope)
3. [Test Objectives](#3-test-objectives)
4. [Test Strategy](#4-test-strategy)
5. [Test Environment](#5-test-environment)
6. [Entry and Exit Criteria](#5-entry-and-exit-criteria)
7. [Risks and Mitigation](#5-risks-and-mitigation)

---

## 1. Test Plan Overview

This document defines the overall testing strategy for the Sauce Demo e-commerce application.  
It outlines **what will be tested**, **why those areas are critical**, and **how testing will mitigate risk** across the complete user purchase workflow.

The goal is to ensure that testers, stakeholders, and developers clearly understand the **test scope, priorities, risks, and expected quality outcomes**.

---

## 2. Scope

### 2.1 In-Scope Features

- User Login / Authentication
- Inventory Listing
- Add to Cart / Remove from Cart
- Inventory Sorting (Price, Name)
- Cart Overview
- Checkout Process

These features directly impact the user’s ability to complete a purchase and therefore represent **high-risk, high-priority functionality**.

#### 2.2 Out-of-Scope Features

The following items are excluded as they do not directly impact the core purchase workflow being tested:

- Product Details Page
- Payment processing
- Third-party integrations
- Order fulfillment and shipping

---

## 3. Test Objectives

The objectives of this test cycle are to:

- Verify basic **desktop and mobile responsiveness**
- Execute at least **90% of planned test cases**
- Identify and report all **high-risk and high-impact defects**
- Ensure no critical defects block the primary user journey

---

## 4. Test Strategy

Testing will follow a manual testing approach focused on validating the core e-commerce user workflow from **login to checkout** completion. The strategy prioritizes **high-impact functionality** that directly affects a user’s ability to browse products, manage a cart, and complete checkout.

Testing types include:

- **Exploratory testing** to identify usability issues and unexpected defects
- **Functional testing** to verify expected core system behavior
- **Regression testing** to ensure fixes do not break existing functionality

Test cases are designed using **positive and negative scenarios, and equivalence partitioning** where applicable. Defects are logged with clear reproduction steps and supporting evidence.

## 5. Test Environment

- **Application URL**: https://www.saucedemo.com/
- **Browsers**: Brave
- **Operating System**: Windows 11
- **Device Type**: Desktop
- **Test Accounts**: `standard_user`, `problem_user`
- **Evidence Tools**: Awesome Screenshot & Screen Recorder

---

## 6. Entry and Exit Criteria

### 6.1 Entry Criteria

Testing will begin once:

- A stable test environment is available
- The latest application build is deployed
- Approved test cases for critical workflows are ready
- Valid test credentials are available
- Defect logging and evidence tools are configured

### 6.2 Exit Criteria

Testing will conclude when:

- At least **90% of in-scope test cases** are executed
- All **critical and high-severity defects** are resolved
- No open defects block the core user purchase workflow
- Test results and defect reports are completed

---

## 7. Risks and Mitigation

| Risk                               | Impact    | Mitigation                                                                   |
| ---------------------------------- | --------- | ---------------------------------------------------------------------------- |
| Limited browser/device coverage    | 🟡 Medium | Focus on core workflows and document coverage limitations                    |
| Demo application limitations       | 🟡 Medium | Validate against expected demo behavior and clearly label known demo defects |
| Late discovery of critical defects | 🔴 High   | Prioritize end-to-end and high-risk scenarios first                          |
| Manual testing coverage gaps       | 🟡 Medium | Use exploratory testing and identify candidates for future automation        |
