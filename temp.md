# Python Indentation

## Overview
In many programming languages (like C, Java, JavaScript), blocks of code are grouped using **curly braces `{}`**. Python does **not** use curly braces — instead, it uses **indentation (whitespace at the start of a line)** to define which statements belong to which block (`if`, `else`, `for`, `while`, functions, etc.).

This means indentation in Python is not just a style choice — it is **syntactically required**. Getting it wrong causes an `IndentationError`.

## Key Concepts
- Python groups statements into blocks using **consistent indentation**, not braces.
- Every statement inside the same block **must have the exact same indentation level**.
- A new block (after a `:`) must be **indented more** than the line that introduced it.
- Mixing indentation levels incorrectly leads to different types of `IndentationError`.
- Indentation is normally done using **4 spaces** per level (a common Python convention).

## Detailed Explanation

### 1. The Non-Python Style (For Comparison)
Languages like C/Java use braces to mark blocks, so indentation there is just for readability, not required:

```c
if (name == "xyz") {
    something;
    something;
} else {
    something_else;
    something_else;
}
```

Here, indentation doesn't matter to the compiler — only the `{ }` do.

### 2. Python Style — Indentation Defines the Block

```python
if name == "xyz":
    line1
    line2
    line3
else:
    line1
    line2
    line3
```

**How it works:**
- The `:` at the end of `if name == "xyz":` tells Python "a new block starts here."
- All statements belonging to that `if` block (`line1`, `line2`, `line3`) must be indented **by the same amount**.
- The `else:` must line up with the `if` (same indentation level as `if`), and its own block must again be indented consistently.

> **Tip:** Think of indentation as Python's replacement for `{ }`. Whatever is indented "under" a statement is considered part of that statement's block.

### 3. Common Indentation Errors (from examples)

#### Error 1 — `IndentationError: expected an indented block`
```python
if name == "xyz":
print('line 1')      # ❌ not indented at all
    print('line2')
else:
    print('line3')
```
**Why it fails:** After a line ending in `:`, Python *expects* the next line to be indented (to start the block). Here `print('line 1')` has no indentation, so Python doesn't know it belongs to the `if`.

#### Error 2 — `IndentationError: unindent does not match any outer indentation level`
```python
name = "244"
if name == "xyz":
        print('line 1')   # indented 8 spaces
    print('line2')        # indented 4 spaces  ❌
else:
    print('line3')
```
**Why it fails:** `print('line 1')` starts the block at an 8-space indent. The next line, `print('line2')`, tries to "unindent" to 4 spaces — but 4 spaces doesn't match *any* indentation level that Python has already established (it's neither the 8-space block level nor the 0-space outer level). Python gets confused about which block this line belongs to.

> **Key takeaway:** Once you set an indentation level for a block, every line in that block must match it exactly. You can't randomly mix 4 spaces and 8 spaces within the same block.

#### Error 3 — `IndentationError: unexpected indent`
```python
name = "244"
if name == "xyz":
    print('line 1')
    print('line2')
    if 5 == 5:
        print('line 5')
else:
    print('line3')
```

**General pattern to remember:** This example also shows a **nested `if`** — an `if` statement inside another `if` block:
```python
if name == "xyz":
    print('line 1')
    print('line2')
    if 5 == 5:              # nested if — one level deeper
        print('line 5')
else:
    print('line3')
```
The nested `if 5 == 5:` block (`print('line 5')`) must be indented one level **more** than the outer `if` block's statements.

## Summary Table — Indentation Error Types

| Error Message | Typical Cause |
|---|---|
| `expected an indented block` | A line ending in `:` is followed by a line with **no/insufficient indentation** |
| `unindent does not match any outer indentation level` | A line's indentation drops to a level that **doesn't match any previously opened block** |
| `unexpected indent` | A line is indented **without a valid reason** (no preceding `:` block opener at that level) |

## Things to Remember
- Python uses **indentation instead of braces** to define code blocks.
- Every line in a block must have the **same, consistent indentation**.
- A `:` at the end of a line (`if`, `else`, `for`, `while`, `def`, etc.) **requires** the next line to be indented.
- Nested blocks (like an `if` inside an `if`) need **one additional level of indentation** compared to their parent block.
- Mixing spaces inconsistently (e.g., 4 vs 8 spaces) within the same logical block causes errors.
- Standard convention: use **4 spaces** per indentation level (avoid mixing tabs and spaces).

## Quick Revision
Python doesn't use `{ }` — it uses **indentation** to show what belongs inside an `if`, `else`, loop, etc. After any line ending in `:`, the next line **must** be indented more than it. All lines in the same block must share the **exact same indentation**. If indentation is missing → `expected an indented block`. If indentation drops to a level Python doesn't recognize → `unindent does not match any outer indentation level`. If a line is indented more than it should be without reason → `unexpected indent`. Nested blocks (if inside if) need progressively deeper indentation.