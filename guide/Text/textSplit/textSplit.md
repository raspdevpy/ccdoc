# $textSplit
Splits the provided text with `seperator` and creates an array. To access them use: [$arrayGet](./../Array/arrayGet.md) or other array functions


#### Usage: `$textSplit[text;separator(optional, default = ,)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $textSplit[1 2 3 4 5 6 7 8 9 10; ]
		</DiscordMarkdown>
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="split text" vertical="middle" /> <Badge type="tip" text="text Split" vertical="middle" />
