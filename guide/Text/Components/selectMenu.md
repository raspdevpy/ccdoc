# $selectMenu
creates a select menu with options

#### Usage: `$selectMenu[id;placeholder;min value(optional);max value;(optional);label;desc;value;value]` works only for one option
##### Creating SelectMenu
Code:
```
$selectMenu[
{id=id}
{placeholder=Pls select your anwser!}
{min=1}
{max=2}
{label=Option one }
{desc=txt for one}
{value=one}
{emoji=$customEmoji[accept]}
{label=Option two }
{desc=txt for two}
{value=two}
{emoji=$customEmoji[reject]}
]
```
* `id` the id of menu must be unique on multiplie menus
* `placeholder` 
* `min` minimum to select (optional)
* `max` maximum to select (optional)
* `label` label of option
* `desc` description of option
* `value` value of option ,which [$eventSelected](./eventSelected.md) returns on usage
* `emoji` emoji for option (optional)

Info:
* You can have upto 5 menus on a message
* You can add maximal 20 options to a menu
* Id of multplie menus can't be same

::: tip {key=value} what is this for a syntax?
This syntax is called curl args.It is really similar to curl message.Especially new Functions support it ,you can use !!func `funcname` to check if it supports curl args.
 [Learn more](../guide/curl.md)
:::

Example:

![](https://i.imgur.com/XbRhFaZ.png)

::: tip Do you want to add a menu inside a Function as paramter like $sendmessage[text]

Use: 
```
{menu:
{id=id}
{placeholder=Pls select your anwser!}
{min=1}
{max=2}
{label=Option one }
{desc=txt for one}
{value=one}
{emoji=$customEmoji[accept]}
}
```
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)

Link escapes are needed, use `\` to escape characters. Read [me](../../Other/syntax.md) to see more
:::

::: tip
Using the menu as trigger check here to [learn more](../../Trigger/menu.md).
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="selectMenu" vertical="middle" /> <Badge type="tip" text="component" vertical="middle" /> 