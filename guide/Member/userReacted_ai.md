# $userReacted

Checks if a user has reacted to a message with the given emoji. Returns `true` or `false`.

## Usage

```bash
$userReacted[channelID;messageID;userID;reaction]
```
1. **channelID** - (Optional) default value: `$channelID`. The ID of a channel you want to check reaction in.
2. **messageID** - (Optional) default value: `$messageID`. The ID of a message you want to check reaction on.
3. **userID** - (Optional) default value: `$authorID`. The ID of a user you want to check from if they reacted.
4. **reaction** - The emoji you want to check if user reacted with. For custom emojis, you can use their ID, which can be found when you send it into any channel with a backslash before it.

## Example

#### Using $userReacted

How to use $userReacted

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $wait[5s] $userReacted[;;;<img src="https://cdn.discordapp.com/emojis/1000917016724648007.webp?size=16" alt="DogSmile" style="vertical-align: text-bottom;" />]
        <DiscordReactions>
            <DiscordReaction name="DogSmile" image="https://cdn.discordapp.com/emojis/1000917016724648007.webp" :count="1" :active="true" />
        </DiscordReactions>
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        true
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$getMessageReactions](../Message/getMessageReactions.md) [$getReactionCount](../Message/getReactionCount.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="reaction" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" />