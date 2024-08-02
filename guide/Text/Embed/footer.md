# $footer
Adds a footer to a message embed with an optional icon url

#### Usage: `$footer[text;icon url(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $footer[This is a fantastic embed footer]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
		>
		<span slot="footer">This is a fantastic embed footer</span>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{footer: Your text here:icon url(optional)}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)

Link escapes are needed, use `\` to escape characters. Read [me](../../Other/syntax.md) to see more
:::
