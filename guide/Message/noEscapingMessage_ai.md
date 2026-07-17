# `$noEscapingMessage` <Badge type="danger" text="DANGER WARNING!!" vertical="middle" />

This function behaves similarly to `$message`, but it **does not escape special characters**. This means characters like backticks (`) or newlines will be interpreted literally and won't be replaced with their escaped counterparts.

#### Usage: `$noEscapingMessage`

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `` `$` $noEscapingMessage `` `
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        `` `$` `` `
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `` `$` `` `
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        `` `#CHAR#` `` `
	</discord-message>
</discord-messages>

::: danger READ CAREFULLY BEFORE USING!

**ONLY use this function if you understand the implications and are comfortable handling potentially unsafe characters.**  Using `$noEscapingMessage` carelessly can lead to command errors, unexpected behavior, or even security vulnerabilities.  Always sanitize your inputs and be aware of the context in which this function is being used.
:::

::: tip

For most use cases, it's recommended to use [$message](../Message/message.md) to ensure proper character escaping and prevent unexpected issues.
:::

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" />
###### Tags: <Badge type="tip" text="Replace" vertical="middle" /> <Badge type="tip" text="danger" vertical="middle" /> <Badge type="tip" text="un-escaped" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />