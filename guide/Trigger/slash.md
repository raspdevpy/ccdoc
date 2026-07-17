# Slash Command

# Introduction
triggers when a user uses a slash command. This needs to be a slash command from the bot.

## Creating a slash command
In this example we will create an `/avatar` command, that shows the user's avatar
![](https://i.imgur.com/MtHPQWd.png)

### Steps
1. Go to dashboard, your server page, click on Slash Command Builder
![](https://i.imgur.com/L2dnA5D.png)

2. Click `Create`
![](https://i.imgur.com/GlwHeER.png)

3. Fill the slash name and description
![](https://i.imgur.com/LL52VH2.png)

4. To add user option, to the slash, select from the option menu
![](https://i.imgur.com/q2BEFHo.png)

5. Select the User option (make sure background is blue)
![](https://i.imgur.com/O2W1v6N.png)

6. Fill the option name, description, remember this name, we will use it later
![](https://i.imgur.com/XHGMvnM.png)

7. Click `Deploy Command/Save`
![](https://i.imgur.com/PwJ8kLv.png)

8. Create a new custom command, select type to be `Slash Command` and select your slash command from the dropdown in `Trigger` 
![](https://i.imgur.com/YF6EfSY.png)

9. Set the code to be executed when the slash command is used

::: details Code
```
    $let[user_id;$getOption[user]]
    $interactionReply[
        {title:Avatar of $usertag[$user_id]}
        {image:$userAvatar[$user_id]}
    ]
```
:::

10. go to your server and use the command as follows:
![](https://i.imgur.com/XZTeNVO.png)


## Output 
![](https://i.imgur.com/MtHPQWd.png)


## Code Explanation
### Retrieving the option from user
When a user uses the command like in Step 10, we can retrieve the option through the [$getOption](../Interaction/getOption.md) function:
```
$getOption[option name]
```
In our example `option name` is `user` from step 6\
then the user id will be stored in a temporary variable named`user_id` using [$let](../Variables/let.md), this way we can recall it later in the code through `$user_id`:
```
    $let[user_id;$getOption[user]]
```

### Sending Message
Next, to send a message with [$interactionReply[message]](../Interaction/interactionReply.md)\
Here we will send an embed with a title and image using {title} and {image} [Curl Message Format](../CodeReferences/ref.message_curl_format.md):
```
$interactionReply[
    {title:Embed Title}
    {image:Embed Image}
]
```

1. In title we want to set it to: Avatar of Mido#1234\
To get the username `Mido#1234` we will use [$userTag[user id]](../Member/userTag.md), to specifiy the user we will use `$user_id`:
```
Avatar of $userTag[$user_id]
```

2. In Image to retrieve the user avatar, we will use [$userAvatar[user id]](../Member/userAvatar.md):
```
$userAvatar[$user_id]
```

Whole code:
```
    $let[user_id;$getOption[user]]
    $interactionReply[
        {title:Avatar of $usertag[$user_id]}
        {image:$userAvatar[$user_id]}
    ]
```


## Example 2: Sending Private Message
Let's modify the previous code, to make him reply in private to user instead like this:
![](https://i.imgur.com/SsFJHfv.png)

$interactionReply accept 2 inputs by default: message, ephemeral\
in the previous example we only used the first message, and 2nd input was by default `no`\
To send the message in private we have to set the 2nd input `ephemeral` to `yes`
![](https://i.imgur.com/I2ZuKB5.png)

That's it, Save and test it out

### Output
![](https://i.imgur.com/SsFJHfv.png)
