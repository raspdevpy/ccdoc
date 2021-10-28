#  $description
Adds a description to a message

#### Usage: `$description[your text]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $description[This is a description]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
		>
        This is a description
		</discord-embed>
	</discord-message>
</discord-messages>

Description with hyperlinks:
Usage:  `\[link\](https://ccommandbot.ga "tooltip(optional)")`
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $description[This is a description with \[link\](https://ccommandbot.ga "tooltip")]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
		>
        This is a description <a href="https://ccommandbot.ga" target="_blank" title="tooltip">hello</a>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{description:your text}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../guide/syntax.md)
:::