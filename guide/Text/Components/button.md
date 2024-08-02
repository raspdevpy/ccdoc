# $button
Creates a discord button.

## Usage
```php
$button[label;style;link/id;emoji (optional);disabled (yes/no, optional);new line (yes/no, optional)]
```

## Basic button
The simplest button possible, has a label and ID.

```php
$button[Click me!;;verySimpleButton]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126652117373964338/basic-button.png)

::: tip What's an ID?
ID is used to identify the button clicked. This way, you can decide what happens after clicking a specific button.
Keep in mind, that there can't be two buttons with the same ID in one message.
:::

## Colors
There are four button colors discord allows you to use:
`blurple`, `grey`, `green`, and `red`.

```php
$button[Blurple;blurple;blurpleButton]
$button[Grey;grey;greyButton]
$button[Green;green;greenButton]
$button[Red;red;redButton]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126656639915790428/color-buttons.png)

## Links
You can also create buttons that open a link when clicked.
To make one, you have to set the style to `url`, and put the link as ID.
```php
$button[Check out our website!;url;https://ccommandbot.com]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126655903555399781/url-button.png)

## Emojis
Both interaction and url buttons can have emojis.
```php
Please verify!
$button[Verify;grey;heartButton;:detective:]
$button[Server rules;url;https://discord.com/channels/772051119538176021/772051119923789847/818136570896449577;đ]
$button[Open ticket;grey;openTicket;<:thinking:833253889833697300>]
$button[Leave server;grey;leaveServer;$customEmoji[no]]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126661173086015498/image.png)

## Disabled
You can disable any button by adding `yes` after the emoji.
```php
We are not looking for new staff members at the moment.
$button[Apply;blurple;applyButton;;yes]
$button[View requirements;blurple;viewRequirements;;no]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126662743408255056/image.png)

## New lines
By default, buttons are placed in one line.
You can change that by adding `yes` after the disabled parameter.
```php
$button[Button in the first line;grey;button1;;;no]
$button[Button in a new line;grey;button2;;;yes]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126663318514450492/newlined.png)

## Curl format
In some cases you may want to include a button in a message sent by a function.
An example of a function like this would be a `$sendmessage` function.

### Curl usage:
Mind that the order of `emoji` and `id` is reversed in this case, and the separator is `:` instead of `;`.
```
{button:label:style:emoji:id:newLine (yes/no, optional):disabled (yes/no, optional)}
```

### Example:
```php
$sendmessage[How's your day going?
    {button:Fine:grey:😀:fine}
    {button:Bad:grey:😢:bad}
]
```
![](https://cdn.discordapp.com/attachments/957286111250624552/1126666908662513684/image.png)


::: tip Button handling
Now, as you know how to create buttons, you may want to know how to handle them.
Check these pages:

- [Button trigger](../../Trigger/button.md)
- [$awaitButton](./awaitbutton.md)

:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="button" vertical="middle" /> <Badge type="tip" text="component" vertical="middle" /> 
