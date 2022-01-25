# Word/Message

::: danger Please note:
The bot will only trigger commands, when it can see the channel, the command is used!

Make sure the bot has permissions to view the channel you use for the command. And make sure "Send Messages" is enabled!
:::

## Main Syntax
This syntax is unique to our bot! It is the most commonly used form in word triggers!

##### Exact Match
`!test` -> The bot will trigger when a message is EXACTLY the same as `!test`

##### Trigger with Arguments
`!test` -> The bot will trigger when a message starts with `!test` and the code includes `$message` or `$mentioned[]`

##### Trigger not Case Sensitive 
`!test|i` -> The bot will trigger when a message starts with `!tEst` 

*(The capitalization doesn't matter in the case!)*


## Argument Handling
Arguments are really helpful, when you want the executer of the command to put in extra data! 

::: danger
If you want to use arguments,your code must use $message[] or $mentioned 
:::

### Refering to arguments in codes
To get the data inputted as arguments, you use the function `$message`:
* `$message` -> to return all the arguments
* `$message[x]` -> to return a specific argument! (replace the `x` with a valid number!) 

Arguments are saved in an array, so `$message[1]` would output the first argument,`$message[2]` the second one, enz...

###### Arguments get splited on whitespace! 

So `!say hi hello` would get splitted at in between `hi` and `hello` 

The first argument would be `hi` in this case and the second `hello`.


## [REGEX](https://www.sitepoint.com/learn-regex/)
REGEX is a way to let a command trigger on multiple words/ triggers!

::: warning Warning
We highly suggest, you learn REGEX, if you're going to use it yourself!

Below are a couple of examples:
:::


###### Multiple command prefixes
`/^(!|>|\?|\.)help/gi` -> This will trigger when the 1 of the following messages is send:
```
!help
>help
?help
.help
```

###### Command Aliases
`/^(!help|!h|!info)/gi` -> This will trigger when the 1 of the following messages is send:
```
!help
!h
!info
```

###### Command Aliases
`/^(!|>|\?|\.)(help|h|info)/gi` -> This will trigger when the 1 of the following messages is send:

:::: code-group

::: code-group-item Prefix: !
```
!help
!h
!info
```
:::

::: code-group-item Prefix: >
```
>help
>h
>info
```
:::

::: code-group-item Prefix: ?
```
?help
?h
?info
```
:::

::: code-group-item Prefix: .
```
.help
.h
.info
```
:::

::::

## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!