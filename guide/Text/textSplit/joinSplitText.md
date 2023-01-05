# $joinSplitText
Joins the [$textSplit](./textSplit.md) indexes by a given separator 

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $textSplit[1 2 3 4 5 6 7 8 9 10; ]
            {{ '\n' }}
            $joinSplitText[-]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1-2-3-4-5-6-7-8-9-10
	</discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$arrayJoin](./../Array/arrayJoin.md) instead 
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="split text" vertical="middle" /> <Badge type="tip" text="Add" vertical="middle" />