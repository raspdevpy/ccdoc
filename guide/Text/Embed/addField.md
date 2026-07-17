#  $addField
Adds fields to a message embed.

#### Usage: `$addField[title;value;inline(yes/no default=yes)(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addField[title;value;no] <br/>
        $addField[title2;value2] <br/>
        $addField[title3;value3] <br/>
        $addField[title4;value4] <br/>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
		>
        <discord-embed-fields slot="fields">
				<discord-embed-field fieldTitle="title">
					value
				</discord-embed-field>
				<discord-embed-field :inline="true" fieldTitle="title2">
					value2
				</discord-embed-field>
				<discord-embed-field :inline="true" fieldTitle="title3">
					value3
				</discord-embed-field>
                <discord-embed-field :inline="true" fieldTitle="title4">
					value4
				</discord-embed-field>
		</discord-embed-fields>
		</discord-embed>
	</discord-message>
</discord-messages>

$addField with hyperlinks:
Usage:  `\[link\](https://ccommandbot.com "tooltip(optional)")`
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addField[title;This is a field with \[link\](https://ccommandbot.com "tooltip")]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed slot="embeds">
        <discord-embed-fields slot="fields">
				<discord-embed-field fieldTitle="title">
					This is a description <a href="https://ccommandbot.com" target="_blank" title="tooltip">hello</a>
				</discord-embed-field>
		</discord-embed-fields>
		</discord-embed>
	</discord-message>
</discord-messages>

::: tip Do you want to add an embed inside a Function as paramter like $sendmessage[text]

Use: `{field:name:value:inline(yes/no default=yes)(optional)}`
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)
:::
