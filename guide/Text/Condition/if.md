# $if
Checks An expression and executes code Only if that expression is true

## Shortest Syntax
```bash
$if[EXPRESSION]
	CODE
$endIf
```

## What is expression?
Read about it [here](../../CodeReferences/ref.expression.md)

##### Example 1 only with $if

Since the username of the executor is Tom it executed the if block
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Tom">
		!!exec $if[$username==Tom]<br/>
            Oh, you are Tom!<br/>
        $endIf
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Oh, you are Tom!
	</discord-message>
</discord-messages>

##### Example 2 only with $if and $else

Since the username is not Tom it executes the else block
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Bob">
		!!exec $if[$username==Tom]<br/>
            Oh, you are Tom!<br/>
            $else <br/>
            You are not Tom!<br/>
        $endIf
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		You are not Tom!
	</discord-message>
</discord-messages>

##### Example 3 $if , $else and $elseif

Since the username is not Tom .It goes to the next if statement ,which is $elseif[$username==Lisa] and it will execute it 
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Lisa">
		!!exec $if[$username==Tom]<br/>
            Oh, you are Tom!<br/>
            $elseif[$username==Lisa] <br/>
            You are Lisa!<br/>
            $endelseIf<br/>
            $else<br/>
            I don't know you :C<br/>
        $endIf
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		You are Lisa!
	</discord-message>
</discord-messages>

##### Example 4 $if , $else and $elseif

Since the username is not Tom .It goes to the next if statement ,which is $elseif[$username==Lisa] and it will execute it 

Info: The second else if will get never executed ,because it will exit the statement after the first true expression
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Lisa">
		!!exec $if[$username==Tom]<br/>
            Oh, you are Tom!<br/>
            $elseif[$username==Lisa] <br/>
            1.You are Lisa!<br/>
            $endelseIf<br/>
            $elseif[$username==Lisa]<br/> 
            2.You are Lisa!<br/>
            $endelseIf<br/>
            $else<br/>
            I don't know you :C<br/>
        $endIf
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1.You are Lisa!
	</discord-message>
</discord-messages>

##### Example 5 multiplie condtions in if with && or ||
Expression can accept multiple conditions, use `||` or `&&` as separators
<br/> `||` is for OR
 <br/> `&&` is for AND

Example:
```
$username==Mido&&$country==Egypt
```
Condition 1: `$username==Mido`
Condition 2: `$country==Egypt`
But this expression will only be true only if both condition 1 **AND** (because of &&) condition 2 is `true`

The Example below will execute since $username==Tom is false but the second expression is true .It wouldn't work with &&
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Lisa">
		!!exec $if[$username==Tom||$username=Lisa]<br/>
        You are Tom or Lisa<br/>
        $endIf
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		You are Tom or Lisa
	</discord-message>
</discord-messages>

The Example will only execute if the username is Lisa and their tag is 9999
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Lisa#9999">
		!!exec $if[$username==Lisa&&$discriminator=9999]<br/>
        You are Lisa with tag 9999<br/>
        $endIf<br/>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		You are Lisa with tag 9999
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="if" vertical="middle" /> <Badge type="tip" text="condition" vertical="middle" /> <Badge type="case" text="decimals" vertical="middle" /> 