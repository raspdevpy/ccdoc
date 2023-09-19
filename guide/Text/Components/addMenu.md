# $addMenu
Add a menu to existing message

## Usage
```bash
$addMenu[
        {channel=channel id}
        {message=message id}
        {id=Menu ID}
        {ph=Placeholder}
        
        {label=Option 1 Label}
        {desc=Option 1 Description}
        {value=Option 1 ID}
        {emoji=Option 1 Emoji}

        {label=Option 2 Label}
        {desc=Option 2 Description}
        {value=Option 2 ID}
        {emoji=Option 2 Emoji}
        ...
    ]
```

### Example:
```bash
$addMenu[
        {chid=$channelID}
        {mid=1151607052007907449}
        {id=mymenu}
        {label=Rake}
        {value=rake}
        
        {label=Mido}
        {value=mido}]
```

### Output
![](https://i.imgur.com/yMUAza7.png)