# $authorAvatar

Returns the avatar (profile picture) URL of the user who executed the command.

## Usage

```bash
$authorAvatar[serverAvatar]
```
1. **serverAvatar** - (Optional) default value: `no`. Can be `yes` or `no`. Discord does have two types of avatars, global and per-server (custom avatar in each server). If no server avatar is set, the global avatar will be used.

## Examples

#### Sending avatar URL

How is the avatar URL displayed when sent with text and without text

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec With text: $authorAvatar
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        With text: <a href="https://cdn.discordapp.com/embed/avatars/0.png">
        https://cdn.discordapp.com/embed/avatars/0.png
        </a><br>
        <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="User Avatar" style="vertical-align: text-bottom;" />
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $authorAvatar
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="User Avatar" style="vertical-align: text-bottom;" />
    </discord-message>
</discord-messages>

::: tip Note
You can send the image as an attachment, so no link will be displayed. For this, you can use function [$attachment](../Text/Embed/attachment.md).
To display the avatar URL as plain text, either enclose the function in backticks (`` `$authorAvatar` ``) or angle brackets (`<$authorAvatar>`).
:::

##### Related functions: [$attachment](../Text/Embed/attachment.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="Image" vertical="middle"/> <Badge type="tip" text="Avatar" vertical="middle"/> <Badge type="tip" text="Attachment" vertical="middle"/> <Badge type="tip" text="profile picture" vertical="middle"/>