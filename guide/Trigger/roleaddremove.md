# Role Given/Taken 

This trigger runs when someone gets or loses a role.


## Role given
Let's make a command, which will log everytime someone receives a Role1
1. Set the trigger to `add, Role1`
   
![](https://i.imgur.com/MevZIW3.png)

2. Set the code to: 
```php
$username received `$roleName` role
```
![](https://i.imgur.com/WezSkrK.png)

3. Set channel used to any channel you want the message to be sent to

![](https://i.imgur.com/sUgGUAc.png)

#### Output (When user get Role1):
![](https://i.imgur.com/0PYZ2pA.png)


## Role taken
Here's how to detect a specific role being taken from anybody.

1. Set Trigger Value: `remove, Role1`

![](https://i.imgur.com/dt0kSdJ.png)

2. Set code to: `$roleName` Role was removed from $mention

![](https://i.imgur.com/yqZAk54.png)

3. Set channel used to any channel you want the message to be sent to

![](https://i.imgur.com/sUgGUAc.png)

#### Output (Role1 get removed from user):
![](https://i.imgur.com/UbKVguz.png)

## Mutliple roles
You can make trigger on multiple roles by using this format: `Role1|Role2|Role3`
Like this example
1. Set Trigger Value: `add, Role1|Role2`

Which means trigger when user receive role `Role1` or `Role2`

![](https://i.imgur.com/3X3aFyJ.png)

2. Set code to: $username received `$roleName` Role

![](https://i.imgur.com/WezSkrK.png)

3. Set channel used to any channel you want the message to be sent to

![](https://i.imgur.com/sUgGUAc.png)

#### Output (When user get Role1 or Role2):
![](https://i.imgur.com/UpUZYbA.png)


## Summary
As you already know how the role trigger works, here is a summary of this trigger.

Role trigger will work with no input at all, but you can restrict the command to be executed meet some conditons:
| Syntax | Explanation |
| --- | --- |
|![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512115627925564/image.png) | Command will trigger regardless of what role has been given or taken |
| ![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512172456542298/image.png) | Detects when someone gets or loses "Member" role |
| ![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512354392866816/image.png) | Works if any role has been assigned |
| ![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512392464576602/image.png) | Activates when someone loses any role |
| ![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512279751036989/image.png) | Triggers when some gets role with 1013004735193808988 ID |
| ![](https://cdn.discordapp.com/attachments/1100128432395927765/1100512476895920288/image.png) | Fires off when someone loses "Admin" role |

### Role input
To specify a role you can either use an ID or it's name.
But be aware, all role names are case sensitive, so a if a command doesn't trigger, check the capitalization!

### Multiple roles
You can make your command trigger on any provided roles by putting role names/ids separated by "|".

For example `Admin|Moderator`, will take effect either on Admin or Moderator role.
