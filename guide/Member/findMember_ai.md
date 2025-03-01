# $findMember

Searches for a member in the current server by their nickname, ID, mention, username, or username with discriminator (e.g., `username#1234`).

#### Usage:

`$findMember[search_query;returnCurrentUser]`

**Arguments:**

*   `search_query`:  The member's nickname, ID, mention, username, or username#discriminator to search for.
*   `returnCurrentUser`:  (Optional) Accepts `yes` or `no`. If set to `yes`, the function will return the current user's ID if no match is found for the `search_query`. If `no` or omitted, it will return `undefined` when no match is found.

**Example:**

```
$findMember[Member#0000;no]
```

If a member is found:

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findMember[Member#0000;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

If a member is not found:

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findMember[user;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>

::: danger Warning
This function relies on the bot's cache to find members. If a member is not cached, the function will not find them.  Member caching is more reliable with higher server tiers (especially Tier 5).
:::

::: tip Related Functions
*   [$authorID](../Member/authorID.md): Get the ID of the command's author.
*   [$userID](../Member/userID.md):  Find a user's ID from their username.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="find member" vertical="middle" /> <Badge type="tip" text="find user" vertical="middle" /> <Badge type="tip" text="search Member" vertical="middle" /> <Badge type="tip" text="search User" vertical="middle" />