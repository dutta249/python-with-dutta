# If-Else, If-Elif-Else, and Nested If-Else in Python

*Source: 100 Days of Python Programming — Day 7 (CampusX)*

## Overview

This topic covers three related conditional structures in Python, building up in complexity:

1. **if-else** — a simple two-way decision (do this, or do that).
2. **if-elif-else** — a multi-way decision with several distinct conditions checked in order.
3. **Nested if-else** — placing an `if-else` (or `if-elif-else`) block *inside* another `if-else` block, so a second condition is only checked after a first condition has already been satisfied (or failed).

All three are demonstrated together using a **login/authentication simulator** example, showing how the logic evolves from a basic check to a more capable, multi-step validation flow.

The running example throughout is a **login/authentication simulator**:
- Correct email: `campusx@gmail.com`
- Correct password: `1234`

## Key Concepts

- **if-else**: checks one condition; runs one block if it's `True`, and a different block if it's `False`. Only two possible outcomes.
- **if-elif-else**: checks multiple conditions in sequence, each with its own `elif`; Python runs the block for the *first* condition that evaluates to `True`, and falls back to `else` only if none of them match.
- **Nesting**: an `if`, `elif`, or `else` block can contain another complete `if-else` (or `if-elif-else`) block indented inside it.
- Indentation controls which block a statement belongs to — Python uses indentation (not braces) to define nested scope.
- Nesting allows **conditional retries** — e.g., if the password is wrong, ask the user to re-enter it, but only if the email was correct in the first place.
- Combined with the `and` operator, conditions (nested or not) let you build increasingly specific checks (e.g., "email is correct **and** password is correct" vs. "email is correct **but** password is wrong").

## Detailed Explanation

### Version 1 — Simple if-else (single condition check)

```python
# correct email- campusx@gmail.com
# password - 1234

email = input("Apna email bata")
password = input("Apna passowrd bhi bata")

if email == "campusx@gmail.com" and password == "1234":
    print("Welcome")
else:
    print("Incorrect credentials")
```

**How it works:**
- Takes `email` and `password` as input from the user.
- Uses the `and` operator so **both** conditions must be true to print `"Welcome"`.
- If either the email or the password is wrong, it falls into the single `else` and prints `"Incorrect credentials"` — there's no way to tell the user *which* part was wrong.

**Example run:**
```
Apna email bata: campusx@gmail.com
Apna passowrd bhi bata: 1234
Welcome
```

> ⚠️ **Limitation**: This version can't distinguish between "wrong email" and "correct email but wrong password" — it treats both as the same generic failure. This motivates moving to nested if-else.

### Version 2 — If-Elif-Else with a Nested If-Else Inside It

```python
# correct email- campusx@gmail.com
# password - 1234

email = input("Apna email bata")
password = input("Apna passowrd bhi bata")

if email == "campusx@gmail.com" and password == "1234":
    print("Welcome")
elif email == "campusx@gmail.com" and password != "1234":
    print("Password Incorrect")
    password = input("Password fir se bol")
    if password == "1234":
        print("Finally correct")
    else:
        print("Still incorrect")
else:
    print("Incorrect credentials")
```

**How it works — step by step:**
This version is an **if-elif-else** structure at the top level, with a small **nested if-else** tucked inside the `elif` branch.

1. **`if` (first condition)**: email correct **and** password correct → `"Welcome"`.
2. **`elif` (second condition)**: email correct **but** password wrong → enters this branch.
   - Prints `"Password Incorrect"`.
   - Asks the user to re-enter the password with a second `input()`.
   - **Nested if-else**: checks the *new* password.
     - If it now matches `"1234"` → `"Finally correct"`.
     - If it's still wrong → `"Still incorrect"`.
3. **`else` (fallback)**: if the email itself was wrong (regardless of password) → `"Incorrect credentials"`.

**Important points:**
- The **if-elif-else** at the top handles three distinct outcomes for the *initial* attempt: fully correct, correct email/wrong password, or wrong email.
- The **nested if-else** for the password retry is only reachable **through** the `elif` branch — i.e., only when the email was already correct. This is the core idea of nesting: an inner decision that only matters once an outer condition is met.
- Giving the user a second chance to re-enter the password (rather than just failing immediately) is a simple example of improving user experience through nested logic.
- The email check is done only once at the top; there's no retry logic for a wrong email in this version — it goes straight to `"Incorrect credentials"`.

### Version 3 — Nested If-Else Wrapping an If-Elif-Else (multi-level nesting)

A further extended version (seen in the full code) wraps the entire if-elif-else from Version 2 inside an **outer if-else** that first validates the email format:

```python
# correct email- campusx@gmail.com
# password - 1234

email = input("Apna email bata")
if '@' in email:
    password = input("Apna passowrd bhi bata")

    if email == "campusx@gmail.com" and password == "1234":
        print("Welcome")
    elif email == "campusx@gmail.com" and password != "1234":
        print("Password Incorrect")
        password = input("Password fir se bol")
        if password == "1234":
            print("Finally correct")
        else:
            print("Still incorrect")
    else:
        print("Incorrect credentials")
else:
    print("Email galat hai sahi likho")
```

**How this differs from Version 2:**
- Adds an **outer if-else validation layer**: `if '@' in email:` checks whether the email even looks valid (contains `@`) **before** asking for a password at all.
- The entire **if-elif-else** block from Version 2 (welcome / password incorrect+retry / incorrect credentials) is now **nested inside** this outer `if`, so it only runs when the email format passes.
- If `'@'` is not in the email, the outer `else` triggers and it skips straight to `print("Email galat hai sahi likho")` (*"Email is wrong, type it correctly"*) — the password is never even asked for.
- This demonstrates **three levels of nesting** stacked together:
  - **Level 1 (outer if-else)**: is the email format valid?
  - **Level 2 (if-elif-else, nested inside Level 1)**: is the email/password combo correct?
  - **Level 3 (nested if-else, inside Level 2's `elif`)**: retry the password check.

## Traced Example Runs (from screenshots)

| Email entered | Password entered | Output |
|---|---|---|
| `campusx@gmail.com` | `1234` | `Welcome` |
| `campusx@gmail.com` | `12535` (then re-entered `1234`) | `Password Incorrect` → `Finally correct` |
| `campusx@gmail.com` | `315236` (then re-entered `rjyyjr`) | `Password Incorrect` → `Still incorrect` |

**Trace for the "Finally correct" example:**
```
Apna email bata: campusx@gmail.com
Apna passowrd bhi bata: 12535
Password Incorrect
Password fir se bol: 1234
Finally correct
```
- Email matched → entered `elif` branch (password didn't match `1234` the first time).
- Prompted again, user typed `1234` correctly this time → nested `if` triggered → `"Finally correct"`.

**Trace for the "Still incorrect" example:**
```
Apna email bata: campusx@gmail.com
Apna passowrd bhi bata: 315236
Password Incorrect
Password fir se bol: rjyyjr
Still incorrect
```
- Same path, but the second password attempt was also wrong → nested `else` triggered → `"Still incorrect"`.

## Things to Remember

- **if-else** = two-way decision: exactly one of two blocks runs.
- **if-elif-else** = multi-way decision: Python checks conditions top to bottom and runs the block for the **first** one that's `True`; `else` only runs if none matched.
- **Nesting** = placing a complete if-else (or if-elif-else) **inside** another one's block. The inner block only runs if the outer condition that contains it is satisfied.
- Use `and` to combine multiple conditions in a single `if`/`elif` check (e.g., email **and** password both correct).
- Nesting is useful for **sequential/multi-step validation** — e.g., check format first (if-else), then check correctness (if-elif-else), then allow a retry (nested if-else).
- Be careful with **indentation** — it determines which block a line belongs to; misplaced indentation changes the logic entirely.
- Adding retry logic (asking for input again inside a branch) is a simple, practical use of nesting to improve program flow instead of just failing outright.
- The more you nest, the deeper the indentation — readability can suffer if nesting goes too deep (not explicitly stated in the screenshots, but implied by the structure shown).

## Quick Revision

- **if-else**: one condition, two outcomes.
- **if-elif-else**: several conditions checked in order, first match wins.
- **Nested if-else**: an if-else placed inside another if-else's block, so the inner check only matters once the outer condition lets execution "fall into" it.

In the login example, all three come together: the **outer if-else** validates the email format (`'@' in email`); **nested inside it**, an **if-elif-else** validates the email+password combination; and **nested inside the `elif`** (correct email, wrong password), a **third-level if-else** gives the user a second chance to type the password correctly.
