# Complete Embed

Here is a code for a complete embed and a comprehension of both embed formats.

## Function Format

```php
$author[name;avatar;link]
$title[title;url]
$color[hex/int/COLOR]
$thumbnail[url]
$description[description]
$addField[name;value;inline (yes/no)]
$image[url]
$footer[text;url]
$button[name;color;id;emoji;disabled (yes/no);inline (yes/no)]
$reply[message id;mention (yes/no)]
$attachment[url;name]
$editIn[time]
$deleteIn[time;new content]
$deletecommand
$addTimestamp[time]
$addReactions[emoji;emoji...]
$selectMenu[id;placeholder;min value(optional);max value;(optional);label;desc;value;value]
```

## Curl Format

```
{author:name:avatar:link url}
{title:title}
{color:hex/int/COLOR}
{url:title url}
{thumbnail:url}
{description:description}
{field:name:value:inline (yes/no)}
{image:url}
{footer:footer:avatar url}
{timestamp:time}
{button:label:style/color/url:emoji:id/link:newline (yes/no):disabled (yes/no)}
{reply:message id}
{reply_mention}
{attachment:file name:url:spoiler (yes/no)}
{reactions:emoji,emoji...}
{suppress:yes/no}
{delete:time}
{edit:time:new content}
{deletecommand}
{timestamp}
{pin}
```

### Only for interactions

```
{ephemeral=yes/no}
{interaction}
{return_id=yes/no}
{message=curl embed content, menus, buttons}
{pin}
```

::: tip What are ephemerals?
Ephemerals are a type of message that can be dismissed by the user and can only be seen by the user. [Learn more](https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ#:~:text=An%20"Ephemeral%20Message"%20is%20a,long%20enough%2C%20or%20restart%20Discord.)
:::

## What is the difference between function and embed format?

### 1. Function Format:

Function format works as usual functions, but it allows you to send up to **1 embed** and the embed gets sent right after the execution of your command.

#### Example:
If you created a command with the following code, the bot would:
1. First change author's 
2. Send an embed confirming the change,

```php
$title[Nickname changed]
$description[Your nickname has been changed to lowercase ($toLowercase[$username])]

$changeNickname[$authorID;$toLowercase[$username]]
```

### 2.  Curl Format:

Curl embeds are a more complex way of sending embeds. It's used to "attach" an embed to a message sent with a function like `$sendMessage`, or `$interactionReply`.
This format unlike the previous one, follows the normal code flow.

#### Example:
The following code would:
1. Send a message announcing the upcoming nickname change,
2. Edit user's nickname,
3. Edit the previously sent message to confirm the change.

```php
$sendMessage[
    {title: Nickname change}
    {description: Your nickname is going to be changed to lowercase ($toLowercase[$username])}
]

$changeNickname[$authorID;$toLowercase[$username]]

$editMessage[$sentMessageID;
    {title: Nickname changed}
    {description: Your nickname has been changed to lowercase ($toLowercase[$username])}
]
```

::: danger Separators
Please note, that separators vary between the formats:
* Function arguments are separated `;`
* Curl embed arguments are separated with `:`
:::

###### Tags: <Badge type="tip" text="embed" vertical="middle" />
