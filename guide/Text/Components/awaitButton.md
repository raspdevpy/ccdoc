# $awaitButton
Waits for a button to be pressed and return its button id, or `undefined` in case no button was pressed when the timeout is reached.
:::tip Tip
This function supports the [Message Curl Format](/CodeReferences/ref.message_curl_format.html).
This way, you can send a message with buttons by using `{button:label:style/url:emoji:id:newline(yes/no)}`.
:::

#### Usage: `$awaitButton[Message (optional);user id (optional, default:author);timeout (optional, default:15s);button id1 (optional);button id2...]`
<br/>

### Timeout
The maximum time the bot waits for a user to click a button.\
Accepts time in the format `10s` for example.\
The max time is `60 x (bot tier + 1)` seconds, for example for tier 3 it would be `240` seconds.

::: details Examples

:::details Examples
(Simple response)

![](https://cdn.discordapp.com/attachments/914682255346118687/938556903116652594/Screenshot_20220202190956.jpg)

(Usage example)
```
$let[pressedButton;$awaitButton[Which color is my favorite?
{button:Green:GREEN::green}
{button:Blue:BLUE::blue}
{button:Red:RED::red};$authorID;15s;red;blue;green]]
/* Saves the pressed button id in a temporary var, so you can retrieve later */

$if[$pressedButton!=red]
Wrong!
$else
Correct!
$endif
/* If the button id is different from red, which is the right answer, then incorrect. Else, correct. */
```
Choosing something other them red, or nothing.
![](https://cdn.discordapp.com/attachments/914682255346118687/938559970293714984/Screenshot_20220202191954.jpg)

Choosing red.

![](https://cdn.discordapp.com/attachments/914682255346118687/938559970792845312/Screenshot_20220202191947.jpg)
:::

:::tip Note
You can send an embed using the [Message Curl Format](/CodeReferences/ref.message_curl_format.md).
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="await" vertical="middle" /> <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="interaction" vertical="middle" /> <Badge type="tip" text="click" vertical="middle" />
