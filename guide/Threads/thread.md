# $thread
Gets info trom a thread.

#### Usage: 
`$thread[Thread ID;Type]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec &lt;@!$thread[owner]&gt;
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordMention :highlight="true">Member</DiscordMention>
	</discord-message>
</discord-messages>

::: details Valid objects for "Type"
* `archivedAt`
* `duration`
* `id`
* `members`
* `membersCount`
* `name`
* `owner`
* `locked`
* `parent`
:::

::: tip
This Command supports Curl Arguments, a link to the page explaining it, will get added when done
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="Get functions/ get thread" vertical="middle" /> <Badge type="tip" text="Threads" vertical="middle" /> <Badge type="tip" text="Info Threads" vertical="middle" />