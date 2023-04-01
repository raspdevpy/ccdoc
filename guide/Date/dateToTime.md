# $dateToTime

Converts a human-readable date to time in milliseconds (Custom timezone can be set with [$timezone](../Date/timezone))

## Usage

```bash
$dateToTime[Date]
```

## Example
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $dateToTime[12-05-2000]
    </discord-message>

<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    975974400000
</discord-message>
</discord-messages>
