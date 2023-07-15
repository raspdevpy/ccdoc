# $eventSelected

Returns values that were selected by the user using [$selectMenu](./selectMenu.md).

## Usage

```bash
$eventSelected or $eventSelected[position;seperator]
```

### For Example:
 `$eventSelected would` return the first selected value.\
 `$eventSelected[2]` would return the second selected value, since it was the second value clicked by the user.\
 `$eventSelected[;,]` would return all selected values separated with `,`.