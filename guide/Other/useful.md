# Useful Information
This page includes useful Information about the bot and this documentation.

## Docs

### Used Shortcuts
`cc` -> is a custom command

### Function Explanation

::: tip What is a parameter?
Parameters are Values, which a Function needs. To understand it let us see the usage of `$giveRoles[userid;roleid]`

* Parameter 1 is a userid. A userid is an ID unique to that user. To get the userid we will use another function named $authorID, which returns the id of the executor

* Parameter 2 is a roleid. To get the roleid, you can copy the id of the role you want to give or use an another function named `$roleID[rolename]`
:::

#### Example: `$giveRoles[authorid;roleid1;...]`

`...` -> means the function can have more then 1 parameter. Every paramter (in this case roleid ) gets seperated with `;`

#### Example: `$random[min;max;allowDecimals (yes/no)(optional, default=no)]`

`(optional` -> this parameter is optional and the default value is `no`
You don't have to provide an optional parameter,if you use the default parameter

### Okay, cool... But how do functions even work?

## Functions
A function is a building block for your code. For example, if you want to send a message, you use can a function called [$channelSendMessage](../Message/channelSendMessage.md) or [$sendMessage](../Message/sendMessage.md). Or if you want to kick a member, you use a function called [$kick](../Member/kick.md)

### Nice, now I understand the basics! How do I proceed?

## Triggers
Now you understand the basic coding components, now we need to choose our trigger

| Triggertype                                   | gets executed when  a user,|
| --------                                      | -------- |
| [Word](../Trigger/word.md)                    | Sends a message|
| [On Join/Leave](../Trigger/joinorleave.md)    | Joins or Leaves your server | 
| [On Reaction](../Trigger/reaction.md)         | Reacts on a message|
| [Voice](../Trigger/voicecondecon.md)          | Connects to or Disconnects from a VC|
| [Timed or Interval](../Trigger/time.md)       | Repeated or Scheduled Execution|
| [Button](../Trigger/button.md)                | Clicks a Discord button|
| [Role add/remove](../Trigger/roleaddremove.md)| Recieves or Loses a role|
| [Library](../Trigger/library.md)| Create A library|

### Fantastic, you made it through the hardest learning curve... Let's proceed

Now we can create our very first command! Let's go to [this](../Guide/1.create.md) page
