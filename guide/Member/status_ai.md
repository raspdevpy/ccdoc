# $status

<Badge type="warning" text="Required Tier 3+" vertical="middle" /><br>

Returns the status of a user. Can be `online`, `offline`, `idle` or `dnd`.

## Usage

```bash
$status[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user to return the status from.

## Example

#### Using $status

How to use $status

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $status
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        online
    </discord-message>
</discord-messages>

::: danger Important Note
This function requires the Presence Intent to be enabled. You can change that in Discord Developer Portal under your Bot settings.
:::

##### Related functions: [$membersWithStatus](../Member/membersWithStatus.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="status" vertical="middle" /> <Badge type="tip" text="member status" vertical="middle" /> <Badge type="tip" text="online" vertical="middle" /> <Badge type="tip" text="offline" vertical="middle" /> <Badge type="tip" text="dnd" vertical="middle" />