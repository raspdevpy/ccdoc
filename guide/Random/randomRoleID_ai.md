# $randomRoleID

This function returns a random Role ID from a Role present in the server.  It's a simple way to pick a random role ID for various purposes in your custom commands.

#### Usage:

```
$randomRoleID
```

<br/>

**Example:**

Here's how you can use `$randomRoleID` in a custom command:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $randomRoleID
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    82907890789087988
  </discord-message>
</discord-messages>

In this example, the command `!!exec $randomRoleID` will output a random role ID from your server (e.g., `82907890789087988`).

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="role ID" vertical="middle" /> <Badge type="tip" text="selection" vertical="middle" />