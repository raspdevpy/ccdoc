# $awaitMenu

To wait for a menu option to be selected and return the selected options values.
If nothing is selected, it returns `undefined`.`
If multiple values are selected, all of them will be returned, separated with `,`.

## Usage

```bash
$awaitMenu[Message (optional);user id (optional, default:author);timeout (optional, default:15s);menu id1 (optional);menu id2...]
```
### Timeout
It means the maximum time bot can wait user message for.\
it accept format of time like `10s`.\
The max time is `60 x bot tier` seconds, for example for tier 3 it would be `180` seconds.

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec You selected: $awaitMenu[<br>{title: Test}<br>{menu:<br>    {id=test}<br>    {placeholder=Select}<br>    {min=1}<br>    {max=1}<br>    {option=Mido}<br>    {desc=A guy}<br>    {value=mido}<br>    {option=Rake}<br>    {desc=Another guy}<br>    {value=rake}<br>}<br>;$authorID;;test]<br><br>
          </discord-message>
</discord-messages>

![](https://i.imgur.com/58Wzc05.gif)