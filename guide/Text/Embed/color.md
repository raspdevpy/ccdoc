#  $color
sets the color of the embed

#### Usage: `$color[hex/colorname/random/transparent]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $color[#0099ff]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			borderColor="#0099ff"
		>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{color:hex or colorname or RANDOM or TRANSPARENT}`
Example: `{color:#0099ff}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)
:::
