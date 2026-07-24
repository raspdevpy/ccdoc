# $httpRequestStatus

Returns the $httpRequest status code of the last request.

## Usage

```bash
$httpRequestStatus
```

## Example

#### Using $httpRequestStatus

How to use $httpRequestStatus to display status code of request

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $httpRequest[https://api.example.com/]<br>
        Code: $httpRequestStatus
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Api response!<br>
        Code: 200
    </discord-message>
</discord-messages>

##### Related functions: [$httpRequest](../Request/httpRequest.md) [$httpRequestHeader](../Request/httpRequestHeader.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="http request" vertical="middle"/> <Badge type="tip" text="api request" vertical="middle"/> <Badge type="tip" text="status" vertical="middle"/>