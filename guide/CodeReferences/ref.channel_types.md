# Understanding Channel Types

Several functions, like `$channelType` and `$channelCount`, require you to specify a channel type. This page outlines the available channel types and provides an example of their usage.

### Available Channel Types:

Here's a list of the currently supported channel types:

*   `text`: Standard text channels.
*   `dm`: Direct Message channels (one-on-one conversations).
*   `voice`: Voice channels.
*   `dm_group`: Group Direct Message channels (multiple users in a DM).
*   `category`: Channel categories used to organize channels.
*   `news`: Announcement channels for server updates (formerly known as "announcement" channels).
*   `store`: Channels used for selling products within Discord (deprecated).
*   `thread_news`: Threads within news channels.
*   `thread_public`: Public threads within text channels.
*   `thread_private`: Private threads within text channels.
*   `post`: Forum post channel type.
*   `forum`: Forum channel type.
*   `stage`: Stage channels for audio and video broadcasting.

### Example Usage: `$channelType` in a Public Thread

This example demonstrates how `$channelType` returns the type of the current channel.

#### Scenario:

We'll use the `$channelType` function inside a **public thread**.

#### Code:

```
!!exec $channelType
```

#### Result:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $channelType
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    thread_public
  </discord-message>
</discord-messages>

###### Tags: <Badge type="tip" text="Channel Types" vertical="middle" />