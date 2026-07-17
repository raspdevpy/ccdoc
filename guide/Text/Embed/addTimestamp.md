#  $addTimestamp
Adds a timestamp to a message embed.

#### Usage: `$addTimestamp` or `$addTimestamp[ms]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addTimestamp
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			timestamp="09/12/2021"
		>
		</discord-embed>
	</discord-message>
</discord-messages>

or with specified Time

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addTimestamp[$parseTime[13/09/2021]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			timestamp="09/13/2021"
		>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{timestamp:ms}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)
:::
