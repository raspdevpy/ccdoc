# $httpRequestStatus

return the request status from the most recent request performed with $httpRequest

## Usage

```bash
$httpRequestStatus
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $let[response;$httpRequest[My API URL]]<br>Request status is $httpRequestStatus<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Request Status is 200<br><br>
        </discord-message>
</discord-messages>

### Note:
Its recommended to check the request status directly after $httpRequest, to check if it was valid status.