# $createObject

Creates an object that can be used later.

## Usage

```bash
$createObject[object string]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $createObject[{"name":"Mido","age":110}]<br>Your name is $objectGet[name]<br>Your age is $objectGet[age]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your name is Mido<br>Your age is 110
        </discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$ObjectCreate](./ObjectCreate.md) instead 
:::