# Server Boost Trigger

## Basic Information
This trigger will only trigger if someone boosted or removed the boost from your server

## Syntax
the trigger value should be `add/remove`

`add`: to trigger only if someone boosted\
`remove`: to trigger only if someone removed the boost

if you leave it blank, it will trigger for both

## Example
### Let's create the server boost trigger command
![](https://i.imgur.com/9AOu4J4.png)

Notice that we left trigger value blank, because we want it to trigger for both cases
we will know if user boosted or unboosted with `$isBoosting`

### Output (When boosting)

![](https://i.imgur.com/5xGlxRx.png)

### That's it

## Some functions related to Library
[$isBoosting](../Text/isandhas/isBoosting.md):   return true if user is boosting otherwise false
