# $getUserBadges

Returns the Discord badges from specified user. If none found, returns `none`. If found multiple, separated by `, `.

## Usage

```bash
$getUserBadges[userID]
```
1. **userID** - (Optional) default value: `$authorID`. Which user to return badges from.

## Example

#### Using $getUserBadges

How to return badges from command author

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $getUserBadges
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Active Developer
    </discord-message>
</discord-messages>

::: danger Warning
Not all badges are 100% guranteed.
:::

##### Related functions: [$userBanner](../Member/userBanner.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="badges" vertical="middle"/> <Badge type="tip" text="user" vertical="middle"/>