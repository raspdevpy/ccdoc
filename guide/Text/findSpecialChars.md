# $findSpecialChars

Takes all the non number/letter from given string and returns the alone

## Usage

```bash
$findSpecialChars[string]
```

## Example

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="$Me/mber?">
		!!exec $findSpecialChars[$username]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		$/?
	</discord-message>
</discord-messages>

::: tip Related functions
- [$findChars](../Text/findChars.md)
- [$findNumbers](../Text/findNumbers.md)
:::
