# $findServerChannel

This function allows you to search for a specific channel within your Discord server. You can identify the channel by its **name**, **mention**, or **ID**.

The last parameter determines what the function returns: the channel's ID or `undefined` if the channel is not found.

## Syntax

```bash
$findServerChannel[query;returnCurrentChannel (yes/no) (optional)]
```

**Parameters:**

*   `query`: (Required) The name, mention (e.g., `<#1234567890>`), or ID of the channel you're looking for.
*   `returnCurrentChannel`: (Optional)  Specify whether to return the current channel's ID if not found.
    *   `yes`: Returns the channel's ID.
    *   `no`: Returns `undefined` if the channel is not found. Defaults to `no` if omitted.

## Example

In this example, we're searching for a channel named "general" and telling the function *not* to return anything if the channel is not found.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $findServerChannel[general;no]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        802179504147136552
    </discord-message>
</discord-messages>

::: tip Related functions

*   [$findMember](../Member/findMember.md): Find a member in the server.
*   [$findRole](../Role/findRole.md): Find a role in the server.
*   [$findChannel](../Channel/findChannel.md): Find a channel (works across servers if the bot is in multiple).

:::