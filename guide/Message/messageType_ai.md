# $messageType

This function returns the type of the message that triggered the command. This can be useful for creating commands that behave differently depending on how they were called.

#### Usage: `$messageType`

<br/>

**Example:**

Here's how `$messageType` might be used in a custom command:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $messageType
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Default
  </discord-message>
</discord-messages>

::: tip Note
The `$messageType` function returns a specific message type. You can find a list of possible return values [here](../CodeReferences/ref.message_types.md). These values represent different ways a message can be sent, such as a regular text message, a system message, or an interaction response.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="type" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />