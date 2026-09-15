# Python Strings 

## Table of Contents

- [Part 1: Creating Strings](#part-1-creating-strings)
- [Part 2: Indexing & Slicing](#part-2-indexing-slicing)
- [Part 3: Editing & Deleting Strings](#part-3-editing-deleting-strings)
- [Part 4: String Operations](#part-4-string-operations)
- [Part 5: String Functions](#part-5-string-functions)

---

## Part 1: Creating Strings


### Overview

Strings in Python are a **sequence of Unicode characters**. This note covers the different ways you can *create* a string in Python, the quirks around quote characters, and how to build multi-line strings.

### Key Concepts

- Strings can be created using **single quotes**, **double quotes**, or **triple quotes**.
- A quote character used to *start* a string must match the one used to *end* it — mismatched or unescaped quotes cause a `SyntaxError`.
- Choosing the right quote style lets you include quote characters (like an apostrophe) inside your string without extra escaping.
- Triple-quoted strings (`'''...'''` or `"""..."""`) are also used for **multi-line strings**.
- The built-in `str()` function can also be used to create a string.

### Topics covered in this section of the course

- Creating Strings
- Accessing Strings
- Adding Chars to Strings
- Editing Strings
- Deleting Strings
- Operations on Strings
- String Functions

*(Only "Creating Strings" is covered in these screenshots — the rest are upcoming topics in the playlist.)*

---

### 1. Creating Strings — Basic Ways

#### Using single quotes

```python
# Creating
c = 'Hello'
print(c)
```
```
Hello
```

#### Using double quotes

```python
c = "Hello"
print(c)
```
```
Hello
```

**Point to remember:** Single and double quotes behave the same for simple strings — the choice mostly matters when the string itself contains a quote character (see below).

---

### 2. The Apostrophe Problem

If you try to write a string containing an apostrophe using **single quotes**, Python gets confused about where the string ends:

```python
'It's raining outside'
```

```
File "<ipython-input-16-7f9c68e857c8>", line 1
    'It's raining outside'
        ^
SyntaxError: invalid syntax
```

**Why this happens:** Python reads the first `'` as the start of the string and the `'` in `It's` as the *end* of the string. Everything after that (`s raining outside'`) becomes invalid code, causing a `SyntaxError`.

#### The fix — use double quotes instead

```python
c = "It's raining outside"
```

Because the string is now delimited by `"`, the apostrophe inside it is treated as a normal character, not a string terminator.

> **Tip:** As a rule of thumb — if your string contains an apostrophe (`'`), wrap it in double quotes `"..."`. If it contains a double quote (`"`), wrap it in single quotes `'...'`.

---

### 3. Triple-Quoted Strings

Triple quotes can use either three single quotes or three double quotes:

```python
c = '''Hello'''
print(c)
```
```
Hello
```

```python
c = """Hello"""
print(c)
```
```
Hello
```

For a simple one-word string, triple quotes behave just like single/double quotes.

#### Triple quotes → Multi-line strings

The real power of triple quotes is writing **multi-line strings** directly in the source code:

```python
c = '''Hello'''
print(c)
# multi line strings
```

⚠️ Screenshot text unclear — the instructor was in the middle of typing a comment (`# multi line strings`) while demonstrating that triple-quoted strings support multi-line text; the exact multi-line example content wasn't fully visible in the screenshots.

**Important points:**
- `'''...'''` and `"""..."""` are functionally interchangeable.
- Triple quotes are the standard way to write multi-line strings and docstrings in Python.

---

### 4. Creating Strings with `str()`

You can also explicitly create a string using the built-in `str()` function:

```python
c = str("Hello")
c
```
```
Out: 'Hello'
```

**Note:** `str()` is more commonly used to **convert** other data types (numbers, lists, etc.) into strings, but it can also just wrap an existing string.

---

### Things to Remember

- ✅ `'Hello'`, `"Hello"`, `'''Hello'''`, `"""Hello"""` — all create the same string for simple text.
- ⚠️ Mismatched/unescaped quotes (e.g., an apostrophe inside single-quoted text) → `SyntaxError: invalid syntax`.
- 💡 Use double quotes when the string contains an apostrophe, and vice versa.
- 📝 Triple quotes (`'''` or `"""`) are used for **multi-line strings** and docstrings.
- 🔧 `str()` can also be used to create/convert a string.

### Quick Revision (1-Minute Recap)

Python lets you create strings with single quotes, double quotes, or triple quotes — they're mostly interchangeable for simple text. The catch: if your string contains the *same* quote character used to wrap it (e.g., an apostrophe inside `'...'`), Python throws a `SyntaxError` because it thinks the string ended early. Fix this by switching to the other quote type. Triple quotes (`'''` or `"""`) are the go-to choice for multi-line strings. You can also build a string using the `str()` function.

---

## Part 2: Indexing & Slicing


### Overview

Since a string is a **sequence of characters**, each character has a position (index). This note covers:
1. **Indexing** — accessing a single character from a string.
2. **Slicing** — extracting a substring (a range of characters) from a string.

---

### 1. Indexing

#### Basic Indexing

```python
# Concept of Indexing
c = "hello"
print(c)
```
```
hello
```

Every character in a string has a numeric position, starting from `0` for the first character.

```python
print(c[4])
```
```
o
```

`c[4]` picks the character at index `4`. For `"hello"` (h-e-l-l-o), index `4` is `'o'`.

#### Out-of-range Index → `IndexError`

```python
print(c[5])
```
```
IndexError: string index out of range
```

**Why:** `"hello"` has 5 characters, so valid indices are `0` to `4`. Index `5` doesn't exist.

> ⚠️ **Important:** String indices are always **0-based**. For a string of length `n`, valid positive indices go from `0` to `n-1`.

```python
print(c[0])
```
```
h
```

`c[0]` always gives the **first character** of the string.

#### Types of Indexing

Python supports two ways to index a string:

| Type | Direction | Example (for `"hello"`) |
|---|---|---|
| **Positive Indexing** | Counts from the start (left → right), beginning at `0` | `c[0]` → `h`, `c[4]` → `o` |
| **Negative Indexing** | Counts from the end (right → left), beginning at `-1` | `c[-1]` → `o`, `c[-2]` → `l` |

**Index map for `"hello"`:**

| Character | h | e | l | l | o |
|---|---|---|---|---|---|
| Positive index | 0 | 1 | 2 | 3 | 4 |
| Negative index | -5 | -4 | -3 | -2 | -1 |

```python
# Types of Indexing
# Positive Indexing
# Negative Indexing
print(c[-2])
```
```
l
```

`c[-2]` accesses the 2nd character from the end → `'l'`.

```python
print(c[-4])
```
```
l
```
⚠️ Screenshot text unclear — based on the index map above, `c[-4]` on `"hello"` should return `'e'`, but the screenshot's visible output looked like `'l'`. Please re-verify this specific output by running the code yourself.

**Important points on indexing:**
- Indexing returns a **single character** (still a string of length 1) — Python doesn't have a separate "character" type.
- Negative indexing is handy for accessing characters from the end without needing to know the string's length.
- Going out of bounds (in either direction) raises `IndexError: string index out of range`.

---

### 2. Slicing

Slicing lets you extract a **substring** using the syntax:

```python
string[start : stop : step]
```

- **start** → index to begin from (inclusive). Default: `0`.
- **stop** → index to stop before (exclusive — the character at `stop` is **not** included). Default: end of string.
- **step** → how many characters to jump each time. Default: `1`.

#### Basic Slicing

```python
# Slicing
c = "Hello World"
print(c)
```
```
Hello World
```

```python
print(c[0:4])
```
```
Hell
```

Takes characters from index `0` up to (but not including) index `4`.

```python
print(c[0:5])
```
```
Hello
```

#### Omitting `start` or `stop`

```python
print(c[2:])
```
```
llo World
```

Leaving `stop` empty means "**go all the way to the end**."

```python
print(c[:4])
```
```
Hell
```

Leaving `start` empty means "**start from the beginning**."

```python
print(c[:])
```
```
Hello World
```

Leaving out both `start` and `stop` returns the **entire string** — this is a common way to make a copy of a string.

```python
print(c)
```
```
Hello World
```

*(Confirms `c` itself is unchanged — slicing doesn't modify the original string, it just returns a new one.)*

#### Slicing with a `step`

```python
print(c[0:8:3])
```
```
HlW
```

With `step = 3`, Python picks characters at indices `0, 3, 6` → `H`, `l`, `W`.

> **Note:** In the video, the instructor first ran this slice and got a different/incomplete result before re-running it correctly to get `HlW` — a good reminder to always double check your slice indices against the string's actual character positions.

#### Step direction matters

```python
print(c[0:6:-1])
```

⚠️ Screenshot text unclear — no output was visible for this line in the screenshots (it may print an **empty string**). This happens because with a **negative step**, Python expects `start` to be *greater* than `stop` (moving right to left); here `start=0` and `stop=6` go the "wrong way" for a negative step, so no characters are returned.

```python
print(c[-5:-1:2])
```
```
Wr
```

Using negative indices as `start`/`stop`: `-5` corresponds to `'W'` and it steps forward by `2` up to (but excluding) index `-1`, picking `'W'` and `'r'`.

#### Reversing a String

```python
print(c[::-1])
```
```
dlroW olleH
```

**This is the classic Python trick to reverse a string.** With `start` and `stop` omitted and `step = -1`, Python walks the entire string backward, one character at a time.

```python
print(c[-1:-5:-1])
```
```
dlro
```

Starting at the last character (`-1` = `'d'`) and stepping backward (`step = -1`) down to (but excluding) `-5` (`'W'`), giving `'d'`, `'l'`, `'r'`, `'o'`.

---

### Things to Remember

- ✅ `str[index]` → returns a single character; supports both positive (`0, 1, 2, ...`) and negative (`-1, -2, -3, ...`) indices.
- ⚠️ Accessing an index beyond the string's length → `IndexError: string index out of range`.
- ✅ `str[start:stop:step]` → slicing syntax; `stop` is always **exclusive**.
- 💡 Omit `start` → defaults to the beginning; omit `stop` → defaults to the end; omit both (`str[:]`) → full copy of the string.
- 💡 `str[::-1]` is the go-to idiom for **reversing a string**.
- ⚠️ A negative `step` requires `start` to come *after* `stop` in the string (i.e., moving right-to-left) — otherwise you get an empty result.
- 🔒 Strings are **immutable** — slicing/indexing never changes the original string; it always returns a new string.

### Quick Revision (1-Minute Recap)

Indexing (`c[i]`) fetches a single character — positive indices count from the left starting at `0`, negative indices count from the right starting at `-1`; going out of range throws an `IndexError`. Slicing (`c[start:stop:step]`) extracts a substring: `start` is inclusive, `stop` is exclusive, and `step` controls the jump size and direction. Omitting parts of the slice gives sensible defaults (start of string, end of string, or the whole string with `c[:]`). The step can be negative to move backward — and `c[::-1]` is the classic one-liner to reverse an entire string.

---

## Part 3: Editing & Deleting Strings


### Overview

This part answers a key question: **can you edit or delete characters inside a string directly?** The short answer is **no** — and the reason why is one of the most important properties of Python strings: they are **immutable**.

### Key Concepts

- **Strings are an immutable data type** — once created, a string's contents cannot be changed in place.
- Trying to **assign** a new character to an index → `TypeError: 'str' object does not support item assignment`.
- Trying to **delete** a character at an index (or a slice) → `TypeError: 'str' object doesn't support item deletion`.
- You **can** delete the entire variable that refers to the string using `del`, but not individual characters within it.
- After `del`-ing a variable, referencing it again raises `NameError: name '<var>' is not defined`.

---

### 1. Editing Strings — Why It Fails

```python
c = "Hello"
print(c)
```
```
Hello
```

Trying to change the first character:

```python
c[0] = 'X'
```
```
TypeError: 'str' object does not support item assignment
```

**Why:** Strings don't support **item assignment**. You cannot reach into a string and overwrite one of its characters the way you can with a list (`my_list[0] = 'X'` would work fine for a list).

```python
# Strings are a Immutable Data Type
c = "world"
print(c)
```
```
world
```

```python
print(c)
```
```
world
```

Trying again with a different index:

```python
c[5] = "X"
```
```
TypeError: 'str' object does not support item assignment
```

> **Note:** It doesn't matter which index you try (`0`, `5`, etc.) — **no index of a string can ever be reassigned**, because the string object itself is immutable.

#### If you need a "modified" string...

Since strings can't be edited in place, the standard approach is to **create a new string** — e.g., using slicing/concatenation, or string methods (covered in later parts of the course) — and assign it back to the variable if needed.

---

### 2. Deleting Parts of a String — Why It Also Fails

```python
# Deletion
c
```
```
Out: 'world'
```

Trying to delete a single character:

```python
del c[0]
```
```
TypeError: 'str' object doesn't support item deletion
```

Trying to delete a slice of characters:

```python
del c[:3:2]
```
```
TypeError: 'str' object does not support item deletion
```

**Why:** Just like item assignment, **item deletion** isn't supported on strings — you cannot remove a character (or a range of characters) from a string in place, for the same immutability reason.

---

### 3. Deleting the Entire Variable

While you can't delete *part* of a string, you **can** delete the *variable* that points to it entirely, using `del`:

```python
del c
```

After this, the variable `c` no longer exists:

```python
print(c)
```
```
NameError: name 'c' is not defined
```

**Why:** `del c` removes the variable binding itself from memory — it's not modifying the string object, it's just deleting the *name* that referred to it.

---

### Things to Remember

- 🔒 **Strings are immutable** — this is the single biggest takeaway from this section.
- ❌ `str[i] = 'x'` → `TypeError: 'str' object does not support item assignment`
- ❌ `del str[i]` or `del str[slice]` → `TypeError: 'str' object doesn't support item deletion`
- ✅ `del variable_name` → works fine; it deletes the **variable**, not the string's contents.
- ⚠️ After `del`-ing a variable, using it again raises `NameError: name '<var>' is not defined`.
- 💡 To "change" a string, you must build and assign a **brand-new string** — you can never mutate the original in place.

### Quick Revision (1-Minute Recap)

Python strings are **immutable**: you cannot assign a new character to an index (`c[0] = 'X'` → `TypeError: item assignment`), and you cannot delete a character or slice from a string (`del c[0]` → `TypeError: item deletion`). The only thing you *can* delete is the **variable name itself** (`del c`), after which trying to use that variable raises a `NameError`. If you need a modified version of a string, you must always create a new string — the original object can never be changed in place.

---

## Part 4: String Operations


### Overview

This part covers the different **operators** you can use directly on strings:

- Arithmetic Operations
- Relational Operations
- Logical Operations
- Loops on Strings
- Membership Operations

---

### 1. Arithmetic Operations

Strings support two arithmetic-style operators: **`+`** (concatenation) and **`*`** (repetition).

#### Concatenation (`+`)

```python
"Hello" + "world"
```
```
Out: 'Helloworld'
```

**Note:** `+` simply glues the strings together character-for-character — it does **not** insert a space automatically.

```python
"Hello" + "-" + "world"
```
```
Out: 'Hello-world'
```

You can chain multiple `+` operators to join several strings (and any literal characters, like `"-"`, in between).

#### Repetition (`*`)

```python
print("*" * 50)
```
```
**************************************************
```

```python
print("Hello" * 4)
```
```
HelloHelloHelloHello
```

**Note:** `string * n` repeats the entire string `n` times, back-to-back with no separator.

---

### 2. Relational Operations

Strings can be compared with `==`, `!=`, `<`, `>`, `<=`, `>=` — just like numbers.

```python
"Hello" == "World"
```
```
Out: False
```

```python
"Hello" != "WOrld"
```
```
Out: True
```

#### Comparing with `<` and `>` — Lexicographic (Dictionary) Order

```python
"Mumbai" > "Pune"
# Lexiographically
```
```
Out: False
```

```python
"Goa" < "Kolkata"
```
```
Out: True
```

**How it works:** String comparisons are done **lexicographically** (like dictionary/alphabetical order) — Python compares characters one by one based on their underlying Unicode/ASCII values, until it finds a difference.

#### The Case-Sensitivity Trap

```python
"kol" < "Kol"
```
```
Out: False
```

**Why:** String comparison is **case-sensitive**. In ASCII/Unicode, lowercase letters have **higher** numeric values than their uppercase counterparts (`'k'` > `'K'`). So `"kol"` (starting with lowercase `k`) is actually considered *greater than* `"Kol"` (starting with uppercase `K`) — which is why `"kol" < "Kol"` evaluates to `False`.

> ⚠️ **Important:** Never assume string comparisons ignore case — `"apple" == "Apple"` is `False`, and sorting/comparing mixed-case strings can give unintuitive results unless you normalize case first (e.g., with `.lower()`).

---

### 3. Logical Operations

Python's `and`, `or`, and `not` work on strings too, based on **truthy/falsy** values.

#### Truthy vs Falsy Strings

| String | Truthy/Falsy |
|---|---|
| `""` (empty string) | **Falsy** → `False` |
| Any non-empty string (e.g., `"wreghr"`) | **Truthy** → `True` |

```python
not ""
```
```
Out: True
```

```python
print(not "hello")
```
```
False
```

`not` simply flips the truthy/falsy value — since `"hello"` is truthy, `not "hello"` is `False`; since `""` is falsy, `not ""` is `True`.

#### `and` and `or` Return a Value, Not Just `True`/`False`

Unlike `==` or `<`, the `and`/`or` operators on strings **return one of the operands themselves**, not a plain boolean.

```python
"hello" and "world"
```
```
Out: 'world'
```

**Rule for `and`:** If the first operand is **truthy**, Python evaluates and returns the **second** operand. (If the first operand were falsy, `and` would short-circuit and return the first operand instead.)

```python
"" and "Hello"
```
```
Out: ''
```

Here, `""` is falsy, so `and` **short-circuits** immediately and returns the first operand (`""`) without even looking at `"Hello"`.

```python
"" or "world"
```
```
Out: 'world'
```

**Rule for `or`:** If the first operand is **falsy**, Python moves on and returns the **second** operand.

```python
"hello" or "world"
```
```
Out: 'hello'
```

Here, `"hello"` is truthy, so `or` short-circuits immediately and returns the first operand (`"hello"`) without evaluating `"world"`.

> 💡 **Quick mental model:**
> - `and` → returns the **first falsy** value, or the **last** value if all are truthy.
> - `or` → returns the **first truthy** value, or the **last** value if all are falsy.

---

### 4. Loops on Strings

Since a string is a sequence, you can iterate over it directly with a `for` loop — each iteration gives you one character.

```python
c = "hello world"
for i in c:
    print(i)
```
```
h
e
l
l
o

w
o
r
l
d
```

**Note:** The loop prints **every character**, including the space between `"hello"` and `"world"` (shown above as a blank line).

#### Combining Loops with Slicing

You can loop over a **slice** of the string instead of the whole thing:

```python
c = "hello world"
for i in c[2:7:2]:
    print(i)
```
```
l
o
w
```

This loops only over the characters picked out by the slice `c[2:7:2]` (start=2, stop=7, step=2) — i.e., indices `2, 4, 6` → `'l'`, `'o'`, `'w'`.

⚠️ Screenshot text unclear — one screenshot showed a loop's output printing characters vertically (`w, o, l, l, e, h`), but the exact code that produced it wasn't visible. It appeared to demonstrate looping over a **reversed or sliced** version of the string, similar to the pattern above — worth re-running examples like `for i in c[::-1]: print(i)` yourself to see reversed iteration in action.

---

### 5. Membership Operations (`in` / `not in`)

These check whether a character (or substring) exists inside a string, returning `True` or `False`.

```python
'h' in c
```
```
Out: True
```

```python
'H' in c
```
```
Out: False
```

**Note:** Just like relational operations, membership checks are **case-sensitive** — `'h'` and `'H'` are treated as different characters.

```python
'world' not in c
```
```
Out: False
```

**Reading this carefully:** `'world' not in c` is `False` because `'world'` **is** actually present in `c` — `not in` returns `True` only when the item is **absent**.

```python
'n' in c
```
```
Out: True
```

---

### Things to Remember

- ➕ `+` concatenates strings (no automatic spacing); `*` repeats a string `n` times.
- 🔤 Relational operators (`<`, `>`, `==`, etc.) compare strings **lexicographically**, based on character-by-character Unicode/ASCII values.
- 🔠 String comparisons and membership checks are **always case-sensitive** — lowercase letters have higher ASCII values than uppercase.
- 🧠 `and` / `or` on strings don't return plain `True`/`False` — they return one of the **actual operands**, based on truthy/falsy short-circuiting.
- ⚪ Falsy string: only `""` (empty string). Every non-empty string is truthy.
- 🔁 A `for` loop over a string yields its characters one at a time, in order (including whitespace); this can be combined with slicing (`c[start:stop:step]`).
- 🔎 `in` / `not in` check whether a character or substring exists within a string — case-sensitive.

### Quick Revision (1-Minute Recap)

Strings support arithmetic-style operators: `+` concatenates and `*` repeats. Relational operators compare strings lexicographically using character ASCII values — and remember, comparisons are case-sensitive (lowercase > uppercase in ASCII). Logical operators (`and`, `or`, `not`) work using truthy/falsy rules (`""` is falsy, everything else is truthy) and — unlike numeric comparisons — `and`/`or` return one of the actual operand strings rather than a plain boolean. You can loop directly over a string's characters with `for i in string:`, optionally combined with slicing. Finally, `in` / `not in` let you check membership of a character or substring, again case-sensitively.

---

## Part 5: String Functions


### Overview

Python strings come with a large set of **built-in methods** (functions attached to the string object, called with `string.method()`). This part walks through the most commonly used ones: general-purpose functions, case conversion, counting, searching, checks, formatting, splitting, joining, replacing, and stripping whitespace.

---

### Common (Built-in) Functions

These aren't string *methods* — they're general Python functions that happen to work well on strings:

```python
c = "kolkata"
len(c)
```
```
Out: 7
```
`len()` returns the number of characters in the string.

```python
max(c)
```
```
Out: 't'
```
```python
min(c)
```
```
Out: 'a'
```
`max()`/`min()` return the character with the highest/lowest Unicode value in the string.

```python
sorted(c)
```
```
Out: ['a', 'a', 'k', 'k', 'l', 'o', 't']
```
```python
sorted(c, reverse=True)
```
```
Out: ['t', 'o', 'l', 'k', 'k', 'a', 'a']
```
`sorted()` returns a **list** of the string's characters in sorted order (ascending by default; pass `reverse=True` for descending).

---

### 1. Capitalize / Title / Upper / Lower / Swapcase

```python
"it is raining today".capitalize()
```
```
Out: 'It is raining today'
```
`.capitalize()` uppercases only the **first letter of the whole string**, lowercasing the rest.

```python
"it is raining today".title()
```
```
Out: 'It Is Raining Today'
```
`.title()` uppercases the **first letter of every word**.

```python
c = "kolkata"
c.upper()
```
```
Out: 'KOLKATA'
```
```python
c.upper().lower()
```
```
Out: 'kolkata'
```
`.upper()` / `.lower()` convert the entire string to upper/lower case. Methods can be **chained** — `.upper().lower()` calls `.lower()` on the result of `.upper()`.

```python
"KoLkAtA".swapcase()
```
```
Out: 'kOlKaTa'
```
`.swapcase()` flips the case of every character — upper becomes lower and vice versa.

---

### 2. Count

```python
"it is raining".count("x")
```
```
Out: 0
```
```python
"it is raining".count("i")
```
```
Out: 4
```
```python
"it is raining".count("is")
```
```
Out: 1
```
```python
"it is raining".count("ing")
```
```
Out: 1
```
`.count(sub)` returns how many **non-overlapping** times `sub` appears in the string.

---

### 3. Find / Index

```python
"it is raining".find("x")
```
```
Out: -1
```
```python
"it is raining".find("g")
```
```
Out: 12
```
```python
"it is raining".index("x")
```
```
ValueError: substring not found
```
```python
"it is raining".index("rain")
```
```
Out: 6
```

**Key difference between `.find()` and `.index()`:**

| Method | Substring found | Substring NOT found |
|---|---|---|
| `.find(sub)` | Returns the starting index | Returns `-1` |
| `.index(sub)` | Returns the starting index | Raises `ValueError: substring not found` |

> 💡 Use `.find()` when a missing substring is a normal case you want to handle gracefully; use `.index()` when you'd rather the program fail loudly if the substring is expected to be there.

---

### 4. endswith / startswith

```python
"it is raining".endswith("ing")
```
```
Out: True
```
```python
"it is raining".endswith("ingef")
```
```
Out: False
```
```python
"it is raining".startswith("it")
```
```
Out: True
```
These check whether the string **ends with** or **begins with** a given substring, returning `True`/`False`.

---

### 5. format

`.format()` lets you build strings with placeholders (`{}`) that get filled in with values.

```python
"Hello my name is {} and I am {}".format("Nitish", 30)
```
```
Out: 'Hello my name is Nitish and I am 30'
```
Empty `{}` placeholders are filled **in order** by the arguments passed to `.format()`.

```python
"Hello my name is {1} and I am {0}".format("Nitish", 30)
```
```
Out: 'Hello my name is 30 and I am Nitish'
```
You can put a **positional index** inside `{}` to control which argument fills which placeholder — `{1}` refers to the 2nd argument (`30`), `{0}` to the 1st (`"Nitish"`).

```python
"Hello my name is {age} and I am {name}".format(name="Nitish", age=30)
```
```
Out: 'Hello my name is 30 and I am Nitish'
```
You can also use **named placeholders** matched to keyword arguments — note the placeholder name doesn't have to "make sense" relative to the value; Python just matches the placeholder name to the keyword argument name.

```python
"Hello my name is {age} and I am {weight}".format(name="Nitish", age=30, weight=70)
```
```
Out: 'Hello my name is 30 and I am 70'
```
Extra keyword arguments that aren't referenced by any `{}` placeholder (like `name` here) are simply ignored.

---

### 6. isalnum / isalpha / isdecimal / isdigit / isidentifier

These all return `True`/`False` checks about what kind of characters a string contains.

```python
"FLAT20&".isalnum()
```
```
Out: False
```
`.isalnum()` checks if **all** characters are letters or digits — fails here because of `&`.

```python
"FLAT20".isalpha()
```
```
Out: False
```
`.isalpha()` checks if **all** characters are letters — fails here because of the digits `2`, `0`.

```python
"20A".isdigit()
```
```
Out: False
```
`.isdigit()` checks if **all** characters are digits — fails here because of the letter `A`.

```python
"hello world".isidentifier()
```
```
Out: False
```
```python
"hello_world".isidentifier()
```
```
Out: True
```
`.isidentifier()` checks whether the string would be a **valid Python variable name** — spaces aren't allowed (so `"hello world"` fails), but underscores are fine (so `"hello_world"` passes).

> 💡 `isdecimal()` is also part of this family (not shown running here) — it's similar to `isdigit()` but stricter about which numeric characters count as "decimal."

---

### 7. Split

```python
"who is the pm of india".split()
```
```
Out: ['who', 'is', 'the', 'pm', 'of', 'india']
```
With no argument, `.split()` breaks the string into a **list of words**, splitting on any whitespace.

```python
"who is the pm of india".split("i")
```
```
Out: ['who ', 's the pm of ', 'nd', 'a']
```
Passing a separator splits on **every occurrence** of that exact substring, removing it from the result.

```python
"who is the pm of india".split("x")
```
```
Out: ['who is the pm of india']
```
If the separator doesn't appear anywhere in the string, `.split()` returns a list containing the **entire original string** as its only element.

---

### 8. Join

`.join()` is the reverse of `.split()` — it combines a list of strings into one string, using the string it's called on as the separator.

```python
" ".join(['who', 'is', 'the', 'pm', 'of', 'india'])
```
```
Out: 'who is the pm of india'
```
```python
"/".join(['who', 'is', 'the', 'pm', 'of', 'india'])
```
```
Out: 'who/is/the/pm/of/india'
```
```python
"-".join(['who', 'is', 'the', 'pm', 'of', 'india'])
```
```
Out: 'who-is-the-pm-of-india'
```
Whatever string `.join()` is called on becomes the **glue** placed between every element of the list.

---

### 9. Replace

```python
"Hi my name is Nitish".replace("Nitish", "Amit")
```
```
Out: 'Hi my name is Amit'
```
`.replace(old, new)` returns a new string with **every occurrence** of `old` swapped for `new`.

---

### 10. Strip

```python
name = "          nitish          "
name.strip()
```
```
Out: 'nitish'
```
`.strip()` removes leading and trailing **whitespace** (spaces, tabs, newlines) from a string — it does **not** touch whitespace in the middle.

> 💡 **Related methods** (seen via autocomplete, not individually demonstrated): `.lstrip()` strips only from the left, `.rstrip()` strips only from the right. Other string methods available include `.partition()`, `.rpartition()`, `.rfind()`, `.rindex()`, `.rjust()`, `.rsplit()`, and `.maketrans()` — worth exploring in the Python docs or via tab-autocomplete in a notebook.

---

### Things to Remember

- 🔡 Case methods: `.capitalize()` (first letter of string), `.title()` (first letter of each word), `.upper()`, `.lower()`, `.swapcase()` — all return a **new** string (strings are immutable).
- 🔍 `.count(sub)` counts non-overlapping occurrences; `.find(sub)` returns `-1` if missing; `.index(sub)` raises `ValueError` if missing.
- ✅ `.startswith()` / `.endswith()` check prefixes/suffixes and return booleans.
- 📝 `.format()` fills `{}` placeholders — positionally, by index (`{0}`, `{1}`), or by keyword name (`{name}`).
- ❓ The `is...()` family (`isalnum`, `isalpha`, `isdigit`, `isidentifier`, etc.) checks whether **all** characters in the string satisfy a condition.
- ✂️ `.split(sep)` breaks a string into a list (default: split on whitespace); `.join(list)` does the reverse, gluing a list back into a string.
- 🔄 `.replace(old, new)` swaps every occurrence of a substring.
- 🧹 `.strip()` removes leading/trailing whitespace only; use `.lstrip()`/`.rstrip()` for one-sided stripping.

### Quick Revision (1-Minute Recap)

Strings have a rich set of built-in methods. For case handling: `.capitalize()`, `.title()`, `.upper()`, `.lower()`, `.swapcase()`. For searching: `.count()` counts matches, `.find()` returns `-1` if not found while `.index()` raises an error, and `.startswith()`/`.endswith()` check prefixes/suffixes. `.format()` builds strings from placeholders filled positionally, by index, or by keyword. The `is...()` methods (`isalnum`, `isalpha`, `isdigit`, `isidentifier`, etc.) validate what kind of characters a string contains. `.split()` turns a string into a list of pieces; `.join()` does the reverse. `.replace()` swaps substrings, and `.strip()` (plus `.lstrip()`/`.rstrip()`) trims whitespace from the ends.