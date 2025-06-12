# How to Build a Paper Airplane in Python

Welcome to this quick tutorial! In just a few steps, you'll learn how to "build" a paper airplane using Python code.

## Step 1: Import the Paper Module

```python
import paper
```

## Step 2: Fold the Paper

```python
plane = paper.Sheet()
plane.fold('half')
plane.fold('wing', side='left')
plane.fold('wing', side='right')
```

## Step 3: Launch!

```python
plane.throw(direction='forward', force='gentle')
```

Congratulations! You've just built and launched a virtual paper airplane.

---
*Note: The `paper` module is imaginary. This tutorial is for demonstration purposes only.*