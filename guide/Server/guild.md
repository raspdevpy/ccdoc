# $guild
a compact function with many functionalities!

### Usage `$guild[property]`

#### Supported Properties

* name - server's Name. 
* id - server's ID.
* acronym - server's name acronym.
* afkchannelid - server's afk Channel's ID.
* boostcount - server's boost count.
* boostlevel - server's boot level.
* created - server's date and time of creation.
* description - server's description.
* emojicount - server's emoji count.
* ispartnered - server is partnered, returns a true/false.
* isverified - Whether or not the server is verified, returns a true/false.
* membercount - server's membercount.
* ruleschannel - server's rule channel's id.
* systemchannelid - server's system channel's id.
* timestamp - creation timestamp of server.
* updateschannel - server's moderator news channel's id.
* verificationlvl - server's verification level.
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec This Server has $guild[boostcount] boosts!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This Server has 2 boosts!
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="server" vertical="middle" />