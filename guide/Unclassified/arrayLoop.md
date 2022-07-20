# $arrayLoop

To loop over the array\
**Note:** Only zero-cooldown functions allowed in CODE

## Usage

```bash
$arrayLoop[varname]{
CODE...
}
```

### Example:
$textSplit[15,18,21;,]\
$arrayLoop[age]{\
age is $age\
}

### Output:
age is 15\
age is 18\
age is 21