# Creating Custom Commands

Creating custom commands for your bot might seem daunting at first, but this guide will walk you through the process step-by-step! We'll explain each setting and show you how to use them effectively.

## Creating a New Command

Before diving into the settings, let's create a new command:

1.  Head over to the [dashboard](https://ccommandbot.com/dashboard)! This is where all the magic happens.

2.  Select the server you want to work on.

    > ![](https://i.imgur.com/2AlwSPW.png)

3.  Navigate to the **Manage Commands** section.

    > ![](https://i.imgur.com/TAZ2qrh.png)

4.  Click the **Create** button to start building your command.

    > ![](https://i.imgur.com/VFsbL20.png)

::: tip Dashboard Tour
On your first visit, you'll be greeted with a helpful dashboard tour. We highly recommend taking it! It will save you a lot of time and trouble in the long run by explaining all the features.
:::

## Command Type

The first, and most important, part of any command is its **Type**. This is the trigger that activates your command. Choose a type from the dropdown menu:

> ![Type dropdown](https://cdn.discordapp.com/attachments/957286111250624552/1096882428422918164/image.png)

Here's a breakdown of the available trigger types:

| Trigger Type                             | Triggers When                                          |
| ---------------------------------------- | ------------------------------------------------------ |
| [Word](../Trigger/word.md)              | Someone sends a specific message or word.              |
| [Slash Commands](../Trigger/slash.md)   | Someone uses a bot's slash command.                     |
| [On Reaction](../Trigger/reaction.md)     | A message receives a specific reaction.                |
| [On Join/Leave](../Trigger/joinorleave.md) | Someone joins or leaves the server.                    |
| [Role add/remove](../Trigger/roleaddremove.md) | Someone receives or loses a specific role.          |
| [Button](../Trigger/button.md)            | Someone clicks a button attached to a bot message.      |
| [Select Menu](../Trigger/menu.md)       | Someone submits a choice from a select menu.             |
| [Modal](../Trigger/modal.md)            | Someone submits a modal form.                          |
| [Timed or Interval](../Trigger/time.md)  | An action is executed repeatedly or on a schedule.     |
| [Voice](../Trigger/voicecondecon.md)     | Someone connects to or disconnects from a voice channel.|
| [Channel Create/Delete](../Trigger/channel.md) | A channel is created or deleted.                       |
| [Library](../Trigger/library.md)          | Executes pre-defined code in a library.                |

Our bot supports a wide variety of events, and we're constantly adding more!

::: tip Explore Trigger Types
You can learn more about each specific trigger type by clicking its name above. This will take you to a dedicated guide.
:::

## Trigger

Sometimes, the command type alone isn't enough. The **Trigger** allows you to specify conditions that must be met for the command to activate. For example, you might require a message to start with `!ping` to activate your ping command.

This condition is specified in the Trigger input field:

> ![trigger input](https://cdn.discordapp.com/attachments/957286111250624552/1096884667686326302/image.png)

::: tip Trigger Value Depends on Type
The value you enter in the Trigger field depends heavily on the chosen command type. Consult the documentation for your specific type to understand what values are expected. The green book icon will lead you to it!
:::

## Code

Now for the real **meat** of a custom command: the **Code**.  This is what the bot will *do* when the command is triggered.

The code is entered in the code editor:

> ![code editor](https://cdn.discordapp.com/attachments/957286111250624552/1096900826791944304/image.png)

### What to Put in the Code?

The simplest code is just plain text that the bot sends after being triggered. However, you can do much more!  You can use various functions to create complex interactions.  You can find a list of available functions under the `Functions` tab in this documentation, or directly within the dashboard.

::: tip Examples
Check out the [Tutorials & Examples](../Tutorials/1.ping.md) section for practical examples of custom commands in action.
:::

::: tip Save Your Work!
Remember to click the **Save** button after making changes to your command to ensure your changes are saved.
:::

## Other Settings

Custom Commands offer a range of additional settings to fine-tune how your command works. Here's a brief overview:

| Setting                   | Description                                                                                                                                                                                                                            | Appearance in Dashboard                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Minimum Permissions**   | Specifies the minimum Discord permissions a user needs to execute the command.                                                                                                                                                       | ![Min Perms](https://cdn.discordapp.com/attachments/957286111250624552/1096905113366433792/image.png) |
| **Ignored Roles**         | Roles that are prohibited from using this command.  Users with these roles will not be able to trigger the command.                                                                                                                   | ![Ignore roles](https://cdn.discordapp.com/attachments/957286111250624552/1096905153275244647/image.png) |
| **Run Only In**           | Specifies the channels where the command can be used. The command will not function in other channels.                                                                                                                             | ![Run only in](https://cdn.discordapp.com/attachments/957286111250624552/1096905184166289578/image.png) |
| **Channel Used**          | Determines the channel where the command's output will appear.                                                                                                                                                                     | ![Channel used](https://cdn.discordapp.com/attachments/957286111250624552/1096905230957944933/image.png) |
| **Cloneable Code**        | If enabled, the command's code can be accessed and used by anyone who has the token. **Use with caution.**                                                                                                                           | ![Clonable code](https://cdn.discordapp.com/attachments/957286111250624552/1096907554996633600/image.png) |
| **Name Field**            | Allows you to give your command a descriptive name. This is primarily for organizational purposes within the dashboard.                                                                                                                 | ![Name field](https://cdn.discordapp.com/attachments/957286111250624552/1096908409938387024/image.png) |

## Templates

Don't want to start from scratch? The dashboard provides access to a library of pre-built command templates that you can easily import and customize.

#### Want to Learn More About Templates?

Check out the [Template Section](./4.template.md) to learn more about templates and how to use them.