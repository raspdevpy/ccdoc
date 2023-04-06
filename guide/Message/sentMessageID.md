# $sentMessageID

Retrieve the recently sent message in the code

## Usage

```bash
$sentMessageID
```

### Example (Delete Sent Message After 3 Seconds):
```bash
$sendMessage[Hello World]
$wait[3s]
$deleteMessage[$sentMessageID]
```