# Useful Information

This page provides helpful information about the bot and this documentation itself. Let's get you started!

## Understanding the Docs

### Function Parameters Explained

::: tip What are Parameters?

Parameters are values that a function needs to operate correctly. Think of them as ingredients for a recipe. Let's look at the function `$giveRoles[userid;roleid]` as an example.

*   **Parameter 1: `userid`** -  This is the unique ID of the user you want to give the role to. You can get this ID using the `$authorID` function, which returns the ID of the command executor.

*   **Parameter 2: `roleid`** - This is the ID of the role you want to give. You can copy the role ID directly from Discord or use the `$roleID[rolename]` function to get the ID by the role's name.
:::

#### Parameter Examples

*   **Multiple Parameters:** `$giveRoles[authorid;roleid1;roleid2;...]`

    *   The `...` indicates that the function can accept multiple parameters of the same type (in this case, `roleid`).  Each parameter is separated by a semicolon (`;`).

*   **Optional Parameters:** `$random[min;max;allowDecimals (yes/no)(optional, default=no)]`

    *   `(optional)` means that the parameter is not required.
    *   `default=no` indicates the default value for the optional parameter. If you don't provide a value, the function will assume the default value (`no` in this case).
    *   You can simply omit the optional parameter if you want to use the default.

### How Functions Work

## Functions

A function is a fundamental building block of your code. It performs a specific action. For example, to send a message to a channel, you might use the `[$channelSendMessage](../Message/channelSendMessage.md)` or `[$sendMessage](../Message/sendMessage.md)` function. To kick a member, you'd use `[$kick](../Member/kick.md)`.

### Taking the Next Step: Triggers

## Triggers

Now that you understand the basic components, you need to choose a trigger. A trigger defines what action causes your code to run.

| Trigger Type                                 | Description                                                                                             |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| [Word](../Trigger/word.md)                   | Executes when a user sends a message containing a specific word or phrase.                            |
| [On Join/Leave](../Trigger/joinorleave.md)   | Executes when a user joins or leaves your server.                                                       |
| [On Reaction](../Trigger/reaction.md)        | Executes when a user reacts to a message.                                                               |
| [Voice](../Trigger/voicecondecon.md)         | Executes when a user connects to or disconnects from a voice channel.                                     |
| [Timed or Interval](../Trigger/time.md)      | Executes repeatedly at a set interval or at a specific time.                                          |
| [Button](../Trigger/button.md)               | Executes when a user clicks a Discord button.                                                          |
| [Role add/remove](../Trigger/roleaddremove.md) | Executes when a user receives or loses a role.                                                          |
| [Library](../Trigger/library.md) | Create A library |

### Congratulations! Ready to Create?

Now that you grasp the basics, let's create your first command! Head over to [this page](../Guide/1.create.md).