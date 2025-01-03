# Troubleshooting
Since our bot is very advanced, everyone faces their own problems. Because of this, we made a section, with some common problems. Sorted from most common to less common

The problem is the title, the answer is below it and after the question is the trigger type:

## My command does not trigger <Badge type="tip" text="Word" vertical="middle" /> 
Have you set the minimum permission for the command execution to `None`?

- No: change it, press save & try again

- Yes: check if your trigger contains any [special characters](../CodeReferences/specialCharacters)

## The bot failed to assign a role
Follow these steps!

1. Ensure the bot has sufficient permissions to assign roles. (We recommend granting him Administrator, as it will completely eliminate all permission issues.)

2. Ensure the bot's role (@Custom Command) is above the role you're trying to assign, as well as all the roles the member has. This can be found in Discord's Role Hierachy.
![Hierarchy example](https://media.discordapp.net/attachments/857273141968371732/964741875179356180/unknown.png?width=497&height=593 "hierarchy example")

If those steps fail, feel free to ask a member of our staff on the [support server](https://ccommandsbot.com/join).
