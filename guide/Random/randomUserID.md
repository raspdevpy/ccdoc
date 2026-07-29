# $randomUserID

Retrieves a random user ID from a user within the server.

#### Usage:

```
$randomUserID
```

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $randomUserID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		97907890789087988
	</discord-message>
</discord-messages>

::: danger Important
The user ID is selected randomly from the server's cached members.  This means the returned user ID might not always represent a currently active member, especially if all guild members are not cached (typically only guaranteed in higher server tiers).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random user ID" vertical="middle" /> <Badge type="tip" text="selection" vertical="middle" /> <Badge type="tip" text="user ID" vertical="middle" />