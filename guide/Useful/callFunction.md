# $callFunction
To call a user-defined function created with [$function](../Useful/function)


#### Usage: 
`$callFunction[Function Name;Argument 1 (optional);Argument 2....(optional)]`

#### Example:
```bash
$callFunction[printHello;Mika]
``` 

Call the function, using [$callFunction](./callFunction)
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $function[printHello;name]
            {{ '\n' }}
            Hello $name 👋
            {{ '\n' }}
            $endFunction
            $callFunction[printhello;Mika]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello Mika 👋
	</discord-message>
</discord-messages>

Call the function, using [$printHello](../Useful/callFunction)
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $function[printHello;name]
            {{ '\n' }}
            Hello $name 👋
            {{ '\n' }}
            $endFunction
            $printhello[Mika]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello Mika 👋
	</discord-message>
</discord-messages>

::: danger 
A function name can't start with number, and must be within [A-Z or a-z or _ or 0-9]
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Function" vertical="middle" />  <Badge type="tip" text="Custom Functions" vertical="middle" />  <Badge type="tip" text="Nested code" vertical="middle" />