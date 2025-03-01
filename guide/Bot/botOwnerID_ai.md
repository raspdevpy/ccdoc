# $botOwnerID

Retrieves the ID(s) of the bot owner(s).

This function returns the Discord ID of the user(s) who own or manage the bot.  If the bot is part of a team, it will return the IDs of all team members who are considered owners.

## Usage

```bash
$botOwnerID
```

Returns a single ID if there's only one owner, or a comma-separated list of IDs if there are multiple owners (e.g., a team).

```bash
$botOwnerID[separator]
```

Returns a list of IDs separated by the specified `separator`.

## Parameters

*   `separator` (Optional): A string used to separate the owner IDs when there are multiple owners.  If omitted, IDs will be separated by commas.

## Examples

**Example 1: Get the bot owner ID (single owner):**

If the bot has a single owner, this will return their ID.

```bash
$botOwnerID
```

**Example 2: Get the bot owner IDs (team) with a custom separator:**

If the bot belongs to a team, this will return the IDs of all team members separated by a pipe (|) character.

```bash
$botOwnerID[|]
```

**Example 3: Get the bot owner IDs (team) with the default comma separator:**

```bash
$botOwnerID
```

This will return the owner IDs separated by commas (e.g., `1234567890,9876543210`).