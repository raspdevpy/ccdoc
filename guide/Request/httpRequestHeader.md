# $httpRequestHeader

return the header values from the most recent request performed with $httpRequest

## Usage

```bash
$httpRequestHeader[header name]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $let[response;$httpRequest[My API URL]]<br>Response Content type is $httpRequestHeader[content-type]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Response Content type is application/json
        </discord-message>
</discord-messages>