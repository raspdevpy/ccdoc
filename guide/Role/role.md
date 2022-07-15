# $role
a compact function with many functionalities!

### Usage `$role[roleid;property]`

#### Supported Properties

* name - role's name.
* mention - role's mention.
* id - role's ID.
* hex - role's hex color.
* color - role's 10 base number
* created - role's date and time of creation.
* position - role's position.
* rawposition - role's raw position.
* guildid - role's guild's id of origin.
* guildname - role's guild's name of origin.
* timestamp - creation timestamp of roleid.
* ismentionable - role is mentionable, returns true or false.
* iseditable - role is editable, returns true or false
* ismanaged - role is managed(means discord bot integration), returns true or false
* ishoisted - role is hoisted, returns true or false
* usercount - users count with that role (cached only)
* icon - return role Icon if exists (undefined if not found)
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $role[798789079070970;position]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" />
