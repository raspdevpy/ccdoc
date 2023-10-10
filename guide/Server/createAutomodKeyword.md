# $createAutomodKeyword

creates a new automod from type keywords in the server

## Usage

```bash
$createAutomodKeyword[
	{name=Rule name}
	{keyword=keyword to trigger on}
	{allow_keyword=exempt this keyword from triggering}
	{regex=regex expression to trigger on}
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
	{exempt_role=Exempt role from the rule}
	{exempt_channel=Exempt channel from the rule}
	{disabled=yes/no (default no)}
	{return_id=yes/no (default no)}
]
```

### Notes:
The following inputs can be repeated:
* {keyword} up to 1000
* {allow_keyword} up to 100
* {regex} up to 10
* {exempt_role} up to 20
* {exempt_channel} up to 50

### Example:
```bash
$createAutomodKeyword[
	{name=Block Fatty Words}
	{keyword=fat}
	{keyword=obese}
	{action=
		{type=block}
		{message=Hey! stop fatting around.}
	}
	{action=
		{type=timeout}
		{duration=1h}
	}
]
```