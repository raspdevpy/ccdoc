# `$setBotActivity` <Badge type="danger" text="Premium ONLY!" vertical="middle" />

Set your bot's activity status (the text displayed under the bot's name).

## Usage

```bash
$setBotActivity[activity type;activity text]
```

**Parameters:**

*   `activity type`:  The type of activity.  Valid options are: `playing`, `streaming`, `listening`, `watching`, and `competing`.
*   `activity text`: The text to display as the bot's activity.

## Examples

**Example:** Sets the bot's activity to "Listening to The Cosmos".

```bash
$setBotActivity[listening;The Cosmos]
```

![](https://i.imgur.com/KyYqUGU.png)