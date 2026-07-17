# $httpRequestHeader

Returns the value of a given header from the last request.

## Usage

```bash
$httpRequestHeader[header name]
```
1. **header name** - The header name to return value from. (case-insensitive)

## Example

#### Using $httpRequestHeader

How to return Content-Type from last request

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $httpRequest[https://api.example.com/]<br>
        Content-Type Header: $httpRequestHeader[content-type]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        {"message": "Api response!"}<br>
        Content-Type Header: application/json
    </discord-message>
</discord-messages>

##### Related functions: [$httpRequest](../Request/httpRequest.md) [$httpRequestStatus](../Request/httpRequestStatus.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="http request" vertical="middle"/> <Badge type="tip" text="api request" vertical="middle"/> <Badge type="tip" text="header" vertical="middle"/>