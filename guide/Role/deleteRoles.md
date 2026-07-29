# $deleteRoles

Deletes one or more roles from the server.

#### Usage:

`$deleteRoles[roleID1;roleID2;roleID3;...]`

**Parameters:**

*   `roleID1;roleID2;roleID3;...`: A semicolon-separated list of role IDs to delete.  You can specify multiple role IDs to delete several roles at once.

#### Example:

`$deleteRoles[879889890890890]`

This will delete the role with the ID `879889890890890`.

**Example with multiple roles:**

`$deleteRoles[879889890890890;987654321098765]`

This will delete the role with the ID `879889890890890` and the role with the ID `987654321098765`.

::: tip Related Functions

*   [$deleteChannels](../Channel/deleteChannels.md): Deletes one or more channels.
*   [$deleteThreads](../Threads/deleteThreads.md): Deletes one or more threads.

:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="delete" vertical="middle" /> <Badge type="tip" text="delete role" vertical="middle" /> <Badge type="tip" text="remove role" vertical="middle" />