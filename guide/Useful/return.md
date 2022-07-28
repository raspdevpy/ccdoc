# $return

Can only be used inside user-defined function created by $function\
It has no effect outside the user-defined function

## Usage

```bash
$return[Return Value]
```

### Example:
```bash
$function[add;num1;num2]
   $return[$math[$num1+$num2]]
$endFunction
```