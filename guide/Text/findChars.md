# $findChars

Takes all the letters from given string and returns them alone.

## Usage

```bash
$findChars[string]
```

## Example

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="$Me/mber?">
		!!exec $findChars[$username]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

::: tip Related functions
- [$findSpecialChars](../Text/findSpecialChars.md)
- [$findNumbers](../Text/findNumbers.md)
:::
