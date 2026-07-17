# $authorID

Returns the ID of the user who executed the command.

## Usage

```bash
$authorID
```

## Example

#### Using $authorID

How to use $authorID

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec My ID is $authorID
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        My ID is 123456789123456789
    </discord-message>
</discord-messages>

##### Related functions: [$mention](../Member/mention.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="authorID" vertical="middle" /> <Badge type="tip" text="executor" vertical="middle" /> <Badge type="tip" text="command author" vertical="middle" /> <Badge type="tip" text="" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />