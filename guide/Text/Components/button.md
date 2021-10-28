# $button
creates a Discord Button with a label ,color ,id or link button

#### Usage: `$button[label;style/url;link/id;emoji(optional);disabled (yes/no, optional)]`
##### Creating Button
Code: `$button[B;green;id]`
##### Creating Button with emoji
Code: `$button[emoji;red;id;🚚]` or with custom emoji
`$button[emoji;red;id;$customEmoji[emojiname]]`
##### Creating Button with link
Code: `$button[B;url;https://example.com]`
#### Info:
style can be a color(red, green, blurple, gray/grey)
or style=url for link

::: tip
A Message can include max 5 rows and upto 25 buttons
Id of buttons can't be same.
:::

![](https://i.imgur.com/scRp0VE.png)

::: tip Do you want to add a button inside a Function as paramter like $sendmessage[text]

Use: `{button:label:style:emoji:id:newLine(yes/no)}`

You don't have a emoji in inline button?
Solution: You can keep parameters empty like
{button:Test:red::btnid} 
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../guide/syntax.md)

Link escapes are needed, use `\` to escape characters. Read [me](../../guide/syntax.md) to see more
:::

::: tip
Using the button as trigger check here to [learn more](../../Trigger/button.md).
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="component" vertical="middle" /> 