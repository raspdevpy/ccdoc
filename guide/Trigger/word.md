# Word Trigger
Word trigger is used to detect sent messages.

![Word example](https://cdn.discordapp.com/attachments/957286111250624552/1100474610660679730/image.png)
<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        !ping
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        pong!
    </discord-message>
</discord-messages>

## Syntax
To use a word command, you have to specify a certain phrase that would trigger the command.
There's a couple ways of setting what 
| Name | Syntax | Example | Explanation |
| - | - | - | - |
| Word | `word` | `!ping` | Triggers on a message starting with !ping |
| Multiple words | `word\|word...` | `!ban\|!unfriend\|!gulag` | Fires off on !ban, !unfriend or !gulag |
| Case insensitive | `word\|i` | `apple\|i` | Matches with apple and any case variations like ApPLe |
| Regex | `/RegExp/` | `/<@&\d{18,}>/` | Detects a user mention anywhere in a message |
| Any message* | `%all%` | `%all%` | Triggers on **ANY** message |

::: tip One word only!
In word trigger (besides Regex) you are not allowed to put more than one word. All other words are interpreted as parameters, and cannot overlap with the trigger.
:::

::: danger Any message*
Using `%all%` will result in a slight spam of cooldown messages, and might occasionally override your other commands.

We strongly advise you to set the `Run only in` dropdown menu to specific channel(s).

To get rid of the cooldown messages completely, you can either set a channel slowmode, or get yourself a [premium bot](https://ccommandbot.com/perks).

:::
## User input
An important feature of word trigger are parameters. Parameters are data provided as a user when sending the message.

Let's say we had a `?hug` command, used to express your feelings towards other users. In that case we would want to be able to our victim from message.
Parameters are all words, but the trigger.
```
?hug [parameter1] [parameter2]...
```

Parameters can be retrived using the [$message](../Message/message.md) function.
So to hug a person pinged right after the keyword we need to use the following code:

![?hug trigger](https://cdn.discordapp.com/attachments/957286111250624552/1100485509584781342/image.png)
![?hug code](https://i.imgur.com/FCfSQVr.png)
<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        ?hug <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-mention type=user highlight=true>Member</discord-mention> hugs <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
</discord-messages>

## Continue reading
Here are some pages that might come in handy if you still have some doubts about the word trigger:
* [!report](../Tutorials/3.report.md) - word command tutorial
* [$message](../Message/message.md) - loading parameters
* [$msg](../Message/msg.md) - to load info about the message

<!-- Section below will be moved to a separate tutorial -->
<!-- ## Introduction
This trigger, fires when user send a certain message like `?profile`

## Example: Hello Command
In this command, we want bot to greet the user when he says: ?hello

1. create a new trigger, and set the trigger to be `?hello`
![](https://i.imgur.com/oSeYLNr.png)

2. set the code to be simple message like 'Hello $mention'
![](https://i.imgur.com/mVWBK9C.png)

Test it out in your server:
![](https://i.imgur.com/EvEQsIq.png)

Congratulations for making your first word command -->

<!-- ## Case insensitivity
The previously created command `?hello` has an issue though, if user typed `?Hello` it won't work like this.

So what to do? add `|i` to the command like this:

![](https://i.imgur.com/uu2phTA.png)

Let's test:
![](https://i.imgur.com/Qr03TMJ.png)

It works! -->

<!-- ## User Inputs
Now, let's make another command `?hug @user`, this command should give a hug to another user.

let's create a new command and set the trigger settings as below:\
![](https://i.imgur.com/iK8yRXP.png)

as for code, let's make it simple response like: `$mention hugs someone`:\
![](https://i.imgur.com/GGFKqVR.png)

here is the result:
![](https://i.imgur.com/BK8qolm.png)

but how we can take the mentioned user and replace `someone` with `@user`?

you can do that through `$message` function, this function return you any word the user for example:\
if user sent: ?cmd This bot is amazing!
> $message[1] will be replaced with `this`\
$message[2] will be replaced with `bot`\
$message[3] will be replaced with `is`\
$message[4] will be replaced with `amazing!`

and so on, so for command `?hug @user`
to get the `@user` part we will use $message[1]

so code will be:
![](https://i.imgur.com/FCfSQVr.png)


let's test it out:
![](https://i.imgur.com/SXdOdM0.png)

Yay! -->

<!-- Section below covered with trigger|trigger -->
<!-- ## Triggering on multiple words
sometimes we want the bot to trigger in multiple words, let's say: ?hug, ?abrazo, ?étreinte 

how we will do that? we can do that through well known regex format:
```regex
/^(prefix)(Word 1|Word 2|Word 3)\b/
```

Like:
```
/^(\?)(hug|abrazo|étreinte)\b/
```
Note: we used `\?` instead of `?`, because `?` has special meaning in regex format, so we need to tell him use it as plain character through putting `\` before it

Trigger will look like this:
![](https://i.imgur.com/pYGRD8x.png)

When you use regex format, $message[1] will be equal to the command like `?hug` not the 2nd word, so we will need to adjust the function from $message[1] to $message[2]
like this:
![](https://i.imgur.com/VG1hBgB.png)

let's test it out:
![](https://i.imgur.com/RISSily.png)

Works as expected! -->


<!-- Will be moved to tutorials -->
<!-- ## Example: Report Command
let's assume we want to make a report command, where user can report other with a reason like: `?report @user <reason>`

so trigger setting will be like this:
![](https://i.imgur.com/4cGQdgN.png)

as for code, we will use `$message[1]` to get `@user`
and `$message[2]` to get `<reason>`

like this:
![](https://i.imgur.com/i45qJkX.png)

let's try it out:
![](https://i.imgur.com/sMolPyQ.png)

Oh, it didn't work as expected, why is that?
simply because $message[2] will get us the 2nd word, which indeed `he's`, so how we can get the rest of the phrase

you can do so through `$message[2+]`, which means get 2nd word and what after it, so code after adjusting:
![](https://i.imgur.com/gmoZ074.png)

let's try it out:
![](https://i.imgur.com/KZBeAVT.png)

Yay! works well. -->