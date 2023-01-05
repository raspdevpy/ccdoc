# $splitText
returns the element by index from [$textSplit](./textSplit.md)

#### Usage: `$splitText[index]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $textSplit[1 2 3 4 5 6 7 8 9 10; ]
            {{ '\n' }}
            $splitText[2]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2
	</discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$arrayGet](./../Array/arrayGet.md) instead 
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="split text" vertical="middle" /> <Badge type="tip" text="Return value" vertical="middle" />