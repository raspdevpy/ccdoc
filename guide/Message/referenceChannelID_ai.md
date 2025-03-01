# `$referenceChannelID`

Retrieves the ID of the channel containing the message a user replied to.

This variable is useful when you need to know the channel where the original message that triggered a reply was sent. This allows you to perform actions within that channel.

## Syntax

```bash
$referenceChannelID
```

## Explanation

`$referenceChannelID` returns the channel ID as a text.  If the message isn't a reply to another message, it will return an empty text.
