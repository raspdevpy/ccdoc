# $ping

This command provides the bot's ping (latency) in milliseconds.  It's a quick and easy way to check if the bot is online, responsive, and functioning correctly. Think of it like a simple "health check" for the bot!

#### Usage: `$ping`

<br/>

Here's an example of how to use the `$ping` command in Discord:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $ping ms
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    20 ms
  </discord-message>
</discord-messages>

In this example, the bot responded with `20 ms`, indicating a ping of 20 milliseconds. A lower ping generally means the bot is more responsive.

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Ping" vertical="middle" /> <Badge type="tip" text="Check" vertical="middle" /> <Badge type="tip" text="Online" vertical="middle" /> <Badge type="tip" text="OS" vertical="middle" />  <Badge type="tip" text="stats" vertical="middle" />