# $messageSlice

Extracts a portion of the message arguments, from a specified start position to an optional end position.

#### Usage: `$messageSlice[from;to (optional)]`

*   `from`: The starting index (1-based) of the argument you want to extract.
*   `to`: (Optional) The ending index (1-based) of the argument you want to extract. If omitted, it slices from `from` to the end of the message.

<br/>

**Example:**

Let's say the message sent is: `!!exec a b c d e`

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageSlice[1]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		b c d e
	</discord-message>
</discord-messages>
```

In this example, `$messageSlice[1]` extracts arguments from index 1 to the end, resulting in `b c d e`.  Remember that arguments are separated by spaces, and the command itself (`!!exec` in this case) is not included.

<br/>

**Another Example:**

Using the same message: `!!exec a b c d e`

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageSlice[1;2]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		b c
	</discord-message>
</discord-messages>
```

Here, `$messageSlice[1;2]` extracts arguments from index 1 to index 2, resulting in `b c`.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Slice" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" />