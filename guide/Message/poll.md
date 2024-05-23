# $poll

retrieve information about a poll in a message

## Usage

```bash
$poll[Channel ID (default $channelID);Message ID (default $messageID);data]
```

### data options:
`name/question`: get the poll question\
`answers`: get the poll answers count\
`votes`: get the total votes this poll gathered\
`answer n name`: get the nth answer name\
`answer n emoji`: get the nth answer emoji\
`answer n votes`: get the nth answer votes\
`top n name`: get the nth top-ranked name\
`top n emoji`: get the nth top-ranked answer emoji\
`top n votes`: get the nth top-ranked answer votes\
`multiple`: whether poll accept multiple selection (yes/no)\
`expired`: whether poll is expired (yes/no)\
`expiretime`: get the expiration time of the poll in ms\
`ended`: whether poll is ended (yes/no)

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Poll name: $msg[$channelID;$messageID;name]<br>Total votes: $msg[$channelID;$messageID;votes]<br>Total answers: $msg[$channelID;$messageID;answers]<br>1st answer name: $msg[$channelID;$messageID;answer 1 name]<br>2nd answer name: $msg[$channelID;$messageID;answer 2 name]<br>1st answer votes: $msg[$channelID;$messageID;answer 1 votes]<br><br>
          </discord-message>
</discord-messages>

### Output:
![](https://i.imgur.com/DRajoEQ.png)