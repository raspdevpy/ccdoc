# Complete Embed

Here is a code example of a complete embed.

## Function Format

$title[Title;https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp]
$author[Custom Command;https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp;https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp]
$image[https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp]
$description[Description]
$thumbnail[https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp]
$color[#0c2238]
$footer[Footer]

## Embed Format

{title:Title}
{url:https#COLON#//cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp}
{footer:Footer}
{description:Description}
{color:#0c2238}
{author:Custom Command:https#COLON#//cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp}
{thumbnail:https#COLON#//cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp}
{image:https#COLON#//cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp}

# How do I execute the code?

You can directly use the function format code with !!exec or inside your custom command

To use the embed format, you have to wrap the code inside an embed function (a func which sends a message) like !!exec $sendMessage[code] or inside your custom command

## What is the difference between function and embed format?

### Function Format:

Inside your custom command or !!exec it gets executed at last. (after all functions).
It only allows you to send a embed and is perfect for beginners

### Embed Format:

It allows you to send a embed with button,dropdowns etc and is perfect for advanced users
Inside your custom command or !!exec it gets executed directly,since it is wrapped in a func, which directly executes it
Almost every function, which can send a message supports the embed format.
Here are some functions:
$sendMessage, $cooldown, $editIn, $awaitMessage, $reply etc
Another advantage is that the embed format is parsed dynamically, so you can use loop, which create fields for example.
