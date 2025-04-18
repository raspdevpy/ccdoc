# $httpRequest

Performs a HTTP request, with a content and headers and returns the response content.

::: warning Warning
In order to use `$httpRequest`, the API you wish to use needs to be whitelisted. To request a whitelist, please open a ticket in our Support Server.
:::

## Usage

```bash
$httpRequest[URL;Method;Content;Header 1;Header 2;...]
```

**Explanation:** This function sends an HTTP request to the specified URL with the given method, content, and headers. It returns the content of the HTTP response.

### Parameters:

*   **URL:** The URL to send the request to.
*   **Method:** The HTTP method to use (e.g., `PUT`, `GET`, `POST`, `DELETE`, `HEAD`, `PATCH`). If no method is provided, it defaults to `GET`.
*   **Content:** The body of the HTTP request.  The format should match the `Content-Type` header. For example, if you're sending JSON, set the `Content-Type` header to `application/json` and format the content as a JSON string.
*   **Headers:**  A list of HTTP headers to include in the request. Each header should be in the format `Header: Value`.  Separate multiple headers with semicolons.

### Header Format:

Headers should be provided in the format `Header-Name: Header-Value`.  For example:

*   `Content-Type: application/json`
*   `Authorization: Bearer your_api_token`

### Example (Sending a JSON Request):

This example demonstrates sending a POST request with JSON data to an API.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $let[response;$httpRequest[My API URL;post;{"name":"Mido"};Content-Type: application/json]]<br>Response is $response<br>Response Status is $httpRequestStatus<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Response is {"success":true}<br>Response Status is 200<br><br>
  </discord-message>
</discord-messages>

### Important Notes:

*   **Error Handling:** This function does *not* automatically throw an error if the HTTP request returns a non-success status code (e.g., 404, 500).  You *must* check the value of `$httpRequestStatus` after the request to ensure the status code is what you expect.  For example:

    ```bash
    $let[response;$httpRequest[My API URL;get;;Content-Type: application/json]]
    $if[$httpRequestStatus!=200;Error: Request failed with status code $httpRequestStatus;Request successful: $response]
    ```

*   **Response Size Limit:** The response data must be less than 1 MB in size. Requests exceeding this limit will result in an error.
