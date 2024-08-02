# $userLeaderboard
Generates a leaderboard of a user variable and return it.

#### Usage: `$userLeaderboard[variable;asc/desc (optional);{top}.- {username} - {value};list (optional, max=40);page (optional)]`

Available Variables:
| Variable | Description |
| --- | ----------- |
| {top} | returns the rank number |
| {value} | returns the numerical value of the variable |
| {raw_value} | returns the raw value in case it's not number |
| {id} | returns the user id |
| {mention} | returns the user mention |
| {username} | returns the username |
| {nickname} | returns the nickname |
| {tag} | returns the tag like Mido#1234 |
| {discriminator} | returns the discriminator like 1234 |

Order:
* `desc`: Will display all the members' ranks from largest to smallest.
* `asc`: Will display all the members' ranks from smallest to largest.

#### Example:
To use this function your uservar must have numeric values .
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Mido">
		!!exec $setUserVar[money;100] <br/>
        !!exec $userLeaderboard[money;asc;{top}.- {username} - {value}]
	</discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1.- Mido - 100
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setUserVar](../Variables/getUserVar.md)

Check out: [$getUserVar](../Variables/getUserVar.md)

Check out: [$deleteUserVar](../Variables/deleteUserVar.md)

Check out: [$resetUserVar](../Variables/resetUserVar.md)
:::
