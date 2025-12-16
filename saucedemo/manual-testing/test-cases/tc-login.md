# Login Test Cases - Sauce Demo

🔑 **Feature:** User Authentication  
📅 **Created:** 2025-12-12  
✏️ **Updated:** 2025-12-15  
👤 **Author:** Afope

## Test Case Summary

| Test ID      | Test Case Name                                 | Priority  |
| ------------ | ---------------------------------------------- | --------- |
| TC-LOGIN-001 | Successful Login With Valid Credentials        | 🔴 High   |
| TC-LOGIN-002 | Unsuccessful Login With Invalid Credentials    | 🔴 High   |
| TC-LOGIN-003 | Login Fails With Empty Username Field          | 🟡 Medium |
| TC-LOGIN-004 | Login Fails With Empty Password Field          | 🟡 Medium |
| TC-LOGIN-005 | Login Successfully Handles Trailing Whitespace | 🔴 High   |

---

## TC-LOGIN-001: Successful Login With Valid Credentials

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- User is on the [Home Page](https://www.saucedemo.com/)

### Test Data

```
Username: `standard_user`
Password: `secret_sauce`
```

### Test Steps

| Step | Action                                            | Expected Result                                                                |
| ---- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1    | Enter `standard_user` into the **Username** field | **Username** field displays the entered text correctly with no errors          |
| 2    | Enter `secret_sauce` into the **Password** field  | **Password** field displays the entered text correctly with no errors (masked) |
| 3    | Click the **Login** button                        | Navigates user to the `Inventory Page` and full product list is displayed      |

---

## TC-LOGIN-002: Unsuccessful Login With Invalid Credentials

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Negative |

### Preconditions

- User is on the [Home Page](https://www.saucedemo.com/)

### Test Data

```
Username: `fake_user`
Password: `secret_sauce`
```

### Test Steps

| Step | Action                                           | Expected Result                                                                |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| 1    | Enter `fake_user` into the **Username** field    | **Username** field displays the entered text correctly with no errors          |
| 2    | Enter `secret_sauce` into the **Password** field | **Password** field displays the entered text correctly with no errors (masked) |
| 3    | Click the **Login** button                       | `Error Message` indicating **Username** field is wrong                         |

---

## TC-LOGIN-003: Login Fails With Empty Username Field

| Attribute | Value     |
| --------- | --------- |
| Priority  | 🟡 Medium |
| Test Type | Negative  |

### Preconditions

- User is on the [Home Page](https://www.saucedemo.com/)

### Test Data

```
Username: [Leave Empty]
Password: `secret_sauce`
```

### Test Steps

| Step | Action                                           | Expected Result                                                                |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| 1    | Leave **Username** field empty                   | **Username** field is empty                                                    |
| 2    | Enter `secret_sauce` into the **Password** field | **Password** field displays the entered text correctly with no errors (masked) |
| 3    | Click the **Login** button                       | `Error Message` indicating **Username** field is wrong                         |

---

## TC-LOGIN-004: Login Fails With Empty Password Field

| Attribute | Value     |
| --------- | --------- |
| Priority  | 🟡 Medium |
| Test Type | Negative  |

### Preconditions

- User is on the [Home Page](https://www.saucedemo.com/)

### Test Data

```
Username: `standard_user`
Password: [Leave Empty]
```

### Test Steps

| Step | Action                                            | Expected Result                                                       |
| ---- | ------------------------------------------------- | --------------------------------------------------------------------- |
| 1    | Enter `standard_user` into the **Username** field | **Username** field displays the entered text correctly with no errors |
| 2    | Leave **Password** field empty                    | **Password** field is empty                                           |
| 3    | Click the **Login** button                        | `Error Message` indicating **Password** field is wrong                |

---

## TC-LOGIN-005: Login Successfully Handles Trailing Whitespace

| Attribute | Value    |
| --------- | -------- |
| Priority  | 🔴 High  |
| Test Type | Positive |

### Preconditions

- User is on the [Home Page](https://www.saucedemo.com/)

### Test Data

```
Username: `standard_user `
Password: `secret_sauce`
```

### Test Steps

| Step | Action                                                                   | Expected Result                                                                             |
| ---- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 1    | Enter `standard_user ` (with trailing space) into the **Username** field | **Username** field displays the entered text correctly with trailing whitespace **trimmed** |
| 2    | Enter `secret_sauce` into the **Password** field                         | **Password** field displays the entered text correctly with no errors (masked)              |
| 3    | Click the **Login** button                                               | Navigates user to the `Inventory Page` and full product list is displayed                   |
