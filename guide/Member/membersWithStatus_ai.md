# $membersWithStatus

Returns a list of member IDs who have specified status within the server separated by comma.

## Usage

```bash
$membersWithStatus[Status1;Status2;...]
```
1. **Status N** - You can add multiple statuses. Can be `online`, `idle`, `dnd` (Do Not Disturb), `offline` (Includes invisible users), `streaming` (only valid for activities), `mobile` (only valid for platforms), `desktop` (only valid for platforms), `web` (only valid for platforms)

## Example

#### Single status in $membersWithStatus

How to use $membersWithStatus with one status specified

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $membersWithStatus[online]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789123456789,987654321987654321
    </discord-message>
</discord-messages>

#### Multiple statuses in $membersWithStatus

How to use $membersWithStatus with multiple statuses specified

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $membersWithStatus[online;idle]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789123456789,987654321987654321,765432198765432198
    </discord-message>
</discord-messages>

::: danger Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$status](../Member/status.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="search" vertical="middle"/> <Badge type="tip" text="find" vertical="middle"/> <Badge type="tip" text="members" vertical="middle"/> <Badge type="tip" text="status" vertical="middle"/>
