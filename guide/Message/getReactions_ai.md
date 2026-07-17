# $getReactions

Retrieve a list of users who reacted with a specific emoji to a message.

#### Usage: `$getReactions[channelId;messageId;emoji;mention/username/id]`

**Parameters:**

*   `channelId`: The ID of the channel where the message is located.
*   `messageId`: The ID of the message to retrieve reactions from.
*   `emoji`: The emoji to search for. This can be the emoji itself (e.g., 👍) or its ID (if it's a custom emoji).
*   `mention/username/id`: Specifies what kind of data to return for each user. Choose one of the following:
    *   `mention`: Returns the user's mention string (e.g., `<@123456789012345678>`).
    *   `username`: Returns the user's username (e.g., `ExampleUser`).
    *   `id`: Returns the user's ID (e.g., `123456789012345678`).

<br/>

::: tip Example

**Scenario:** You want to get a list of users who reacted with the 👍 emoji on a specific message and mention them.

**Code:**

```
$getReactions[832894131844128888;940739445487988807;👍;mention]
```

::: tip Visual Examples

![](https://cdn.discordapp.com/attachments/914682255346118687/940739445487988807/Screenshot_20220208194229.jpg)

Counting how many users reacted
![](https://cdn.discordapp.com/attachments/914682255346118687/940740236466618418/Screenshot_20220208194538.jpg)
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="reactions" vertical="middle" />