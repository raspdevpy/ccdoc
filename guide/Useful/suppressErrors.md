# $suppressErrors
Suppress all the errors and sends a custom one. {error} will contain the error that was thrown.

#### Usage: 
`$suppressErrors[message]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $suppressErrors[Wrong usage of $modifyChannelPerms]
                       $modifyChannelPerms[$authorID;-sendmessages;$channelID]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Wrong usage of $modifyChannelPerms
	</discord-message>
</discord-messages>

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: danger
The way [$modifyChannelPerms](../Channel/modifyChannelPerms) shown here is **NOT** correct! 

Check the [$modifyChannelPerms](../Channel/modifyChannelPerms) for the correct usage
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="error" vertical="middle" />  <Badge type="tip" text="custom message" vertical="middle" />  <Badge type="tip" text="wrong usage" vertical="middle" />  <Badge type="tip" text="Trown error" vertical="middle" /> 
