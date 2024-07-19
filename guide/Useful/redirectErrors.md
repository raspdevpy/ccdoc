# $redirectErrors
To redirect any kind of errors to a specific channel, by default errors will appear in the execution channel

#### Usage: 
`$redirectErrors[Channel ID]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $modifyChannelPerms[$authorID;-sendmessages;$channelID]
            $redirectErrors[Channel ID]
		</DiscordMarkdown>
	</discord-message>
</discord-messages>

<br/>
<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        ❌ Invalid channel ID in $modifyChannelPerms[787695068306866198;-sendmessages;879380104768278608]
	</discord-message>
</discord-messages>


::: danger
The way [$modifyChannelPerms](../Channel/modifyChannelPerms) shown here is **NOT** correct! 

Check the [$modifyChannelPerms](../Channel/modifyChannelPerms) for the correct usage
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="error" vertical="middle" />  <Badge type="tip" text="wrong usage" vertical="middle" />  <Badge type="tip" text="Trown error" vertical="middle" /> 
