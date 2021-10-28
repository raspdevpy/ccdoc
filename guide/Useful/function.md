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


## Global function
defining global function will allow you to execute this function from another custom command
#### How?
add /global to the name when defining the function
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $function[printHello/global;name]{
            {{ '\n' }}
            Hello $name 👋
            {{ '\n' }}
	    }
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $callFunction[printHello;Mika]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello Mika 👋
	</discord-message>
</discord-messages>

::: danger 
A function name can't start with number, and must be within [A-Z or a-z or _ or 0-9] for short format ($functionName)
but if you are using $callFunction to call the function, any name is valid
:::

::: danger Calling global function for first time
You will need to use `$callFunction` if you called a global function inside another custom command for first time, afterward you can use the short format
i.e $printHello
:::
##### Function Difficultly: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Function" vertical="middle" />  <Badge type="tip" text="Custom Functions" vertical="middle" />  <Badge type="tip" text="Nested code" vertical="middle" />
