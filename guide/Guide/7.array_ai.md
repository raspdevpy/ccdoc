# Understanding and Using Arrays

This guide will introduce you to arrays, explaining what they are and how to use them effectively in your Custom Commands.

## What are Arrays?

Think of an array as an ordered list or a queue. Each item in the list is called an element, and they all have a specific position.

Imagine a line of people: **Bob**, **Adam**, and **Lucy**. That's essentially an array!

## Array Indexes

Each element in an array has a unique index number that identifies its position.  These indexes are crucial for many array-related functions.

Using our previous example:

*   **Bob** is at index 1
*   **Adam** is at index 2
*   **Lucy** is at index 3

Once you create an array, you can use functions to modify it, retrieve information from it, and more.

## Creating Arrays in Custom Commands

There are two primary methods for creating arrays within Custom Commands. We'll explore both below.

## 1. Creating Arrays by Splitting Text

The most common way to create an array is using the `[$arrayCreate](../Text/Array/arrayCreate.md)` function. This function takes a piece of text and divides it into elements based on a separator you specify.

### Example: Splitting a List of Fruits

Let's say you have the text: `apple, banana, orange`.  We want to convert this into an array where each fruit is a separate element.  Notice that the fruits are separated by a comma and a space (`, `).

`$arrayCreate` itself doesn't display any output. We need another function to verify that the array was created correctly.  We'll use `[$arrayLength](../Text/Array/arrayLength.md)` to count the number of elements in the array.

```php
// Create an array of three elements, separated by ", "
$arrayCreate[apple, banana, orange;, ]

// Get the number of elements in the array
$arrayLength
```

Let's see what this code returns:

<discord-messages>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        3
    </discord-message>
</discord-messages>

As you can see, the output confirms that we successfully created an array with three elements.

## 2. Building Arrays by Pushing Elements

Sometimes you might prefer to build an array dynamically, adding elements one at a time. The `[$arrayPush](../Text/Array/arrayPush.md)` function allows you to append new elements to the end of an existing array.

Let's create an array containing different animals and then retrieve the first and last animals in the array:

```php
// Add elements to the array
$arrayPush[Dog]
$arrayPush[Cat]
$arrayPush[Mouse]
$arrayPush[Elephant]

// Get the first and last elements in the array
$arrayGet[1], $arrayGet[4]
```

Executing this code will produce the following:

<discord-messages>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Dog, Elephant
    </discord-message>
</discord-messages>

This demonstrates that `$arrayPush` correctly added each animal as a separate element to the array.

## 3. Searching for Values within Arrays

While many array functions rely on element indexes, you'll often need to find the index of a specific value within an array.  The `[$arraySearch](../Text/Array/arraySearch.md)` function makes this easy.

Let's create an array of staff members and then find the index of the staff member named `fajfaj`:

```php
$arrayCreate[RAKE Oanretesue Mido fajfaj ThatKev; ]
fajfaj's index is `$arraySearch[fajfaj]`
```

Running this code will give us:

<discord-messages>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        fajfaj's index is 4
    </discord-message>
</discord-messages>

## 4. Persisting Arrays (Saving Data)

By default, any changes you make to an array are lost after the command execution finishes.  However, you can use arrays to store data that persists across multiple command executions using [permanent variables](./6.variables.md#permanent).

Let's create a `!todo` command that saves and displays a list of tasks.  The command should:

*   Add new tasks to the list.
*   Display all tasks in the list.

![](https://cdn.discordapp.com/attachments/1105873889155895407/1109232936735232100/image.png)

```php
// Initialize a server variable to hold the todo array.
$initVar[server;todo;]

// Load the existing todo array from the server variable (using | as the separator).
$arrayCreate[$getServerVar[todo];|]

// Push the new task (from the message content) to the array.
$arrayPush[$message]

// Save the updated array back to the server variable (using | as the separator).
$setServerVar[todo;$arrayJoin[|]]

// Format the list to "1. task" (optional).
$arrayMap[value;index]{$index. $value}

// Return the list of tasks.
TODO:
$arrayJoin[#NL#]
```

Now, let's add some tasks:

<discord-messages>
    <discord-message author=Member role-color=#ffcc9a>
        !todo Wash dishes
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1. Wash dishes
    </discord-message>
    <discord-message author=Member role-color=#ffcc9a>
        !todo Touch the grass
    </discord-message>
    <discord-message :bot=true author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        TODO: <br>
        1. Wash dishes <br>
        2. Touch the grass
    </discord-message>
</discord-messages>

Notice that the changes to the array are preserved between command executions.

### Congratulations!

You've reached the end of this introduction to arrays. There are many more powerful array functions to explore. Have fun experimenting with the [Array category](../Text/Array/arrayClear.md) to unlock the full potential of arrays in your Custom Commands!