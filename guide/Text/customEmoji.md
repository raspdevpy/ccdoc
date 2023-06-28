# $customEmoji
Sends a custom emoji from the current used server.


::: danger
This function only output emojis from actual used server!
So make sure that the emoji with the name used is present on the current server. 
Otherwise, nothing is returned.
:::

#### Usage: `$customEmoji[emoji name]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $customEmoji[cc]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordReaction image="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp"/>
	</discord-message>
</discord-messages>

::: tip want to send a normal emoji?
Just add it to your text.

EXAMPLE:
you can add`:thumbsup:`to your text. To display the emoji :thumbsup:
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Emoji" vertical="middle" /> <Badge type="tip" text="Custom Emojis" vertical="middle" /> <Badge type="tip" text="pictures" vertical="middle" /> <Badge type="tip" text="amazing" vertical="middle" />
