# $ObjectRemove

To remove a key from the object

## Usage

```bash
$ObjectRemove[Key;Key...(Optional)]
```

### Example:
$objectSet[Name;Mido]\
$objectSet[Country;EG]\
$objectKeys // output: Name, Country\
$objectRemove[Name]\
$objectKeys // output: Country