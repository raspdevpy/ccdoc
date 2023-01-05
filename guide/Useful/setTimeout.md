# $setTimeout
Will execute the code inside it after certain time

#### Usage: 
`$setTimeout[time;file name (optional, default=$undefined));author (optional, default=$authorID)]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member" timestamp="08/20/2021">
                <DiscordMarkdown>
                        !!exec This part gets executed before the 2d timeout
                        {{ '\n' }}
                        $setTimeout[2d;Testing;$autorID]
                        {{ '\n' }}
                        This part after the 2d
                        {{ '\n' }}
                        $endTimeout
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" timestamp="08/20/2021">
        This part gets executed before the 2d timeout
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" timestamp="08/22/2021">
        This part after the 2d
	</discord-message>
</discord-messages>

:::tip 
If you only want to wait less then 1m, you can use [$wait](../Useful/wait.md)
:::



##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="timeout" vertical="middle" />  <Badge type="tip" text="Wait" vertical="middle" />  <Badge type="tip" text="Thinking" vertical="middle" />  <Badge type="tip" text="Set Timeout" vertical="middle" /> 