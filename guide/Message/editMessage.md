# $editMessage
Edits a message.

#### Usage: `$editMessage[messageid;new message;channelid(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
            !!exec $channelSendMessage[879431439299543040;This is a fantastic message! 
            {{ '\n' }}
            {{ '\n' }}
            The ID of this message is: $messageID;no]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordMarkdown>
            This is a fantastic message! 
            {{ '\n' }}
            {{ '\n' }}
            The ID of this message is: 880055520210329651
		</DiscordMarkdown>
	</discord-message>
</discord-messages>

<br/>
<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" edited="true">
		This is a fantastic edited message!
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $editMessage[879431439299543040;This is a fantastic editted message!;880055520210329651]
	</discord-message>
</discord-messages>

::: tip Used Functions
[$messageID](../Useful/messageID.md), to return the ID from the message used to trigger the command
:::

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: tip Related Functions
[$deleteMessage](../Message/deleteMessage.md), to delete a message in the server or DMs
:::

:::warning Watch Out!
For non-premium users, this command can only be used `4` times per command execution! And keep the cooldown in mind! 

So looping through the code below will NOT work:

```bash
$forEach[number;$seq[1;10]]
$editMessage[$channelID;New Message $number;$messageID]
$wait[1m]
$endForEach
```
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Edit" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" /> <Badge type="tip" text="Modify message" vertical="middle" />
