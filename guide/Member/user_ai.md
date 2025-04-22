# $user

Multiple options to retrive informations from user.

## Usage
```bash
$user[userID;option]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user you want to retrive informations from.
2. **option** - What data to retrive from user.<br>Can be:
  * `name` - Returns username of the user. (user)
  * `id` - Returns ID of the user. (123456789123456789)
  * `tag` - Returns tag of the user. (User#1234)
  * `discrim` - Returns discriminator of the user. (1234)
  * `mention` - Returns mention of the user.
  * `avatar` - Returns avatar URL of the user.
  * `isbot` - Returns `true` if the user is a bot, `false` if the user is not a bot.
  * `banner` - Returns banner URL of the user.
  * `created` - Returns accounts creation time. (Wednesday, January 1, 2025 08:30 PM)
  * `timestamp` - Returns accounts age in `X days, Y hours, Z minutes` format.
  * `ms` - Returns accounts creation time in miliseconds. (1735763400000)
  * `lastmessagechannelid` - Returns users last messages channel ID.
  * `lastmessageid` - Returns users last messages ID.

## Example

#### Using $user

How to show user account creation date

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $user[;created]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Wednesday, January 1, 2025 08:30 PM
    </discord-message>
</discord-messages>

::: warning Note
The option `tag` and `discrim` is deprecated because Discord switched to usernames. The option `tag` will return only username and option `discrim` 0 as of the username update. This still works on bots.
:::

##### Related functions: [$nickname](../Member/nickname.md)

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="account" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" /> <Badge type="tip" text="created" vertical="middle" />