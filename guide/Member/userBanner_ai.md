# $userBanner

Returns the banner URL of a user.

## Usage

```bash
$userBanner[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of a user you want to return banner URL from. If no banner is found, returns `undefined`.

## Example

#### Banner is available

How is the banner URL displayed when sent with text and without text

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec With text: $userBanner
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        With text: <a href="https://cdn.discordapp.com/banners/287135364127129601/a_0c1e74ef99e35d10f868bd839066e022.png">
        https://cdn.discordapp.com/banners/287135364127129601/a_0c1e74ef99e35d10f868bd839066e022.png
        </a><br>
        <img src="https://cdn.discordapp.com/banners/287135364127129601/a_0c1e74ef99e35d10f868bd839066e022.png" alt="User Banner" style="vertical-align: text-bottom;" />
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userBanner
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        <img src="https://cdn.discordapp.com/banners/287135364127129601/a_0c1e74ef99e35d10f868bd839066e022.png" alt="User Banner" style="vertical-align: text-bottom;" />
    </discord-message>
</discord-messages>

#### Banner is not available

What shows when user does not have banner

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userBanner
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        undefined
    </discord-message>
</discord-messages>

::: tip Note
You can send the image as an attachment, so no link will be displayed. For this, you can use function [$attachment](../Text/Embed/attachment.md).
To display the avatar URL as plain text, either enclose the function in backticks (`` `$authorAvatar` ``) or angle brackets (`<$authorAvatar>`).
:::

##### Related functions: [$attachment](../Text/Embed/attachment.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="Image" vertical="middle"/> <Badge type="tip" text="Banner" vertical="middle"/> <Badge type="tip" text="Attachment" vertical="middle"/>