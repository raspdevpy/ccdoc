# $getCommandOption

Retrieves the value of a specific option from a slash command.

#### Usage: `$getCommandOption[type;Option Name]`

## Option Types

This function requires you to specify the data type of the option you're trying to retrieve.  Here's a list of valid option types:

*   `string`:  For text-based input.
*   `number`:  For numerical input (integers or decimals).
*   `boolean`: For true/false values.
*   `channel`: For channel mentions/IDs.
*   `role`: For role mentions/IDs.
*   `mentionable`: For user or role mentions/IDs.
*   `user`: For user mentions/IDs.

<br/>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="slash" vertical="middle" /> <Badge type="tip" text="option" vertical="middle" />