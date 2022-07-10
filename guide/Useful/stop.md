# $stop
This function will cause the interpetender to stop the command execution & return a message if wanted.

#### Usage: 
`$stop[Message (optional)]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
            !!exec $sendMessage[This message will be send;no]
            {{ '\n' }}
            $stop[This funtion will cause the interpetender to stop the code]
            {{ '\n' }}
            $sendMesssage[This message won't be send;no]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This message will be send
	</discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This funtion will cause the interpetender to stop the code
	</discord-message>
</discord-messages>

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: danger Watch Out!!
Using plain text in your code, like below will **NOT** work!!

This code doesn't work:
```bash
This is plain text before the stop function
$stop
This is plain text after the stop function
```
^^ - This will not send anything! 
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Stop" vertical="middle" />  <Badge type="tip" text="Cancel" vertical="middle" />  <Badge type="tip" text="Error" vertical="middle" />  <Badge type="tip" text="End Execution" vertical="middle" />