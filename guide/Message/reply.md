# $reply

to make the bot reply to specific message

## Usage

```bash
$reply[messageID (optional); mention on reply (yes/no, default is no)]
```

### Example (Reply to user message with ping):
```bash
Hello $username
$reply[$messageID;yes]

```
#### Output
![](https://i.imgur.com/ekAkjX8.png)

### Example (Reply to user message without ping):
```bash
Hello $username
$reply[$messageID;no]
```
#### Output
![](https://i.imgur.com/AAZZu4T.png)