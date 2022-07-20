# $awaitMenu

To wait for a menu option to be selected and return the selected options values\
In case of no option selected, it return **undefined**\
In case of multiple values selected, all of them will return with `,` as seperator

## Usage

```bash
$awaitMenu[Message (optional);user id (optional, default:author);timeout (optional, default:15s);menu id1 (optional);menu id2...]
```

### Example:
You selected: $awaitMenu[\
{title: Test}\
{menu:\
    {id=test}\
    {placeholder=Select}\
    {min=1}\
    {max=1}\
    {label=Mido}\
    {desc=A guy}\
    {value=mido}\
    {label=Rake}\
    {desc=Another guy}\
    {value=rake}\
}\
;$authorID;;test\
]\
// output after selecting Rake\
You selected: rake