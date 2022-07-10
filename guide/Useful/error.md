# $error
Returns the error the interpreter threw

#### Usage: 
`$error`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $modifyChannelPerms[$authorID;-sendmessages;$channelID]
            $error
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        ❌ Invalid channel ID in $modifyChannelPerms[787695068306866198;-sendmessages;879380104768278608]
	</discord-message>
</discord-messages>


::: danger
The way [$modifyChannelPerms](../Channel/modifyChannelPerms) shown here is **NOT** correct! 

Check the [$modifyChannelPerms](../Channel/modifyChannelPerms) for the correct usage
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="error" vertical="middle" />  <Badge type="tip" text="wrong usage" vertical="middle" />  <Badge type="tip" text="Trown error" vertical="middle" /> 
