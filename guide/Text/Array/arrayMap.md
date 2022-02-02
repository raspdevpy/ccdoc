# $arrayMap
replaces the values of an array with the results of the function

#### Usage: `$arrayMap[Element Value]{ CODE...}`
::: warning Note
Only zero-cooldown functions are supported.
:::

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Mika Rake Wiki; ] {{ '\n' }} $arraymap[name]{ $name is cool! } {{ '\n' }} $arrayJoin[,]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Mika is cool!,Rake is cool!,Wiki is cool!
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="map" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" />