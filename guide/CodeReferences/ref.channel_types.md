# Channel Types
Some functions require a channel type, such as `$channelType`, and `$channelCount`.

### Current available types:
```
	text
  	dm
  	voice
  	dm_group
  	category
  	news
  	store
  	thread_news
  	thread_public
  	thread_private
	post
	forum
  	stage

```

### Example
#### Using $channelType inside a **public** thread, returns:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelType
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		thread_public
	</discord-message>
</discord-messages>

###### Tags: <Badge type="tip" text="Channel Types" vertical="middle" />