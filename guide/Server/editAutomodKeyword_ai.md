
Modify an AutoMod rule of type "keywords" in the server. This function allows you to modify various aspects of an existing keyword AutoMod rule, such as adding or removing keywords, regex expressions, actions, and exemptions.

## Usage

```bash
$editAutomodKeyword[
	{id=Rule ID}
	{name=Rule name}
	{keyword=add keyword to trigger on}
	{remove_keyword=keyword to remove}
	{allow_keyword=add exempt keyword}
	{remove_allow_keyword=remove exempt keyword}
	{regex=add regex expression}
	{remove_regex=remove regex expression}
	{action=
		{type=block}
		{message=block message appear for user}
	}
	{action=
		{type=alert}
		{channel=channel to alert for}
	}
	{action=
		{type=timeout}
		{duration=timeout duration of user i.e 10m}
	}
	{remove_action=action type like block}
	{exempt_role=add Exempt role}
	{remove_exempt_role=remove Exempt role}
	{exempt_channel=add Exempt channel}
	{remove_exempt_channel=remove Exempt channel}
	{disabled=yes/no}
]
```

### Parameters:

*   **`id`**: The ID of the AutoMod rule you want to modify. This is *required*.
*   **`name`**:  (Optional) A new name for the rule.
*   **`keyword`**: (Optional) A keyword to add to the trigger list.  The bot needs the  `manageserver` permission.
*   **`remove_keyword`**: (Optional) A keyword to remove from the trigger list.  The bot needs the `manageserver` permission.
*   **`allow_keyword`**: (Optional) A keyword that will be exempt from triggering the rule. The bot needs the `manageserver` permission.
*   **`remove_allow_keyword`**: (Optional) A keyword to remove from the exemption list. The bot needs the `manageserver` permission.
*   **`regex`**: (Optional) A regular expression to add to the rule. The bot needs the `manageserver` permission.
*   **`remove_regex`**: (Optional) A regular expression to remove from the rule. The bot needs the `manageserver` permission.
*   **`action`**: (Optional) Defines an action to take when the rule is triggered. Can be one of the following types:
    *   **`type=block`**: Blocks the message.  `manageserver` permission needed.
    *   **`message`**: (Required if `type=block`) The message to display to the user when their message is blocked.
    *   **`type=alert`**: Sends an alert to a specified channel. `manageserver` permission needed.
    *   **`channel`**: (Required if `type=alert`) The channel ID to send the alert to.
    *   **`type=timeout`**: Times out the user. `manageserver` permission needed.
    *   **`duration`**: (Required if `type=timeout`) The timeout duration (e.g., `10m`, `1h`, `1d`).
*   **`remove_action`**: (Optional) Removes a specific action from the rule.  Specify the `type` of action to remove (e.g., `block`, `alert`, `timeout`). Requires `manageserver` permission.
*   **`exempt_role`**: (Optional)  A role ID that will be exempt from the rule. The bot needs the `manageserver` permission.
*   **`remove_exempt_role`**: (Optional) A role ID to remove from the exemption list. The bot needs the `manageserver` permission.
*   **`exempt_channel`**: (Optional) A channel ID that will be exempt from the rule. The bot needs the `manageserver` permission.
*   **`remove_exempt_channel`**: (Optional) A channel ID to remove from the exemption list. The bot needs the `manageserver` permission.
*   **`disabled`**: (Optional) Whether the rule is disabled.  Set to `yes` to disable, or `no` to enable.

### Notes:
*   The following inputs can be repeated:

    *   `keyword`
    *   `remove_keyword`
    *   `allow_keyword`
    *   `remove_allow_keyword`
    *   `regex`
    *   `remove_regex`
    *   `exempt_role`
    *   `remove_exempt_role`
    *   `exempt_channel`
    *   `remove_exempt_channel`
    *   `action`
    *   `remove_action`

### Example:

```bash
$editAutomodKeyword[
	{id=1234567}
	{name=Block Fatty Words Improved}
	{keyword=fat2}
	{keyword=obese2}
	{disabled=no}
]
```
