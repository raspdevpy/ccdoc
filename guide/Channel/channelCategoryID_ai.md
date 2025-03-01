# $channelCategoryID

Retrieves the ID of the category channel the current channel or a specified channel belongs to.

**What it does:** This function returns the unique identifier (ID) of the category channel that the channel where the command is executed is in. You can also specify a different channel ID to get its category ID.

#### Usage:

*   `$channelCategoryID` -  Returns the category ID of the current channel where the command is used.
*   `$channelCategoryID[channelID]` - Returns the category ID of the specified channel ID. Replace `channelID` with the actual ID of the channel.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelCategoryID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		83975894758938799
	</discord-message>
</discord-messages>

In this example, the command `!!exec $channelCategoryID` is used in a channel that is within the category channel with the ID `83975894758938799`.  The bot returns the ID of the category channel.

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="category" vertical="middle" /> <Badge type="tip" text="channel ID" vertical="middle" />