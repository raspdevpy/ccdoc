# $cacheMember

This function caches a member in the bot's memory. This is useful for functions like `$usersWithRole` that rely on having members already cached, especially if you're using them frequently *without* cooldowns.

**Think of it this way:** Caching a member makes them instantly recognizable to the bot, preventing issues with functions that need to quickly access their information.

**Note:** Functions like `$toggleRoles` and `$giveRoles` don't require you to manually cache members, as they handle member retrieval internally.

#### Usage: `$cacheMember[userID (optional)]`

*   **`userID (optional)`:**  The ID of the user you want to cache. If omitted, the function will attempt to cache the user who triggered the command.

#### Example:

`$cacheMember[123456789012345678]` - Caches the user with the ID 123456789012345678.

`$cacheMember` - Caches the user who executed the command.

::: tip
**Automatic Caching:** When a user executes a command, they are automatically cached. You typically only need to use `$cacheMember` if you're dealing with users who haven't recently interacted with the bot or if you need to ensure a user is cached *before* a specific function is called.
:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Cache" vertical="middle" /> <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="User" vertical="middle" />