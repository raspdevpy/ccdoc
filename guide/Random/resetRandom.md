# $resetRandom
functions like $random,saves the value till you reset the seed.Using this function will clear the randoms

### Usage: $resetRandom

Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Number:$random[1;6]
               Number:$random[1;6]
        $resetRandom after reset
        $random[1;6]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Number:5
 Number:5
  after reset
 1
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="reset random" vertical="middle" /> <Badge type="tip" text="clear" vertical="middle" /> 