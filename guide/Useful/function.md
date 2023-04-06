# $function
Create a user-defined function that can be called by $callFunction or $functionName


#### Usage: 
`$function[Function name;Param 1 (optional);Param 2...(optional)]`

#### Example:
```bash
$function[printHello;name]
    Hello $name
$endFunction
``` 

Call the function, using [$callFunction](../Useful/callFunction)
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

::: tip
Code inside the function is isolated from outside, which means changing of variables, arrays, random,...won't effect the outside.\
you can access outside temporary variables (assigned by [$let](../Variables/let.md)) but you can't change them.
:::

::: danger 
A function name can't start with number, and must be within [A-Z or a-z or _ or 0-9] for short format ($functionName)
but if you are using $callFunction to call the function, any name is valid
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Function" vertical="middle" />  <Badge type="tip" text="Custom Functions" vertical="middle" />  <Badge type="tip" text="Nested code" vertical="middle" />
