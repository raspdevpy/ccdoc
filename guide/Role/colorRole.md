# $colorRole
Changes the color of given role ID.

#### Usage: `$colorRole[roleID;hex]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $colorRole[$highestRole;ff0000]
		</discord-message>
	<discord-message :bot="false" role-color="#ff0000" author="Member">
		Color was changed to red!
	</discord-message>
	
</discord-messages>

::: tip Related Functions
[$highestRole](highestRole.md), sets the color of the embed

[$color](../Text/Embed/color.md), sets the color of the embed

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="colorRole" vertical="middle" /> <Badge type="tip" text="color" vertical="middle" /> <Badge type="tip" text="change color" vertical="middle" />