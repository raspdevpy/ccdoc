# $cooldown code reference
The code coded on the dash for the command! 
*(You can always go back to the main page by clicking [this](../Useful/cooldown.md) link)*


```bash
$cooldown[24h;❌ - you can not use this command already again! Please wait %time% before executing this command again]

$sendMessage[good morning, I have given you your daily salery!]

$initVar[user;money;0]

$setUservar[money;$math[$getUserVar[money]+1]]
```

Used functions in the code:

[$sendMessage](../Message/sendMessage.md)

[$initVar](../Variables/initVar.md)

[$setUserVar](../Variables/setUserVar.md)