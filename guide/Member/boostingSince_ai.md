# $boostingSince

Returns the date a user started boosting the server.

## Usage

```bash
$boostingSince[userID;date/ms]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user to return boosting date
2. **date/ms** - (Optional) default value: `date`. If date, it will return text in this format: `Day(name), Month(name) Day(number), Year(YYYY) Hours(HH):Minutes(MM) PM/AM`. If ms, timestamp in miliseconds will be returned. You can later format the timestamp using [$formatDate](../Date/formatDate.md).

## Example

#### Using $boostingSince

Multiple ways of using function $boostingSince

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $boostingSince
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Wednesday, January 1, 2025 08:30 PM
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $boostingSince[123456789123456789;ms]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        1735763400000
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $formatDate[$boostingSince[123456789123456789;ms];MM-DD-YYYY]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        01-01-2025
    </discord-message>
</discord-messages>

##### Related functions: [$formatDate](../Date/formatDate.md) [$timeToDate](../Date/timeToDate.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="boosting" vertical="middle"/> <Badge type="tip" text="time" vertical="middle"/> <Badge type="tip" text="timestamp" vertical="middle"/>