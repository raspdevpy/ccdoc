# $forEach
Will loop over a list and every loop it will take an item and assign it inside varname accessible by $get[varname]

#### Usage: 
`$forEach[varname;LIST (ex: mido rake azz);Separator (Optional, default is space)]`

#### Example:
```bash
$forEach[member;Rake, Mido, Mika, Azz, Felix, Flinkz, Wiki, Ddk;, ]
$get[member], is one of our Staff Members!
$endForEach
``` 

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $forEach[member;Rake, Mido, Azz, Mika, Felix, Flinkz, Wiki, Ddk;, ]
            {{ '\n' }}
            $get[member], is one of our Staff Members!
            {{ '\n' }}
            $endForEach
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordMarkdown>
			Rake, is one of our Staff Members!
            {{ '\n' }}
            Mido, is one of our Staff Members!
            {{ '\n' }}
            Azz, is one of our Staff Members!
            {{ '\n' }}
            Mika, is one of our Staff Members!
            {{ '\n' }}
            Felix, is one of our Staff Members!
            {{ '\n' }}
            Flinkz, is one of our Staff Members!
            {{ '\n' }}
            Wiki, is one of our Staff Members!
            {{ '\n' }}
            Ddk, is one of our Staff Members!
            {{ '\n' }}
		</DiscordMarkdown>
	</discord-message>
</discord-messages>

::: tip 
This can be used with [$seq](../Useful/seq)!
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="loop" vertical="middle" />  <Badge type="tip" text="forEach" vertical="middle" />  <Badge type="tip" text="for each object in list" vertical="middle" /> 
