# $addButton
adds a button component an existing message,use $button to send a message with a button



#### Usage: `$addButton[Message ID;Label;style/url;link/id;emoji(optional);Adding in new row (yes/no, optional); disabled (yes/no, optional)]`
<br/>

##### Example
(Add a simple button)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578211380543578/Screenshot_20220202202417.jpg)
(Add in new row)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578211695112192/Screenshot_20220202202711.jpg)
(Add disabled)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578212018085899/Screenshot_20220202203325.jpg)

::: warning Bug
Currently the emoji field is not working.
:::

::: tip Available colors
```
red, green, blurple, grey, url
/* url buttons is grey by default */
```
* you can use normal unicode emoji,custom emojis,with id,url or $customEmoji[emojiname]
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="add" vertical="middle" /> <Badge type="tip" text="interaction" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" />