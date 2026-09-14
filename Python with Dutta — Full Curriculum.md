# Python with Dutta — Full Curriculum (2-Course Plan)

Source material: CampusX "100 Days of Python" playlist (base content) + your own additions.
Existing site checked: https://dutta249.github.io/python-with-dutta/index.html (Modules 1–6 already scaffolded)

---

## 🟦 COURSE 1: Python with Dutta
**Goal:** Take a complete beginner to a confident, "Pythonic" programmer — ready for any domain (web, scripting, automation, or data science).

### Module 1 — Getting Started
1. Setting Up Google Colab ✅ *(already live)*
2. Installing Python locally (VS Code + venv) — *new, recommended addition*
3. Running your first script (Colab vs local vs terminal)

### Module 2 — Python Basics
1. The `print()` Function ✅
2. Data Types ✅
3. Comments & Docstrings ✅
4. Keywords and Identifiers ✅
5. The `input()` Function ✅
6. Type Conversion / Casting ✅
7. Python Literals ✅
8. Python Operators ✅
9. Python Indentation & PEP8 style basics ✅
10. Variables & memory model (id, references) — *new addition*

### Module 3 — Control Flow
1. If-Else, If-Elif-Else & Nested If-Else ✅
2. The `while` Loop ✅
3. `for` Loops *(fill "Coming soon")*
4. `break`, `continue` & `pass` *(fill "Coming soon")*
5. Loop `else` clause — *small bonus topic*

### Module 4 — Data Structures (Must-Master)
1. Lists *(fill "Coming soon")*
2. Tuples *(fill "Coming soon")*
3. Dictionaries *(fill "Coming soon")*
4. Sets *(fill "Coming soon")*
5. Strings — immutability, slicing, formatting (f-strings, `.format()`) — *new, currently missing from site*

### Module 5 — Functions & Modules
1. Defining & Calling Functions *(fill "Coming soon")*
2. Args, Kwargs & Return Values *(fill "Coming soon")* → merge with `*args`/`**kwargs` deep dive
3. Lambda Functions — *new addition*
4. List / Dict / Set Comprehensions — *new addition*
5. Importing Modules & Packages *(fill "Coming soon")*

### Module 6 — Pythonic Thinking
1. Iterators and Generators (`yield`)
2. `zip`, `enumerate`, `map`, `filter`, `reduce`
3. Shallow vs Deep Copy
4. Mutability vs Immutability
5. `*args` and `**kwargs` (advanced patterns)

### Module 7 — Object-Oriented Programming
1. Classes & Objects *(fill "Coming soon")*
2. Constructors (`__init__`)
3. Instance vs Class Variables
4. Methods & Dunder Methods
5. Inheritance & Method Overriding *(fill "Coming soon")*
6. Polymorphism *(fill "Coming soon")*
7. Encapsulation & Abstraction
8. Magic Methods *(fill "Coming soon")*
9. Dataclasses (`@dataclass`) — *new addition*

### Module 8 — Error Handling & Debugging
1. Exceptions: `try / except / finally`
2. Raising exceptions, `else` in try blocks
3. Custom Exceptions
4. Common Runtime Errors & how to read tracebacks
5. Intro to debugging (print debugging vs `pdb`/breakpoints)

### Module 9 — Modules, Packages & Environments
1. Import system (`import`, `from`, `as`)
2. Creating your own modules and packages
3. Virtual environments (`venv`, `conda`)
4. Dependency management (`pip`, `requirements.txt`, Poetry)
5. Understanding `if __name__ == "__main__"`

### Module 10 — File Handling & Serialization
1. Reading/Writing text files
2. CSV & JSON handling
3. Pickle — pros & cons
4. Working with directories (`os`, `pathlib`)
5. Logging to files

### Module 11 — Standard Library Essentials
1. `os`, `sys`
2. `pathlib` (deep dive — path objects vs os.path)
3. `datetime`, `time`
4. `math`, `random`
5. `logging` (levels, handlers, formatters)

### 🎓 Course 1 Capstone Ideas
- CLI expense tracker (file handling + OOP + error handling)
- Contact book manager (dict/CSV + functions)
- Mini quiz game (control flow + OOP)

---

## 🟩 COURSE 2: Advance Python with Dutta (Data Science Version)
**Prerequisite:** Course 1 complete.
**Goal:** Take a solid Python programmer into the numerical/data/AI-adjacent ecosystem.

### Module 1 — NumPy (Numerical Computing Foundation)
1. Arrays, shapes, dtypes
2. Array creation & indexing/slicing
3. Broadcasting
4. Vectorized operations (why NumPy > loops)
5. Linear algebra basics (dot product, matrix ops)
6. Random sampling (`np.random`)

### Module 2 — Pandas (Data Analysis & Manipulation)
1. Series and DataFrames
2. Indexing & filtering (`loc`, `iloc`, boolean masks)
3. GroupBy & aggregation
4. Handling missing values
5. Merging, joining & concatenation
6. Time-series basics
7. Reading/writing data (CSV, Excel, SQL) — *new addition, high ROI*

### Module 3 — Data Visualization
1. Matplotlib fundamentals (figures, axes, subplots)
2. Seaborn fundamentals (statistical plotting)
3. Plot types for EDA: histograms, boxplots, scatter, heatmaps, pairplots
4. Building a mini EDA workflow — *new addition, ties module together*

### Module 4 — Asynchronous & Parallel Python
1. Multithreading vs Multiprocessing (GIL explained)
2. `async` / `await` syntax
3. Async I/O basics (`asyncio`)
4. When to use threads vs processes vs async — decision framework

### Module 5 — Modern Python Libraries (API/App Layer)
1. Pydantic — data validation & models
2. FastAPI — building your first API
3. Combining Pydantic + FastAPI — request/response models
4. Mini project: serve a pandas/numpy result via FastAPI — *new addition, ties Course 2 together*

### 🎓 Course 2 Capstone Ideas
- EDA project on a real Kaggle dataset (NumPy + Pandas + Matplotlib/Seaborn)
- A small FastAPI service that accepts data and returns a Pandas-computed summary
- Async web scraper / data fetcher (asyncio + file handling from Course 1)

---

## 📝 Notes & Gaps Found on Current Site
- Modules 3–6 have several **"Coming soon"** topics — these are prioritized above as they're prerequisites for everything after.
- **Strings** (immutability, slicing, formatting) isn't yet a listed topic anywhere on the site — added to Module 4.
- **Lambda functions** and **comprehensions** aren't yet listed — added to Module 5.
- Your original roadmap's "Pythonic Thinking" section wasn't reflected in the site yet — added as a full new Module 6.
- Everything from "Numerical Computing" onward in your roadmap maps cleanly into Course 2 with no overlap.