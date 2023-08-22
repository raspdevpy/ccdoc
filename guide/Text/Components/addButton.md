# $addButton
Adds a button to an existing message. Use [$button](./button.md) to send a message with a button.

## Usage
`$addButton[Message ID;Label;style/url;link/id;emoji(optional);Add to a new role (yes/no, optional); disabled (yes/no, optional)]`
<br/>

## Example
(Add a simple button)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578211380543578/Screenshot_20220202202417.jpg)
(Add in new row)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578211695112192/Screenshot_20220202202711.jpg)
(Add disabled)
![](https://cdn.discordapp.com/attachments/914682255346118687/938578212018085899/Screenshot_20220202203325.jpg)

:::tip Available colors
`red, green, blurple, grey, url`
\
**URL buttons are grey by default.**

* You can use normal unicode emojis, custom emojis with their ID, or you can use [$customEmoji](../customEmoji.md).
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="add" vertical="middle" /> <Badge type="tip" text="interaction" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" />