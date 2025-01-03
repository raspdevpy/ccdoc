# User Reaction

## Introduction
triggers when user react/unreact with certain emoji

## Trigger When User React With Emoji
### Single Emoji
To set it to trigger when user react with a certain emoji (i.e 👍), set trigger to: add, emoji\
Example:
![](https://i.imgur.com/PZEM5gu.png)

### Multiple Emojis
To trigger on multiple emojis, set trigger to: add, Emoji1|Emoji2|Emoji3..\
For example, to set it to trigger on :+1: and :-1::
![](https://i.imgur.com/REenf8E.png)

### Using Custom Emoji
You can use the custom emoji name like `wave` or the id like `123456`

## Trigger When User Remove Reaction
### Single Emoji
To set it to trigger when user remove his reaction of certain emoji (i.e 👍), set trigger to: remove, emoji\
![](https://i.imgur.com/KaucN95.png)

### Multiple Emojis
To trigger on multiple emojis, set trigger to: remove, Emoji1|Emoji2|Emoji3..\
For example, to set it to trigger on :+1: and :-1::
![](https://i.imgur.com/dmLSHrT.png)

## Trigger When User React/Unreact
### Single Emoji
To set it to trigger when user react with certain emoji (i.e 👍), set trigger to: `emoji`\
Example:
![](https://i.imgur.com/zm0pjt2.png)

### Multiple Emojis
To trigger on multiple emojis, set trigger to: Emoji1|Emoji2|Emoji3..\
For example, to set it to trigger on :+1: and :-1::
![](https://i.imgur.com/jxmlsg6.png)

## Trigger On React On Specific Message
To make the bot to trigger only when someone react/unreact on specific message, you can set it by adding `=message id` to the trigger\
example 1 (on react): `add, 👍=123456790`
example 2 (on unreact): `remove, 👍=123456790`

## Example 1: Reaction Role
Let's design simple reaction role command, we will set it to give user role `Role1` when he reacts with :+1:
### Steps
1. Send your message
![](https://i.imgur.com/CGYgmH6.png)

2. Copy the message ID (in this example it's 1091151883432890408)
![](https://i.imgur.com/Vh8Gy55.png)

3. Create reaction command and set trigger:`add, 👍=1091151883432890408`
![](https://i.imgur.com/l35avTX.png)

4. Set the code to be: `$giveRoles[$authorID;Role1]`
![](https://i.imgur.com/N16xPAa.png)

5. Test it by reacting with :+1:

That's it :tada:

## Example 2: I Agree
![](https://cdn.discordapp.com/attachments/772051120368910371/882201196000084018/first_reaction.gif)
