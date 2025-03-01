# $findChannel

Searches for a channel by its ID, mention, or name.

#### Usage:

`$findChannel[ID/mention/name;returnCurrentChannel (yes/no) (optional)]`

**Parameters:**

*   `ID/mention/name`: The ID, mention, or name of the channel to search for.
*   `returnCurrentChannel (yes/no) (optional)`:  Determines the behavior when a channel isn't found:
    *   `yes`: (Default) Returns the current channel's ID if no match is found.
    *   `no`: Returns `undefined` if no match is found.

**Example Scenarios:**

**Scenario 1: Channel Found (using channel name)**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findChannel[bot-commands;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

In this example, the bot searches for a channel named "bot-commands". If found, it returns the channel's ID (869243919697846379).  The `;no` tells the function to return undefined if the channel isn't found.

**Scenario 2: Channel Not Found (with `returnCurrentChannel` set to `no`)**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findChannel[bot-cmnds;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>

Here, the bot attempts to find a channel named "bot-cmnds" (note the typo).  Since no such channel exists, and the second argument is set to `no`, the function returns `undefined`.

::: tip Related Functions
[$channelExists](../Channel/channelExists.md) is useful for verifying if a channel ID exists before using it.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="find Channel" vertical="middle" /> <Badge type="tip" text="search Channel" vertical="middle" />