# $forwardMessage
forward a messaage to another channel

#### Usage: `$forwardMessage[Source Channel ID;Source Message ID;Target Channel ID;Return the new message id (yes/no)]`

#### Example
Forwarding a message with ID `1234` to another channel called `Target Channel`
```php
$forwardMessage[$channelID;1234;Target Channel]
```