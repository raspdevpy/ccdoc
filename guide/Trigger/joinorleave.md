# On Join/Leave

This trigger type will trigger when a user joins or leaves the server depending on your configuration.

::: warning Custom Bots
Custom bots using Tier 3+ are required to have the presence intent enabled for this trigger to work.
:::

## Example

Select when to trigger, and choose a channel where this command will be executed.

![](/images/triggers/join-leave/0.png)

Enter code:

```php
Hello $displayName! Welcome to our server.
```

## Testing

Wait for a user to join and see if it worked!

<DiscordMessages>
    <DiscordMessage :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Hello Member! Welcome to our server.
    </DiscordMessage>
</DiscordMessages>

::: tip Test Command
For member joins/leaves you can use `!!emit` command to trigger the On Join/Leave trigger.
:::

<DiscordMessages>
    <DiscordMessage :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!emit uadd
    </DiscordMessage>
    <DiscordMessage :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Hello Member! Welcome to our server.
    </DiscordMessage>
</DiscordMessages>
