# Word Trigger
Word commands, also known as message commands are executed when the bot receives a text message.

## Basic word command
Let's create a word command with a trigger `!ping`, this means the command will be triggered whenever someone sends a message starting with `!ping`.
In the code part we will type `pong!`, so the bot will respond with it.

![Word example](https://cdn.discordapp.com/attachments/1100128432395927765/1100813255418576966/pingcmd.png)

<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        !ping
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        pong!
    </discord-message>
</discord-messages>

## Using parameters
A crucial feature of the word type are parameters. They are data provided when executing the command.

Let's say we had a `?hug` command, which users can use to hug other users. 
In that case we would want users to select a user by mentioning him.

#### Usage
The mention will be the `parameter 1`, because users will mention their victim right after the ?hug keyword.
<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        ?hug <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
</discord-messages>

#### Setup
Parameters can be retrived using the [$message](../Message/message.md) function, we will use it to get the user mention:

<!-- ![?hug trigger](https://cdn.discordapp.com/attachments/957286111250624552/1100485509584781342/image.png) -->
![?hug code](https://cdn.discordapp.com/attachments/1100128432395927765/1100816608198402049/hugcmd.png)

#### Result
Here's how the final command should look like:
<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        ?hug <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-mention type=user highlight=true>Member</discord-mention> hugs <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
</discord-messages>

## Case insensitivity
Sometimes we don't want to bother users with using correct capitalisation.

#### How does it work?
Case sensivity can be disabled by adding `|i` after the trigger. In our case `?hello` will be changed to `?hello|i`

#### Example
Here's how to make a case insensitive `?hello` command, that will respond with a simple `Hello @user` message.

![?hello command](https://cdn.discordapp.com/attachments/1100128432395927765/1100823468720795678/hello.png)

Let's test different variations:

<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        ?hello
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello <discord-mention type=user highlight=true>Member</discord-mention>!
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        ?HELLO
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello <discord-mention type=user highlight=true>Member</discord-mention>!
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        ?HeLLo
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello <discord-mention type=user highlight=true>Member</discord-mention>!
    </discord-message>
    
</discord-messages>

Works perfectly!

## Multiple words
Sometimes we want the bot to trigger on multiple words, by separating them with `|`

Let's say we want our [Hug command](#using-parameters) to trigger on: ?hug, ?abrazo, and ?étreinte.

#### How can we do that?
We can do that with the following trigger:
```bash
?hug|?abrazo|?étreinte
```

![](https://cdn.discordapp.com/attachments/1100128432395927765/1100827624978260059/hugcmd.png)

Let's test it out:

<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        ?hug <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-mention type=user highlight=true>Member</discord-mention> hugs <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        ?abrazo <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-mention type=user highlight=true>Member</discord-mention> hugs <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        ?étreinte <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-mention type=user highlight=true>Member</discord-mention> hugs <discord-mention type=user>fajfaj</discord-mention>
    </discord-message>
</discord-messages>

Works as expected!

## Regex match
The word trigger can also contain regex expressions for various dynamic triggers.

::: tip What's regex?
Don't worry if you don't know what it is. Regex is a pretty advanced topic, and is not necessary in most cases.

However if you want to learn more about regex, you can learn it from some internet guides [like this one](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285) and regex playgrounds [like this one](https://regex101.com).
:::

### Ping detector
Regex has thousands of use cases, but here we will discuss using regex to trigger on a mention anywhere in the message.

#### User mentions
Bots can only see mentions as a string like: `<@434342521997492224>`, or `<@!434342521997492224>`, so we have to design our expression to catch this form.

#### Trigger
Here is the expression which we are going to use:
* `?` - the previous character is optional
* `\d` - any number
* `{18,}` - the previous character has to appear 18 or more times

```regex
/<@!?\d{18,}>/
```
You need to add a forward slash before and after your expression, otherwise the bot will only reply when you literally send `<@!?\d{18,}>` in your message

![Ping detector](https://cdn.discordapp.com/attachments/957286111250624552/1100839560532983908/image.png)

Let's try sending some mentions:

<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        Hey <discord-mention type=user>fajfaj</discord-mention>! How is it going?
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You've pinged someone!
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        <discord-mention type=user>Mido</discord-mention>, have you found your chocolate yet?
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You've pinged someone!
    </discord-message>
</discord-messages>

It detects all of them!

## Any message
From time to time you may not now what the message content will be, you can make cc trigger to any message sent in a channel.

### How does it work?
It can be done using `%all%` trigger, it makes the command execute regardless of the content.

### Message complimenter
Let's make a command which will randomly compliment every sent message to a specific channel.

To randomize the output, we will use [$randomText](../Random/randomText.md) function, and to restrict the channels we will use the `Run only in` dropdown menu:

![Message complimenter](https://cdn.discordapp.com/attachments/957286111250624552/1100843662801379389/msgcompliment.png)

Let's see if we get any compliments:

<discord-messages>
    <discord-message author="Member" role-color="#ffcc9a">
        How is it going?
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Cool message!
    </discord-message>
    <discord-message author="Member" role-color="#ffcc9a">
        Does anyone here have a monkey as a pet?
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Wonderful punctuation!
    </discord-message>
</discord-messages>

Amazing, we've just got complimented by the bot automatically.

### 🎉 Congratulations
If you read all of the information above, you became a real word trigger master!

## Summary
As we got through all the examples, here's a summary of the word trigger:

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

### Continue reading
Here are some pages that might come in handy if you still have some doubts about the word trigger:
* [!report](../Tutorials/3.report.md) - word command tutorial
* [$message](../Message/message.md) - loading parameters
* [$msg](../Message/msg.md) - to load info about the message




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
