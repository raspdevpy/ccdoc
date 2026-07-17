# $modifyChannelPerms

Modifies channel permissions, including those for categories. This function allows you to grant, deny, or set permissions to neutral for specific roles or users within a channel.

#### Usage:

`$modifyChannelPerms[channelID;+perm1;-perm2;/perm3;+perm4;...;roleID/userID]`

**Explanation:**

*   **`channelID`:** The ID of the channel you want to modify permissions for. This can be a text channel, voice channel, or category channel.
*   **`;` (Semicolon):** Separates permission modifications.
*   **`+perm`:** Grants the specified permission.
*   **`-perm`:** Denies the specified permission.
*   **`/perm`:** Sets the specified permission to neutral (inherited from the category or server).
*   **`roleID/userID`:**  The ID of the role or user you're modifying permissions for. Must be at the end of a permission modification set.

#### Example:

`$modifyChannelPerms[$channelID;-sendmessages;$roleID[muted]]`

This example restricts users with the role "muted" from sending messages in the channel specified by `$channelID`.

**Breakdown of the Example:**

*   `$channelID`:  Represents the ID of the target channel.
*   `-sendmessages`: Denies the `sendmessages` permission.
*   `$roleID[muted]`: Represents the ID of the role named "muted".

:::tip Information

*   Use `+` to **grant** a permission.
*   Use `-` to **deny** a permission.
*   Use `/` to set a permission to **neutral** (inherit from parent).
:::

::: tip Permissions

A comprehensive list of all available permissions can be found [here](../CodeReferences/ref.permissions_list.md).
:::

::: tip Related Functions

*   [$editChannel](../Channel/editChannel.md):  Can be used to modify other channel properties (name, topic, etc.).
:::

##### Function Difficulty: <Badge type="danger" text="Difficult" vertical="middle" />

###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="modify" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" />