# $noEscapingMessage <Badge type="danger" text="DANGER WARNING!!" vertical="middle" /> 
It does the same as `$message` BUT, special characters won't be replaced! 

#### Usage: `$noEscapingMessage`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$` $noEscapingMessage
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        `$`
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$`
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        `#CHAR#`
	</discord-message>
</discord-messages>

::: danger DO NOT PROCEED
ONLY USE THIS FUNCTION WHEN YOU KNOW WHAT YOU'RE DOING!!

This function, can cause your command to completely fail!
:::

::: tip
Use [$message](../Message/message.md) to make sure you're safe with characters
:::

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Replace" vertical="middle" /> <Badge type="tip" text="danger" vertical="middle" /> <Badge type="tip" text="un-escaped" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />