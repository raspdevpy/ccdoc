# $thumbnail
Adds an thumbnail to an message

#### Usage: `$thumbnail[YOUR URL HERE]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $thumbnail[$userAvatar]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			thumbnail="https://cdn.discordapp.com/avatars/787695068306866198/a70b4a5c5b00d9fcb684cac6768fded4.webp?size=4096"
		>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{thumbnail: Your link here}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../guide/syntax.md)

Link escapes are needed, use `\` to escape characters. Read [me](../../guide/syntax.md) to see more
:::