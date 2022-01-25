# Syntax
Read all about the syntax used by the bot!

::: danger Disclaimer!
The Syntax has been inspired from BDFD originally.

We are not affiliated with BDFD. But we're using a similar syntax
:::

## Syntax Explanation
Our bot uses functions, they are basically the coding blocks for your commands.

#### General Function Classification:
* value functions: Return a value
* Action Functions: Preform an action in your discord guild (like: creating a channel or sending a message)
* Database functions, Sets an variable or caches a member

#### Parameters
Since a guild has more than 1 member/channel/role/thread, some functions need data to be inputted. Like `$cacheMember[787695068306866198]`, needs an user ID to know which member to cache

* Every Function starts with a `$`
* After it the function name comes like `giveroles`
* If the Function needs parameters you open it with `[`
* Every Parameter gets separated with `;` 
* If the Function has an opening `[` it needs an closing one: `]`

So your result would be `$giveRoles[authorid;roleid]`

::: tip Function names are case insensitive
That's why $authorID and $authorid would return the same data!
:::

## Compare characters
`==` - Use this 2 signs to check if 2 values EXACTLY match each other.

`!=` - Use this 2 signs to check if 2 values do NOT match each other.

`>=` - Use this 2 signs to check if number string 1 greater is, or the same as number string 2

`<=` - Use this 2 signs to check if number string 1 is smaller, or the same as number string 2

`>` - Use this sign to check if number string 1 is greater then number string 2

`<` - Use this sign to check if number string 1 is smaller then number string 2


## Escaping Characters
Because our bot uses characters like: `[]` and `$` as "prefix's" for code blocks, you need to escape them when used in a text! 

Use a `\` (back slash) for that sort of stuff... Special characters are linked below

### Special Characters:
`[`, `]`, `;`, `:`, `$`, `>`, `<`, `=`, `{`, `}`


## Encoded Character Codes
```js
#RIGHT# =>> [
#LEFT# =>> ]
#SEMI# =>> ;
#COLON# =>> :
#CHAR# =>> $
#RIGHT_CLICK# =>> >
#LEFT_CLICK# =>> <
#EQUAL# =>> =
#RIGHT_BRACKET# =>> {
#LEFT_BRACKET# =>> }
```