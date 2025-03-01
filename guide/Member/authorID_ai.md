# $authorID

This function retrieves the unique ID of the user who executed the command. This ID can be used in other functions or for logging purposes.

#### Usage: `$authorID`

<br/>

Here's an example of how `$authorID` works:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="User">
    !!exec $authorID
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    683630053686378498
  </discord-message>
</discord-messages>

In this example, the user executed the command `!!exec $authorID`.  The custom command then returned the user's ID: `683630053686378498`.

::: tip Related Functions
[$mention](../Member/mention.md) ― Use this function to mention the author of a command within a message!
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="authorID" vertical="middle" /> <Badge type="tip" text="cmd executor" vertical="middle" /> <Badge type="tip" text="command author" vertical="middle" /> <Badge type="tip" text="command" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />