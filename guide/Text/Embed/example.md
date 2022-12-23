# Complete Embed

Here is a code example of a complete embed.

## Function Format

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

## Curl Format

{author:name:avatar}
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

### Only for interactions

{ephemeral=yes/no}

::: tip What are ephemerals?
Ephemerals are a type of message that can be dismissed by the user and can only be seen by the user. [Learn more](https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ#:~:text=An%20"Ephemeral%20Message"%20is%20a,long%20enough%2C%20or%20restart%20Discord.)
:::

{interaction}
{return_id=yes/no}
{ephemeral}
{message=curl embed content, menus, buttons}
{pin}

# How do I execute the code?

You can directly use the function format code with !!exec or inside your custom command

To use the embed format, you have to wrap the code inside an embed function (a func which sends a message) like !!exec $sendMessage[code] or inside your custom command

## What is the difference between function and embed format?

### Function Format:

Inside your custom command or !!exec it gets executed at last. (after all functions).
It only allows you to send a embed and is perfect for beginners

### Curl Format:

It allows you to send a embed with button,dropdowns etc and is perfect for advanced users
Inside your custom command or !!exec it gets executed directly,since it is wrapped in a func, which directly executes it
Almost every function, which can send a message supports the embed format.
Here are some functions:
$sendMessage, $cooldown, $editIn, $awaitMessage, $reply etc
Another advantage is that the embed format is parsed dynamically, so you can use loop, which create fields for example.

::: danger Please read!
If you use curl format, make sure to use : to separate the parameters.

If you use func format, make sure to use ; to seperate the parameters.
:::

###### Tags: <Badge type="tip" text="embed" vertical="middle" />
