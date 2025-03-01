# Expressions

## Why Use Expressions?

Some functions, like the incredibly useful [$if](../Text/Condition/if.md) function, require an expression as input. Expressions allow you to create dynamic and conditional logic within your scripts.

## What is an Expression?

At its core, an expression compares a left-hand side to a right-hand side using an operator. The operator dictates the type of comparison being made.

```
Left-Side [Operator] Right-Side
```

Here's a breakdown of the available operators:

| Operator | True When                                     | Description                                    |
| -------- | ---------------------------------------------- | ---------------------------------------------- |
| `==`     | left-side is equal to right-side              | Checks for equality.                           |
| `!=`     | left-side is not equal to right-side          | Checks for inequality.                         |
| `>`      | left-side is greater than right-side (numeric) | Left-side is numerically larger.                |
| `>=`     | left-side is greater than or equal to right-side (numeric)| Left-side is numerically larger or equal.       |
| `<`      | left-side is less than right-side (numeric)   | Left-side is numerically smaller.                |
| `<=`     | left-side is less than or equal to right-side (numeric)| Left-side is numerically smaller or equal.       |
| `&&`     | left-side is true AND right-side is true       | Logical AND. Both sides must be true.          |
| `||`     | left-side is true OR right-side is true        | Logical OR. At least one side must be true.   |

**Example:**

```bash
$username==Mido
```

In this expression:

*   **Left-side:** `$username`
*   **Right-side:** `Mido`
*   **Operator:** `==`

This expression evaluates to `true` *only* if the value of the variable `$username` is equal to `Mido`.

## Combining Multiple Expressions

Often, you'll need to create more complex conditions by combining multiple expressions.  This is where the `&&` (AND) and `||` (OR) operators become essential.

### Example 1:  Using AND (`&&`)

```
$username==Mido&&$country==Egypt
```

This expression consists of two separate conditions:

1.  `$username==Mido`:  The username must be equal to "Mido".
2.  `$country==Egypt`: The country must be equal to "Egypt".

The `&&` operator means that *both* condition 1 *AND* condition 2 must be true for the entire expression to evaluate to `true`.

### Example 2: Using OR (`||`)

```
$username==Mido||$country==Egypt
```

This expression also consists of two separate conditions:

1.  `$username==Mido`:  The username must be equal to "Mido".
2.  `$country==Egypt`: The country must be equal to "Egypt".

The `||` operator means that *either* condition 1 *OR* condition 2 (or both) must be true for the entire expression to evaluate to `true`.

## Grouping Expressions with Parentheses

For advanced scenarios, you may need to control the order in which expressions are evaluated. Use parentheses `()` to group conditions and ensure they are evaluated as a unit *before* other operations. This is similar to how parentheses work in mathematical equations.

### Example 1: Complex AND/OR Grouping

```
($username==Mido&&$country==Egypt)||($username==Rake&&$country==Germany)
```

This expression combines AND and OR operators with grouping:

1.  `($username==Mido&&$country==Egypt)`:  The username is "Mido" AND the country is "Egypt".
2.  `($username==Rake&&$country==Germany)`: The username is "Rake" AND the country is "Germany".

The entire expression evaluates to `true` if either group 1 *OR* group 2 is true.

### Example 2: Nested OR Grouping

```
$username==Mido||($country==Egypt||$country==Masr)
```

This example uses nested parentheses with OR operators:

1.  `$username==Mido`: The username is "Mido".
2.  `($country==Egypt||$country==Masr)`: The country is "Egypt" OR the country is "Masr".

The expression is `true` if the username is "Mido" OR if the country is either "Egypt" or "Masr".