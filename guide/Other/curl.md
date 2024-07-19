# Curl Arguments
Curl arguments help to pass arguments to a function instead of using a parameter array like $randomText[one;two;three].
We have added curl arguments to improve the readability of long and complicated codes. With curl it's not required to fill optional values with empty parameter values like this: `;;;`


## Example

```bash
$createChannel[
    {name=channelName}
    {type=text}
    {topic=channel topic}
]
```

This will create a channel without having to specify parameters like "return ID" or "NSFW"

## Curl support
Curl is not supported on every function.
Check if a function supports curl by using !!func `function name`
