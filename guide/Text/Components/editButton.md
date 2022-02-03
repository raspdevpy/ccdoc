# $editButton
Edit a button in the given message id, in case of multiple buttons query can be specified

#### Usage: `$editButton[Message ID;Query (optional, default: edit the last button);label/style/emoji/disabled/url/custom_id;New Value]
`
::: details Example
Lets take these buttons as example.
![](https://cdn.discordapp.com/attachments/914682255346118687/938564348102717440/unknown.jpeg)
(Disable the last button)
![](https://cdn.discordapp.com/attachments/914682255346118687/938568269349142538/Screenshot_20220202194114.jpg)

(Change the label by URL)
![](https://cdn.discordapp.com/attachments/914682255346118687/938568269818916864/Screenshot_20220202194404.jpg)

(Change the color by label)
![](https://cdn.discordapp.com/attachments/914682255346118687/938568270053789737/Screenshot_20220202194603.jpg)

:::
::: danger Emoji edit is bugged in tier 1, displays error message.
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="interaction" vertical="middle" /> 