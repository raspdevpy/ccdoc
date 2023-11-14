# $jsonRequest

Makes an API request (`GET`) and returns its response.
::: tip Note
The URL must be whitelisted, you can check in our support server.
:::

## Usage

```bash
$jsonRequest[url;property;error message;headerName:headerValue;headerName:headerValue;...]
```

### Timeout
request will timeout after 1 minute, for tier 4+ it will timeout after 30 minutes.

## Example
Assume `my api url` return json reply like:
```json
{
    "user":"Mido",
    "money":5332
}
``` 

Code:
```bash
Your money is $jsonRequest[my api;money;failed to get the money]
```
