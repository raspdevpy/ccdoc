# Syntax
Read all about the syntax used by the bot!

::: tip Disclaimer!
The Syntax has been inspired from BDFD originally.

We are not affiliated with BDFD. But we're using a similar syntax
:::

## Syntax
In general the code only has 2 types:\
1- [Text](#what-is-text)\
2- [Function](#what-is-a-function)

## What is Text?
In the code anything is text except for [functions](#what-is-a-function)\
for example in this code:
```
Hello $username to our server
```

`Hello`: is text\
[`$username`](../Member/username.md): is a function\
`to our server` is text

## What is a function
Any function starts with `$` like [`$username`](../Member/username.md)\
In this code for example:
```
Hello $username to our server
```
[`$username`](../Member/username.md) is the only function in this code

### But what do functions do?
Each function in general can do one of the 3 things:
* Replace itself with a value
* Do an action
* Do an action and Replace itself with a value 

For example running this code:
```
Hello $username, welcome to our server!
```
you will find the bot sends:
```
Hello Mido, welcome to our server!
```

Which clearly shows that the [`$username`](../Member/username.md) function is `Replaced by value` type and this value will always be the username of the author

::: tip `Replaced by value` type is also called `return`\
Read the function descriptions in docs carefully.
If a function is replaced by value, it returns that value. 
E.g.:
[`$username`](../Member/username.md) ***Returns*** the name of the user that executed the command
If a function does an action, its description starts with a verb for that action.
E.g.:
[`$title`](../Embed/title.md) ***Adds*** a title to a message
:::

### Input
Some functions requires an input from you to behave differently and this is the format:
```
$function[Inputs]
```
Previously we used [`$username`](../Member/username.md) without inputs but why?\
As the [`$username`](../Member/username.md) documentation will tell you, that by default it will return the executor's name, but if you want to return someone else username you will need to do an input in this case\
Assume that we want to get Rake's name instead of Mido\
We will first need to get Rake's User ID, assume 1234, and input it to [`$username`](../Member/username.md):
```
Hello $username[1234]
```
Output
```
Hello Rake
```
### Multiple Inputs
Some functions need more than just 1 input like $channelSendMessage\
it asks for 2 different inputs (in order):
* Channel ID to send to
* Message Content

Assume that the channel id is `1234`, and content is `Hello $username`
To apply these inputs in the function, we will separate them by a semicolon `;`\
Like this:
```
$channelSendMessage[1234;Hello $username]
```
Output (in channel with ID 1234):
```
Hello Mido
```

Note: [`$channelSendMessage`](../Message/channelSendMessage.md) doesn't get replaced by a value, but only does an action (sending a message)

::: tip Function names are case insensitive
It means $authorID and $aUtHoRiD will work the same! 
:::

## Expressions
In some functions you might find it tells you:\
Provide an expression

In this case, please read about the [expressions](../CodeReferences/ref.expression.md) here

## Escaping Characters
There's some dangerous characters that are troublesome to work with
for example let's say you want to send [`$username`](../Member/username.md)
to be literally be sent like that and not be replaced to be the user name
For example code:
```
To get username use function: $username
```
You will find the output:
```
To get username use function: Mido
```
It clearly got replaced by user name, but what to do to tell the bot: treat this `$` as literal `$` not as function, here comes the escaping character technique, you will simply add `\` before that character like this:
```
To get username use function: \$username
```
Output will be:
```
To get username use function: $username
```

Some other dangerous characters
`[`, `]`, `;`, `:`, `>`, `<`, `=`, `{`, `}`


## Encoded Character Codes (Alternative of `\`)
```js
#RIGHT# =>> [
#LEFT# =>> ]
#SEMI# =>> ;
#COLON# =>> :
#DOLLAR# =>> $
#CHAR# =>> $
#RIGHT_CLICK# =>> >
#LEFT_CLICK# =>> <
#EQUAL# =>> =
#RIGHT_BRACKET# =>> {
#LEFT_BRACKET# =>> }
#NL# =>> New line 
#BR# =>> New line
#SP# =>> Space
#TAB# =>> Tab (few spaces)
#SLASH# =>> /
#BACKSLASH# =>> \
```
