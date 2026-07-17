# `$randomMention`

Returns a random mention from the current server. This function is useful for things like raffles, giveaways, or randomly selecting a user.

#### Usage:

```
$randomMention
```

<br/>

**Example:**

This example shows how to use `$randomMention` to mention a random user in a command.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $randomMention
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    @Lisa
  </discord-message>
</discord-messages>

::: danger Warning
The mentions returned by this function are pulled from the server's cached member list.  This means that if all members haven't been cached yet (common in larger servers, especially those below "Tier 5" boosting), it may not include *every* member in the server.  For best results, ensure your bot has access to all members.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random mention" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="mention" vertical="middle" />