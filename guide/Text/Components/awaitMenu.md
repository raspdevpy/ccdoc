# $awaitMenu

To wait for a menu option to be selected and return the selected options values\
In case of no option selected, it return **undefined**\
In case of multiple values selected, all of them will return with `,` as seperator

## Usage

```bash
$awaitMenu[Message (optional);user id (optional, default:author);timeout (optional, default:15s);menu id1 (optional);menu id2...]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec You selected: $awaitMenu[<br>{title: Test}<br>{menu:<br>    {id=test}<br>    {placeholder=Select}<br>    {min=1}<br>    {max=1}<br>    {label=Mido}<br>    {desc=A guy}<br>    {value=mido}<br>    {label=Rake}<br>    {desc=Another guy}<br>    {value=rake}<br>}<br>;$authorID;;test]<br><br>
          </discord-message>
</discord-messages>

![](https://i.imgur.com/58Wzc05.gif)