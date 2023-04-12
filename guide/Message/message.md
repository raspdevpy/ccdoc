# $message 
Returns the user's message, with arguments

If this function is called on a slash command, it will contain the value of either given option index or all the option values

## Usage: `$message or $message[number]`

### Example:
User Text: !cmd Hello World, How are you?

> $message will be replaced with `Hello World, How are you?`\
> $message[1] will be `Hello`\
> $message[2] will be `World`\
> $message[2+] will be `World, How are you?`

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="message" vertical="middle" /> <Badge type="tip" text="arguments" vertical="middle" /> <Badge type="tip" text="Argument Handling" vertical="middle" />