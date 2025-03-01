# $membersWithStatus

This function retrieves a comma-separated list of member IDs who have specified statuses within the server.  It's particularly useful for targeting actions or information to specific groups of online, idle, or DND members.

## Usage

```bash
$membersWithStatus[Status1;Status2;...]
```

**Parameters:**

*   `Status1;Status2;...`:  A semicolon-separated list of Discord member statuses you want to filter by. Valid status options include:

    *   `online`
    *   `idle`
    *   `dnd` (Do Not Disturb)
    *   `offline` (Includes invisible users)
    *   `streaming` (only valid for activities)
    *   `mobile` (only valid for platforms)
    *   `desktop` (only valid for platforms)
    *   `web` (only valid for platforms)

**Returns:**

A comma-separated string of member IDs that match the specified statuses.  If no members match the provided statuses, an empty string will be returned.

## Example

Let's find all members who are currently online:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $membersWithStatus[online]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    1xxxxxxxxxxxxxxxx2,3xxxxxxxxxxxx4
  </discord-message>
</discord-messages>

In this example, the command returns a list of IDs ( `1xxxxxxxxxxxxxxxx2,3xxxxxxxxxxxx4` ) representing the members currently with the "online" status.

**Combining Statuses:**

To retrieve members with multiple statuses, separate them with a semicolon. For example, to find members who are either online or idle:

```bash
$membersWithStatus[online;idle]
```