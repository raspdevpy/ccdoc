# On reaction

## Basic Information
This trigger type, will trigger when a user react or un-reacts to/from a message.

#### Example of a reaction add trigger:

![](https://cdn.discordapp.com/attachments/772051120368910371/882201196000084018/first_reaction.gif)

## Syntax
Use this syntax to let the bot trigger when a member added an emoji to a message

"👍 " -> Triggers when the reaction; 👍  is added or removed

"add, 👍 " -> Triggers when the reaction; 👍  is added

"remove, 👍 " -> Triggers when the reaction; 👍  is removed

"add, 👍 =MESSAGE ID" -> Triggers when 👍  is added to the message with the specify message ID

"add, 👍|👎" -> Triggers when 👍 or 👎 reaction is added to a message

#### Reaction Trigger with custom emojis

`name` -> Triggers when the reaction; `name` is added or removed
`add, name` -> Triggers when the reaction; `name` is added
`remove, name` -> Triggers when the reaction; `name` is removed
`add, name =MESSAGE ID` -> Triggers when `name` is added to the message with the specify message ID
`add, name|name` -> Triggers when `name` reaction is added to a message

## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!
