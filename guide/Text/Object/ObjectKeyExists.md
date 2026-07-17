# $ObjectKeyExists

Checks if given key is present in the object. Returns `true` or `false`.

## Usage

```bash
$ObjectKeyExists[Key;...]
```
1. **Key(s)** - Key to check it's existence. You can put as many nested keys as needed.

## Example

#### Using $ObjectKeyExists

How to check if `name` key exists

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $objectSet[name;Mido]
        $ObjectKeyExists[name]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        true
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $objectSet[username;mido]
        $ObjectKeyExists[name]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        false
    </discord-message>
</discord-messages>

##### Related functions: [$ObjectKeys](./ObjectKeys.md) [$ObjectCreate](./ObjectCreate.md) [$ObjectSet](./ObjectSet.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Object" vertical="middle" /> <Badge type="tip" text="Key" vertical="middle" />