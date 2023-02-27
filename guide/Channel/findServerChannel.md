# $findServerChannel

Preforms a channel lookup. It can find a channel based on it's **name**, **mention**, or **id**.
Depending on the last parameter, it will return current channel ID, or `undefined`.

## Usage

```bash
$findServerChannel[name/mention/id;returnCurrentChannel (yes/no) (optional)]
```

## Example

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $findServerChannel[general;no]
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        802179504147136552
        </discord-message>
</discord-messages>

::: tip Related functions
[$findMember](../Member/findMember.md)
[$findRole](../Role/findRole.md)
[$findChannel](../Channel/findChannel.md)
:::
