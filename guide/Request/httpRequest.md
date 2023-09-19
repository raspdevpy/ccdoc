# $httpRequest

Perform an http request, with a content and headers and return the response content

## Usage

```bash
$httpRequest[URL;Method;Content;Header 1;Header 2;...]
```

### Methods:
Accepts PUT, GET, POST, DELETE, HEAD, PATCH methods, if not provided, it will use GET method

### Content Input:
It can any content that suitable for your `content-type` header, like with `content-type: application/json` you can put the content as json format and so on

### Header:
It accept the header in format of header: value\
for example: `Content-Type: application/json`

### Example (Sending JSON Request):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $let[response;$httpRequest[My API URL;post;{"name":"Mido"};Content-Type: application/json]]<br>Response is $response<br>Response Status is $httpRequestStatus<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Response is {"success":true}<br>Response Status is 200<br><br>
        </discord-message>
</discord-messages>

### Some Notes:
* This function wont throw error if request non-ok status, so please check on your own the return value of $httpRequestStatus after the request to make sure its valid status you expecting
* Make sure the response data length is less than 1 MB, or it will errorRandom