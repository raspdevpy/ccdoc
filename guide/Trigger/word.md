# Word Trigger

## Introduction
This trigger, fires when user send a certain message like `?profile`

## Example: Hello Command
In this command, we want bot to greet the user when he says: ?hello

1. create a new trigger, and set the trigger to be `?hello`
![](https://i.imgur.com/oSeYLNr.png)

2. set the code to be simple message like 'Hello $mention'
![](https://i.imgur.com/mVWBK9C.png)

Test it out in your server:
![](https://i.imgur.com/EvEQsIq.png)

Congratulations for making your first word command

## Case insensitivity
The previously created command `?hello` has an issue though, if user typed `?Hello` it won't work like this.

So what to do? add `|i` to the command like this:

![](https://i.imgur.com/uu2phTA.png)

Let's test:
![](https://i.imgur.com/Qr03TMJ.png)

It works!

## User Inputs
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

Yay!

## Triggering on multiple words
sometimes we want the bot to trigger in multiple words, let's say: ?hug, ?abrazo, ?étreinte 

how we will do that? we can do that through well known regex format:
```regex
/^(prefix)(Word 1|Word 2|Word 3)\b/
```

Like:
```
/^(\?)(hug|abrazo|étreinte)\b/
```
Note: we used `\\?` instead of `?`, because `?` has special meaning in regex format, so we need to tell him use it as plain character through putting `\` before it

Trigger will look like this:
![](https://i.imgur.com/pYGRD8x.png)

When you use regex format, $message[1] will be equal to the command like `?hug` not the 2nd word, so we will need to adjust the function from $message[1] to $message[2]
like this:
![](https://i.imgur.com/VG1hBgB.png)

let's test it out:
![](https://i.imgur.com/RISSily.png)

Works as expected!

## Triggering On All Message
In some situation, you need to trigger on all kind of messages, like Counting Game Idea
To do that, you can set Trigger to `%all%`
![](https://i.imgur.com/YgYvhVw.png)

::: danger Note
If you used `%all%`, make sure to set `Run only in` to specific channels, to avoid going in cooldowns frequently.
:::

## Example: Report Command
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

Yay! works well.