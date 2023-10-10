# $editAutomodKeyword

modify automod from type keywords in the server

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

### Notes:
The following inputs can be repeated:
* {keyword}
* {remove_key}
* {allow_keyword}
* {remove_allow_keyword}
* {regex}
* {remove_regex}
* {exempt_role}
* {remove_exempt_role}
* {exempt_channel}
* {remove_exempt_channel}
* {action}
* {remove_action}

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