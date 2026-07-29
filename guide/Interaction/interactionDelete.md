# $interactionDelete

Deletes an interaction reply previously sent using `$interactionReply`.

#### Usage: `$interactionDelete[message ID (optional, defaults to the previous interaction reply)]`

<br/>

**Explanation:**

This function allows you to remove an interaction reply. If you don't specify a message ID, it will delete the most recent interaction reply sent within the command.

**Parameters:**

*   `message ID` (Optional): The ID of the message you want to delete. If left blank, it defaults to deleting the last interaction reply sent by the bot in that command execution.

**Example:**

To delete the previous interaction reply:

```
$interactionDelete
```

To delete a specific interaction reply by its ID:

```
$interactionDelete[123456789012345678]
```

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="interaction" vertical="middle" /> <Badge type="tip" text="delete" vertical="middle" /> <Badge type="tip" text="ephemeral" vertical="middle" /> <Badge type="tip" text="reply" vertical="middle" />