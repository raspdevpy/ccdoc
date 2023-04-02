# $timeToDate

Convert timestamp (since 1970 in ms) to formatted Date (Timezone will respect [$timeZone](../Date/timezone.md) value)

## Usage

```bash
$timeToDate[Time;Format (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $timeToDate[$timeStamp;%y%-%m%-%d%]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        2022-3-12
        </discord-message>
</discord-messages>

::: tip Accepted Time Formats
You can see the full list [here](../CodeReferences/ref.time_format.md)
:::

