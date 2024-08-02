# $return

Stops a user defined function execution and returns the Return Value

Can only be used inside user-defined functions created with `$function`\
It has no effect outside the user-defined function

## Usage

```bash
$return[Return Value(optional)]
```

### Example:
```bash
$function[add;num1;num2]
   $return[$math[$num1+$num2]]
$endFunction
```
