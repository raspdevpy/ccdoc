#  $author
Adds an author to a message embed, with an optional icon url and/or hyperlink.

#### Usage: `$author[text;icon url(optional);hyperlink(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $author[text]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
            authorName="text"
		>
		</discord-embed>
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $author[text;$authorAvatar]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
            authorName="text"
            authorIcon="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png"
		>
		</discord-embed>
	</discord-message>
     <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $author[text;$authorAvatar;https://ccommandbot.com]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
            authorName="text"
            authorIcon="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png"
            authorUrl="https://ccommandbot.com"
		>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{author:text:icon url(optional):hyper link(optional)}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)
:::
