# $selectMenu
Creates a Menu with options.

#### Usage: `$selectMenu[{menu structure]` works only for one option

#### Menu Structure
to construct a menu inside $selectMenu, it needs to follow this structure
```
{id=menu id}
{placeholder/ph=A placeholder for the menu}
{min=minimum options to be selected (i.e 1)}
{max=maximum options to be selected (i.e 5)}
{type=the menu type (i.e text/user/role/mention/channel)}


// Each option can be structured like this
{option=Option name}
{value=option id}
{desc=description of the option (optional)}
{emoji=an emoji of the option (optional)}

```
* `type` the menu type, can be `text` (default), `user` (to select a user), `role` (role select), `mention` (role or user select), `channel` (channel select) 
* `id` the id of menu must be unique on multiple menus
* `placeholder`
* `min` minimum to select (optional)
* `max` maximum to select (optional)
* `option` label of option
* `desc` description of option
* `value` id of option ,which [$eventSelected](./eventSelected.md) returns when the user selects the option
* `emoji` emoji for option (optional)

Info:
* You can have up to 5 menu in a message
* You can add maximal 20 options for each menu

## Examples
### Sending a menu with some options with $selectMenu
```
$selectMenu[
    {id=my_menu}
    {ph=Select the option}
    {type=text}
    {min=1}
    {max=2}

    {option=Option 1}
    {value=option_1}

    {option=Option 2}
    {value=option_2}

    {option=Option 3}
    {value=option_3}
]
```
![](https://i.imgur.com/pSIYauj.png)

### Sending a menu with some options and selected some of them
```
$selectMenu[
    {id=my_menu}
    {ph=Select the option}
    {type=text}
    {min=1}
    {max=2}

    {option=Option 1}
    {value=option_1}

    {option=Option 2}
    {value=option_2}

    {option=Option 3}
    {value=option_3}

    {selected=option_1}
    {selected=option_3}
]
```
![](https://i.imgur.com/gAe2sP0.png)


### Sending a menu to select user with $selectMenu
```
$selectMenu[
    {id=my_menu}
    {ph=Select the user}
    {type=user}
    {min=1}
    {max=2}
]
```
![](https://i.imgur.com/TuXQ5nN.png)

### Sending a menu to select user with $sendMessage
```
$sendMessage[
    {menu:
        {id=my_menu}
        {ph=Select the user}
        {type=user}
        {min=1}
        {max=2}    
    }
]
```
![](https://i.imgur.com/EXOYY1k.png)

### Sending a menu with selected user
```
$selectMenu[
    {id=my_menu}
    {ph=Select the user}
    {type=user}
    {min=1}
    {max=2}
    {selected_user=$userID}
]
```
![](https://i.imgur.com/UmFu9Of.png)

### Sending a menu with selected role
```
$selectMenu[
    {id=my_menu}
    {ph=Select the role}
    {type=role}
    {min=1}
    {max=2}
    {selected_role=$roleID[Test1]}
]
```
![](https://i.imgur.com/XldvSKC.png)

### Sending a menu with selected channel
```
$selectMenu[
    {id=my_menu}
    {ph=Select the channel}
    {type=channel}
    {min=1}
    {max=2}
    {selected_channel=$channelID}
]
```
![](https://i.imgur.com/gNDtTWP.png)

### Sending a menu with selected mentionable (user / role)
```
$selectMenu[
    {id=my_menu}
    {ph=Select user or role}
    {type=mention}
    {min=1}
    {max=2}
    {selected_role=$roleID[Test1]}
    {selected_user=$userID}
]
```
![](https://i.imgur.com/ZkamUGb.png)

::: tip {key=value} what is this for a syntax?
This syntax is called curl args.It is really similar to curl message.Especially new Functions support it ,you can use !!func `function name` to check if it supports curl arguments.
 [Learn more](../guide/curl.md)
:::

::: tip Do you want to add a menu inside a Function as a parameter, like `$sendMessage[text]`?

Use: 
```
{menu:
{id=id}
{placeholder=Pls select your answer!}
{min=1}
{max=2}
{option=Option one }
{desc=txt for one}
{value=one}
{emoji=$customEmoji[accept]}
}
```
:::

::: danger Please be aware!!
If you add any `:` in this function it will error! Check out [this](../../Other/syntax.md)

Link escapes are needed, use `\` to escape characters. Read [me](../../Other/syntax.md) to see more
:::

::: tip
Using the menu as trigger check here to [learn more](../../Trigger/menu.md).
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="selectMenu" vertical="middle" /> <Badge type="tip" text="component" vertical="middle" /> 