# Expressions
## Why We Need it?
Because some functions will demand from you to put an expression as input
like the most useful function [$if](../Text/Condition/if.md)

## What is expression?
Expression is comparing left-side to right-side of it and in middle is an operator that does different action depends on the operator
```
Left-Side [Operator] Right-Side
```
The available operators:
| Operator      | True when |
| ----------- | ----------- |
| == | left-side equal to right-side |
| != | left-side not equal to right-side |
| >  | left-side is greater than right-side (in term of number value) |
| >= | left-side is greater or equal than right-side (in term of number value) |
| <  | left-side is less than right-side (in term of number value) |
| <= | left-side is less or equal than right-side (in term of number value) |
| && | left-side is true AND right-side is true |
| \|\| | left-side is true OR right-side is true   |


**Example Of an expression:**
```bash
$username==Mido
```

the left side is `$username`\
the right side is `Mido`\
the operator is `==`

Which means this expression will only be `true` only if Left side and right side are **EQUAL**

## Multiple Expressions
In some cases you will need multiple expressions, in this case you will find `&&` and `||` useful

### Example 1
```
$username==Mido&&$country==Egypt
```
This expression above consist of 2 conditions
1- username should be equal to Mido because we used (==)\
2- country should be equal to Egypt because we used (==)\
3- and both #1 **AND** #2 should both be true because we used (&&)

### Example 2
```
$username==Mido||$country==Egypt
```
This expression above consist of 2 conditions
1- username should be equal to Mido because we used (==)\
2- country should be equal to Egypt because we used (==)\
3- #1 **OR** #2 should be true because we used (||)

## Grouping Expressions
In rare cases, we want to group 2 conditions or more together using `(CONDITIONS)` to be evaluated first before the others
It's same as: `5*4+1` will be 21 and `5*(4+1)` will be 25, because grouping gives priority in evalution

We used same technique but in conditions
### Example 1
```
($username==Mido&&$country==Egypt)||($username==Rake&&country==Germany)
```
This expression consist of 4 different conditions
1- username should be equal to Mido and country should be equal to Egypt\
2- username should be equal to Rake and country should be equal to Germany\
3- #1 **OR** #2 should be true for this expression to be true

### Example 2
```
$username==Mido||($country==Egypt||$country==Masr)
```
This expression consist of 3 different conditions:
1- username should be equal to Mido\
2- country should be equal to Egypt or Masr\
3- #1 **OR** #2 should be true

