# $createAutomodKeyword

Creates a new auto-moderation rule based on keywords within the server. This allows you to automatically take actions when specific words or phrases are used.

## Usage

```bash
$createAutomodKeyword[
  {name=Rule name}
  {keyword=Keyword to trigger on}
  {allow_keyword=Exempt this keyword from triggering}
  {regex=Regex expression to trigger on}
  {action=
    {type=block}
    {message=Block message displayed to the user}
  }
  {action=
    {type=alert}
    {channel=Channel ID to send an alert message to}
  }
  {action=
    {type=timeout}
    {duration=Timeout duration for the user (e.g., 10m, 1h, 1d)}
  }
  {exempt_role=Role ID to exempt from the rule}
  {exempt_channel=Channel ID to exempt from the rule}
  {disabled=yes/no (default: no)}
  {return_id=yes/no (default: no)}
]
```

### Parameters Explained

*   **`name`**: The name of the auto-moderation rule. This should be descriptive.
*   **`keyword`**: The keyword or phrase that will trigger the rule.  Up to 1000 keywords can be defined.
*   **`allow_keyword`**: Keywords that are whitelisted; if these appear, the rule will *not* trigger, even if another keyword matches.  Up to 100 allowed keywords can be defined.
*   **`regex`**: A regular expression to match. For advanced filtering. Up to 10 regex expressions can be defined.
*   **`action`**: Defines the action(s) to be taken when the rule is triggered.  Multiple actions can be specified.
    *   **`type`**: The type of action. Possible values:
        *   `block`: Blocks the message containing the triggering keyword.
        *   `alert`: Sends an alert message to a specified channel.
        *   `timeout`: Times out the user for a specified duration.
    *   **`message`**: (Only for `block` action) The message displayed to the user when their message is blocked.
    *   **`channel`**: (Only for `alert` action) The ID of the channel to send the alert message to.
    *   **`duration`**: (Only for `timeout` action) The duration of the timeout.  Examples: `10m` (10 minutes), `1h` (1 hour), `1d` (1 day).
*   **`exempt_role`**: The ID of a role that is exempt from this rule.  Users with this role will not be affected by the rule. Up to 20 exempt roles can be defined.
*   **`exempt_channel`**: The ID of a channel that is exempt from this rule.  Messages in this channel will not be checked by the rule. Up to 50 exempt channels can be defined.
*   **`disabled`**: Whether the rule is disabled or not. Defaults to `no` (enabled). Set to `yes` to disable the rule.
*   **`return_id`**: Whether to return the ID of the created rule. Defaults to `no`. Set to `yes` to return the rule ID.

### Notes:

*   The bot requires the **Manage Server** (`manageserver`) [permission](../CodeReferences/ref.permissions_list.md) to create automod rules.
*   The following inputs can be repeated:
    *   `{keyword}`: Up to 1000.
    *   `{allow_keyword}`: Up to 100.
    *   `{regex}`: Up to 10.
    *   `{exempt_role}`: Up to 20.
    *   `{exempt_channel}`: Up to 50.
    *   `{action}`: As many as you like (within reason).

### Example:

```bash
$createAutomodKeyword[
  {name=Block Fatty Words}
  {keyword=fat}
  {keyword=obese}
  {action=
    {type=block}
    {message=Hey! Stop fat-shaming.}
  }
  {action=
    {type=timeout}
    {duration=1h}
  }
]
```
