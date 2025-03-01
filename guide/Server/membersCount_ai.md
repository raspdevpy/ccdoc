# $membersCount

Returns the amount of users in your server/guild!

#### Usage: `$membersCount`

```
!!exec There are `$membersCount` members in the server!
```

**Example:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec There are `$membersCount` members in the server!
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    There are `599` members in the server
  </discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />