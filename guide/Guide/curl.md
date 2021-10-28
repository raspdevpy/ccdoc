# Curl Arguments
Oh No, a change :cry:... Yeah, we know, people don't like changes. That's the reason we also support the "old" system `$setServerVar[name;value]`


## Why have you added them?
We have added curl arguments to improve the readability of long and complicated codes & so there is no need anymore for the `;;;` clutters. 

The big advantage is that you don't have to specify all arguments. For example;

```bash
$createChannel[
    {name=channelName}
    {type=text}
    {topic=A fantastic channel topic}
]
```

will create a channel without having to specify things like "return ID" & "NSFW"

## How Do They Work?
As shown above, they work the same as the always known curl arguments for messages with embeds