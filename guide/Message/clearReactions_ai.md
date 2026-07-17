# $clearReactions

This function allows you to clear reactions from a specific message. You can either clear all reactions or only those associated with a particular emoji.

#### Usage: `$clearReactions[channelId;messageId;all/emoji]`

**Arguments:**

*   `channelId`: The ID of the channel where the message is located.
*   `messageId`: The ID of the message to clear reactions from.
*   `all/emoji`:  Specify either `all` to clear all reactions from the message, or provide the emoji itself to clear only reactions of that specific emoji.

**Example:**

Clearing all reactions from a message:

```
$clearReactions[8372387429384729;9483749283749283;all]
```

Clearing only the 👍 reactions from a message:

```
$clearReactions[8372387429384729;9483749283749283;👍]
```

::: tip Visual Example

![](https://cdn.discordapp.com/attachments/914682255346118687/940735320889098260/Screenshot_20220208192612.jpg)
:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="clear" vertical="middle" /> <Badge type="tip" text="reactions" vertical="middle" />