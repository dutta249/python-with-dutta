# Python Operators 

## Overview
**Operators** are used to perform operations on variables and values. Python has **7 categories of operators**:

1. Arithmetic operators
2. Comparison operators
3. Logical operators
4. Bitwise operators
5. Assignment operators
6. Identity operators
7. Membership operators

This note walks through each category with the exact examples run in the notebook.

---

## Key Concepts
- `/` always returns a **float** (true division); `//` returns **floor division** (integer part only).
- `**` is the **exponentiation** operator.
- `and`, `or`, `not` work on **truthy/falsy** values, not just `True`/`False`.
- Bitwise operators (`&`, `|`, `~`, `>>`, `<<`) work at the **binary bit level**.
- Python has **no `++`/`--`** — always use `+= 1` / `-= 1`.
- `is`/`is not` → identity (same object in memory); `==`/`!=` → value equality.
- `in`/`not in` → membership check inside sequences.

---

## 1. Arithmetic Operators

**Setup:** `x = 5`, `y = 2`

| Operator | Expression | Result | Meaning |
|----------|-----------|--------|---------|
| `+` | `print(x + y)` | `7` | Addition |
| `-` | `print(x - y)` | `3` | Subtraction |
| `*` | `print(x * y)` | `10` | Multiplication |
| `/` | `print(x / y)` | `2.5` | True division (always returns float) |
| `%` | `print(x % y)` | `1` | Modulus (remainder) |
| `**` | `print(x ** y)` | `25` | Exponentiation (5²) |
| `//` | `print(x // 2)` | `2` | Floor division (drops decimal part) |

```python
x = 5
y = 2

print(x + y)    # 7
print(x - y)    # 3
print(x * y)    # 10
print(x / y)    # 2.5
print(x % y)    # 1
print(x ** y)   # 25
print(x // 2)   # 2
```

> 💡 **Tip:** `/` vs `//` — `/` gives a precise float result, `//` gives only the whole number part (rounded down, not truncated — matters for negative numbers).

---

## 2. Comparison (Relational) Operators

**Setup:** `x = 5`, `y = 2` (continued from above)

| Operator | Expression | Result | Meaning |
|----------|-----------|--------|---------|
| `>` | `print(x > y)` | `True` | Greater than |
| `<` | `print(x < y)` | `False` | Less than |
| `>=` | `print(x >= y)` | `True` | Greater than or equal to |
| `<=` | `print(x <= y)` | `False` | Less than or equal to |
| `==` | `print(x == y)` | `False` | Equal to (value comparison) |
| `!=` | `print(x != y)` | `True` | Not equal to |

```python
print(x > y)    # True
print(x < y)    # False
print(x >= y)   # True
print(x <= y)   # False
print(x == y)   # False
print(x != y)   # True
```

> ⚠️ **Don't confuse `==` with `=`.** `=` is assignment; `==` is comparison.

---

## 3. Logical Operators

**Setup:** `x = True`, `y = False`

| Operator | Expression | Result | Meaning |
|----------|-----------|--------|---------|
| `or` | `print(x or y)` | `True` | True if **at least one** operand is True |
| `and` | `print(x and y)` | `False` | True only if **both** operands are True |
| `not` | `print(not y)` | `True` | Inverts the boolean value |

```python
x = True
y = False

print(x or y)   # True
print(x and y)  # False
print(not y)    # True
```

**Important Points:**
- `or` → short-circuits and returns `True` as soon as one operand is `True`.
- `and` → short-circuits and returns `False` as soon as one operand is `False`.
- `not` → simply flips `True` ↔ `False`.

---

## 4. Bitwise Operators

**Setup:** `x = 2`, `y = 3` (binary: `x = 010`, `y = 011`)

| Operator | Expression | Result | Meaning |
|----------|-----------|--------|---------|
| `&` | `print(x & y)` | `2` | Bitwise AND |
| `\|` | `print(x \| y)` | `3` | Bitwise OR |
| `>>` | `print(x >> 2)` | `0` | Right shift by 2 bits |
| `<<` | `print(y << 3)` | `24` | Left shift by 3 bits |
| `~` | `print(~x)` | `-3` | Bitwise NOT (complement) |

```python
x = 2   # binary: 010
y = 3   # binary: 011

print(x & y)   # 2   → 010 & 011 = 010
print(x | y)   # 3   → 010 | 011 = 011
print(x >> 2)  # 0   → shifts bits right, drops off the end
print(y << 3)  # 24  → 011 << 3 = 011000 (binary) = 24
print(~x)      # -3  → bitwise complement: ~x = -(x+1)
```

**How each works (bit-level):**
- **`&` (AND):** Compares each bit position; result bit is `1` only if **both** bits are `1`.
  ```
    010
  & 011
  -----
    010   → 2
  ```
- **`|` (OR):** Result bit is `1` if **either** bit is `1`.
  ```
    010
  | 011
  -----
    011   → 3
  ```
- **`>>` (Right shift):** Shifts all bits to the right, dropping bits off the end (equivalent to floor-dividing by `2^n`).
- **`<<` (Left shift):** Shifts all bits to the left, filling with zeros (equivalent to multiplying by `2^n`).
- **`~` (NOT):** Flips every bit; mathematically `~x = -(x + 1)`.

> 💡 **Tip:** Left shift by `n` ≈ multiply by `2ⁿ`; right shift by `n` ≈ floor-divide by `2ⁿ`.

---

## 5. Assignment Operators

#### Basic Assignment
```python
a = 3
print(a)
# Output: 3
```

#### Compound Assignment Operators
| Operator | Meaning | Example | Equivalent to |
|----------|---------|---------|---------------|
| `+=` | Add and assign | `a += 3` | `a = a + 3` |
| `-=` | Subtract and assign | `a -= 3` | `a = a - 3` |
| `*=` | Multiply and assign | `a *= 3` | `a = a * 3` |
| `&=` | Bitwise AND and assign | `a &= 3` | `a = a & 3` |

```python
a += 3        # same as: a = a + 3
print(a)
# Output: 6   (started from a = 3)

a -= 3
a *= 3
a &= 3
```

> 💡 **Tip:** Compound assignment operators make code shorter and slightly more efficient than writing the full expression.

### ⚠️ No Increment/Decrement Operators in Python
```python
a++
++a
```
```
SyntaxError: invalid syntax
```
- Python does **not** support `a++` or `++a` (unlike C/C++/Java).
- `++a` doesn't error by itself in isolation (`+` treated as unary plus applied twice), but `a++` is invalid syntax.
- To increment a value, always use:
  ```python
  a += 1
  ```

---

## 6. Identity Operators (`is`, `is not`)

**Purpose:** Check whether two variables point to the **same object in memory** — not whether their values are equal.

| Expression | Meaning |
|------------|---------|
| `a is b` | True if `a` and `b` reference the same object |
| `a is not b` | True if `a` and `b` reference different objects |

#### Example 1 — Integers
```python
a = 3
b = 3
print(a is b)
# Output: True
```
**Why True?** Python caches/interns small integers, so `a` and `b` may point to the same object in memory.

#### Example 2 — Short Strings
```python
a = "Hello"
b = "Hello"
print(a is b)
# Output: True
```
**Why True?** Python interns short, simple string literals, so both variables reference the same string object.

#### Example 3 — Lists
```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a is b)
# Output: False
```
**Why False?** Lists are **mutable** — even with identical contents, `a` and `b` are separate objects. Python never interns lists.

#### Example 4 — Strings with hyphens
```python
a = "Hello-world"
b = "Hello-world"
print(a is b)
# Output: False

print(a is not b)
# Output: True
```
**Why False?** Strings with certain characters (like `-`) are generally **not interned** by Python, even though the values are equal.

> ⚠️ **Important takeaway:** Use `==` to compare **values**, and `is` only when you need to compare **object identity** (e.g., `x is None`). String/int interning is a CPython implementation detail — don't rely on it in real code.

---

## 7. Membership Operators (`in`, `not in`)

**Purpose:** Check whether a value exists within a sequence (string, list, tuple, etc.)

| Expression | Meaning |
|------------|---------|
| `value in sequence` | True if `value` exists in `sequence` |
| `value not in sequence` | True if `value` does NOT exist in `sequence` |

#### Example 1 — String membership
```python
x = "Delhi"
print("D" in x)
# Output: True
```

#### Example 2 — String non-membership
```python
x = "Delhi"
print("D" not in x)
# Output: False
```

#### Example 3 — List membership
```python
x = [1, 2, 3]
print(5 in x)
# Output: False
```

---

## Full Operator Summary Table

| Category | Operators |
|----------|-----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**`, `//` |
| Comparison | `>`, `<`, `>=`, `<=`, `==`, `!=` |
| Logical | `and`, `or`, `not` |
| Bitwise | `&`, `\|`, `~`, `>>`, `<<` |
| Assignment | `=`, `+=`, `-=`, `*=`, `&=`, etc. |
| Identity | `is`, `is not` |
| Membership | `in`, `not in` |

---

## Important Points
- `/` → float division; `//` → floor division. Don't mix them up.
- `and`/`or`/`not` short-circuit — evaluation stops as soon as the result is determined.
- Bitwise operators work on the **binary representation** of integers.
- `+=`, `-=`, `*=`, `&=` etc. are shorthand for reassignment — there is **no `++`/`--`** in Python.
- `is` compares **identity** (memory address); `==` compares **value**.
- Small integers & simple strings may be interned by Python → `is` can misleadingly return `True`.
- Mutable objects like lists are **never** the same object even with identical values (unless explicitly assigned, e.g. `b = a`).
- `in`/`not in` work on any iterable: strings, lists, tuples, sets, dicts (checks keys).

---

## Quick Revision (2 min recap)
- **7 operator categories:** Arithmetic, Comparison, Logical, Bitwise, Assignment, Identity, Membership.
- **Arithmetic:** `+ - * / % ** //` → `/` gives float, `//` gives floor int.
- **Comparison:** `> < >= <= == !=` → returns `True`/`False`.
- **Logical:** `and` (both true), `or` (at least one true), `not` (inverts).
- **Bitwise:** `&` AND, `|` OR, `~` NOT (`-(x+1)`), `>>` right shift (÷2ⁿ), `<<` left shift (×2ⁿ).
- **Assignment:** `+=`, `-=`, `*=`, `&=` = shorthand; **no `++`/`--`** in Python — use `a += 1`.
- **Identity (`is`/`is not`):** Same object in memory, not same value. Small ints/simple strings → often interned (`True`); lists/complex strings → usually `False`.
- **Membership (`in`/`not in`):** Checks if a value exists inside a string/list/etc.
- **Golden rule:** Use `==` for value comparison, `is` only for identity checks (like `is None`).