# Role Given/Taken 

## Introduction
This trigger runs when someone get a role, or role removd from him depends on the settings

## Example 1: Trigger On Member Getting A Role
1. Set Trigger Value: `add, Role1`\
Which means trigger when user receive role `Role1`
![](https://i.imgur.com/MevZIW3.png)

2. Set code to: $username received `$roleName` Role
![](https://i.imgur.com/WezSkrK.png)

3. Set channel used to any channel you want the message to be sent to
![](https://i.imgur.com/sUgGUAc.png)

Output (When user get Role1):
![](https://i.imgur.com/0PYZ2pA.png)


## Example 2: Trigger On Member's Roles Removed
1. Set Trigger Value: `remove, Role1`\
Which means trigger when role `Role1` removed from a user
![](https://i.imgur.com/dt0kSdJ.png)

2. Set code to: `$roleName` Role was removed from $mention
![](https://i.imgur.com/yqZAk54.png)

3. Set channel used to any channel you want the message to be sent to
![](https://i.imgur.com/sUgGUAc.png)

Output (Role1 get removed from user):
![](https://i.imgur.com/UbKVguz.png)

## Example 3: Trigger On Multiple Roles
You can make trigger on multiple roles by using this format: `Role1|Role2|Role3`
Like this example
1. Set Trigger Value: `add, Role1|Role2`\
Which means trigger when user receive role `Role1` or `Role2`
![](https://i.imgur.com/3X3aFyJ.png)

2. Set code to: $username received `$roleName` Role
![](https://i.imgur.com/WezSkrK.png)

3. Set channel used to any channel you want the message to be sent to
![](https://i.imgur.com/sUgGUAc.png)

Output (When user get Role1 or Role2):
![](https://i.imgur.com/UpUZYbA.png)

::: warning Warning
All role names are caSe seNsiTiVe, so a if a command doesn't triggers, check the capitalization!
:::

