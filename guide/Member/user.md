# $user
Retrieve an information about user given his user id, like his username.

### Usage `$user[userid;property]`

#### Supported Properties
| Property | Description |
|:-----------:|-------------|
| name | username |
| id | user ID |
| tag | user Tag |
| discrim | user discriminator |
| mention | user mention |
| avatar | user avatar URL |
| isbot | user is a bot, returns true/false |
| banner | return the user banner, undefined is returned if not found (user must be cached) |
| created | user account date and time of creation |
| timestamp | creation timestamp of user account |
| displayname | user display name if exists, otherwise username |

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $user[$authorID;name]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" />