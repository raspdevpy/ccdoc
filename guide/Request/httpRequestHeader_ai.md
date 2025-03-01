# $httpRequestHeader

Retrieves the value of a specific header from the most recent HTTP request made using the `$httpRequest` function.

## Syntax

```bash
$httpRequestHeader[header name]
```

**`header name`**: The name of the HTTP header you want to retrieve.  This is case-insensitive.

## Description

This function allows you to access the headers returned by the server after making an HTTP request with `$httpRequest`. You can use this to inspect the response and handle it accordingly. Common headers include `content-type`, `content-length`, `date`, and `server`.

**Important:** This function only works if a successful `$httpRequest` has been made *before* it's called within the same execution context.

## Example

This example makes an HTTP request and then retrieves and displays the `content-type` header from the response.

```discord
!!exec $let[response;$httpRequest[My API URL]]
Response Content type is $httpRequestHeader[content-type]
```

Here's a breakdown of what's happening:

1.  `$let[response;$httpRequest[My API URL]]`: This first makes an HTTP request to "My API URL" (replace this with an actual URL). The response is stored in a variable called `response`.  While the response itself is stored, the crucial part here is that `$httpRequest` is executed and its headers become available.

2.  `Response Content type is $httpRequestHeader[content-type]`: This retrieves the value of the `content-type` header from the previous `$httpRequest` call and includes it in the message.

**Example Output:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $let[response;$httpRequest[My API URL]]<br>Response Content type is $httpRequestHeader[content-type]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Response Content type is application/json
  </discord-message>
</discord-messages>

**Note:**  Replace `My API URL` with a valid URL in your actual command. The output `application/json` is just an example; the actual value will depend on the API you're querying.