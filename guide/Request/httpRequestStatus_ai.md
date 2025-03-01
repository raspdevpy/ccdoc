# `$httpRequestStatus`

Returns the HTTP status code of the most recent request made using the `$httpRequest` function.

## Description

This function allows you to check the outcome of your HTTP request, helping you handle success and error scenarios.

## Usage

```bash
$httpRequestStatus
```

## Example

This example demonstrates how to use `$httpRequest` and `$httpRequestStatus` to make an API request and check its success.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $let[response;$httpRequest[My API URL]]<br>Request status is $httpRequestStatus
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Request Status is 200
  </discord-message>
</discord-messages>

**Explanation:**

1.  `$let[response;$httpRequest[My API URL]]`: This line makes an HTTP request to the specified "My API URL" using `$httpRequest` and stores the response (if any) into the `response` variable.
2.  `Request status is $httpRequestStatus`: This retrieves the HTTP status code of the previous `$httpRequest` call using `$httpRequestStatus` and displays it. In this example, the status code is `200`, which typically indicates a successful request.

## Important Note

It's highly recommended to check the `$httpRequestStatus` immediately after using `$httpRequest`. This allows you to verify if the request was successful before proceeding with further actions based on the response.  For example, you can use this to conditionally execute code based on whether the API call returned a 200 OK or an error code like 404 or 500.