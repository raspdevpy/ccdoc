# Curl Arguments
Curl arguments helps to pass arguments to a function instead of using a param array like $randomText[one;two;three].
We have added curl arguments to improve the readability of long and complicated codes. Its not required anymore to fill optional values with `;;;`


## Example

```bash
$createChannel[
    {name=channelName}
    {type=text}
    {topic=channel topic}
]
```

will create a channel without having to specify params like "return ID" & "NSFW"

## Curl support
Curl are not supported on every function.
Check the curl support by using !!func `fname`