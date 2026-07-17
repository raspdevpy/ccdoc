# $wait
Will wait an X time, before executing the code below it.

#### Usage: 
`$wait[time]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $sendMessage[This part gets executed before the 10s]
            {{ '\n' }}
            $wait[10s]
            {{ '\n' }}
            $sendMessage[This part after the 10s]
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This part gets executed before the 10s
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This part after the 10s
	</discord-message>
</discord-messages>

:::tip 
If you want to wait more then 1m, we suggest you use [$setTimeout](../Useful/setTimeout.md)
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="timeout" vertical="middle" />  <Badge type="tip" text="Wait" vertical="middle" />  <Badge type="tip" text="Thinking" vertical="middle" /> 
