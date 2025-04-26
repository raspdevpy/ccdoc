# $httpRequest

Makes a HTTP request, with a content and headers. Returns the response content.

## Usage

```bash
$httpRequest[URL;Method;Content;Header 1;Header 2;...]
```
1. **URL** - The URL you want use for your request.
2. **Method** - (Optional) default value: `GET`. Can be `PUT`, `GET`, `POST`, `DELETE`, `HEAD` or `PATCH`. The type of request you want to make.
3. **Content** - (Optional) default value: (empty). The body of your request. Useful with POST and similar. Format is `Content: value`.
4. **Header N** - (Optional) default value: (empty). The headers used with your request. This can be used for authorization, content-type to await and other data that your URL requires to request with.

## Example

#### Successful http request

How to successfuly get data from an api

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

#### Unsuccessful http request

Unsuccessful request without error message

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $httpRequest[https://api.example.com/path]<br>
        Code: $httpRequestStatus
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Code: 404
    </discord-message>
</discord-messages>

::: warning Warning
The response data must be less than 1 MB in size. Requests exceeding this limit will result in an error.<br>
In order to use `$httpRequest`, the URL you wish to use needs to be whitelisted. To request a whitelist, please open a ticket in our [Support Server](https://ccbot.me/discord).
:::
::: danger Error Handling
This function does not automatically throw an error if the request fails. You must check the value of `$httpRequestStatus` after the request to ensure the status code is what you expect.
:::

##### Related functions: [$httpRequestStatus](../Request/httpRequestStatus.md) [$httpRequestHeader](../Request/httpRequestHeader.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="http request" vertical="middle"/> <Badge type="tip" text="api request" vertical="middle"/>