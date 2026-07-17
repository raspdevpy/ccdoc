# $randomText

Returns a random text from a list of provided texts. This function is useful for creating variety in your bot's responses.

#### Usage:

`$randomText[text1;text2;text3;...]`

*   **text1;text2;text3;...**:  A semicolon-separated list of texts. The function will randomly choose one of these texts to return.

<br/>

**Example:**

```
$randomText[Hello;Hi;Hey]
```

This example will randomly return either "Hello", "Hi", or "Hey".

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$randomText[I'm sad;I'm very happy]`
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I'm very happy
	</discord-message>
</discord-messages>

**Explanation:**

In this example, the command `!!exec $randomText[I'm sad;I'm very happy]` instructs the bot to execute the `$randomText` function with the options "I'm sad" and "I'm very happy".  The bot randomly selects one of these options and returns it, in this case, "I'm very happy".

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random text" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="return random text" vertical="middle" />