# $changeNickname

Changes the nickname of a specified member in the server.

#### Usage:

`$changeNickname[userID;nickname]`

*   **userID:** The ID of the member whose nickname you want to change.
*   **nickname:** The new nickname you want to assign to the member.

#### Example:

`$changeNickname[$authorID;I'm a bot lol]`

This example changes the nickname of the command author to "I'm a bot lol".  Make sure your bot has the correct permissions to change nicknames!

::: tip What You Need to Know

*   The bot requires the "Manage Nicknames" permission in the server.
*   The bot can only change nicknames of members with roles lower than its highest role.
*   The bot will error out if it doesn't have the required permissions or the user ID is invalid.

:::

::: tip Useful Functions

*   [$authorID](../Member/authorID.md): Retrieves the ID of the command author.

:::

::: tip Related Functions

*   [$nickname](../Member/nickname.md): Retrieves the current nickname of a member.

:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="change Nickname" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="modify name" vertical="middle" />