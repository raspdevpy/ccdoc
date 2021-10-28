# Examples
Here you will find some examples and some codes from our Staff Members

## Economy

#### !pay \<mention\> {amount}
User Command, to pay money to a user

```bash
$initvar[user;money;0]
$initvar[user;bank;0]
$initvar[user;money;0;$mentioned[1]]
$initvar[user;bank;0;$mentioned[1]]

$onlyIf[$message[2]>0;You cannot give $nickname[$mentioned[1]] a lower amount then 0]
$onlyIf[$message[2]<$getUserVar[bank];That amount is higher than the amount in your bank!]
$onlyIf[$isNumber[$message[2]]==true;Not a Valid Number]
$onlyIf[$mentioned[1]!=;You just want to throw your money into the sea or something? Please mention someone to give your money to!]

$setUserVar[bank;$math[$getUserVar[bank;$mentioned[1]]+$message[2]];$mentioned[1]]
$setUserVar[bank;$math[$getUserVar[bank;$authorID]-$message[2]];$authorID]

$author[$username;$authorAvatar]
$description[You gifted :dollar: $message[2] to $nickname[$mentioned[1]]]
```

#### !giveMoney \<mention\> {amount}
Staff Command, to give money to a user, from a giveaway for example!

```bash
$initvar[user;money;0]
$initvar[user;bank;0]
$initvar[user;money;0;$mentioned[1]]
$initvar[user;bank;0;$mentioned[1]]

$onlyIf[$message[2]>0;You cannot give $nickname[$mentioned[1]] a lower amount then 0]
$onlyIf[$message[2]<$getUserVar[bank];That amount is higher than the amount in your bank!]
$onlyIf[$isNumber[$message[2]]==true;Not a Valid Number]
$onlyIf[$mentioned[1]!=;You just want to throw your money into the sea or something? Please mention someone to give your money to!]

$setUserVar[bank;$math[$getUserVar[bank;$mentioned[1]]+$message[2]];$mentioned[1]]

:white_check_mark: done, successfully added $message[2] to $nickname[$mentioned[1]]'s balance!
```