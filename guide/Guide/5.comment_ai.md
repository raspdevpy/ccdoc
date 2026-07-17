# Adding Code Comments

## Introduction

Comments are lines in your code that are ignored by the interpreter. They're incredibly useful for making your code easier to understand and manage.

### Why Use Comments?

Comments serve several important purposes:

*   **Explanation:** They describe what a specific section of code does, making it easier for you (and others) to understand the logic.
*   **Debugging:** You can temporarily disable parts of your code by "commenting them out" to isolate problems during testing.
*   **Documentation:** Comments can act as a form of documentation, explaining how custom functions work, for example.

Our system supports two main types of comments: single-line and multi-line.

```
// Single line comment

/* Multi
Line
Comment
*/
```

## Single-Line Comments

A single-line comment is created by placing two forward slashes (`//`) at the beginning of a line. Everything after the `//` on that line will be ignored.

### Example Code

Let's write some code and add a comment to explain it:

```bash
// This part sums two numbers
$let[num1;5]
$let[num2;10]
Result is $sum[$num1;$num2]
```

### Output

Here's the output you'll see:

<discord-messages>
    <discord-message :bot="true" author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Result is 15
    </discord-message>
</discord-messages>

Notice that the comment `// This part sums two numbers` doesn't appear in the output.

## Multi-Line Comments

When you need to comment out several lines of code, or add a longer explanation, you can use multi-line comments.  These comments are enclosed within `/*` and `*/`.

### Example Code

Let's expand our previous example with a multi-line comment:

```bash
/*
This part sums two numbers:
num1 and num2.
It then sends the result.
*/
$let[num1;5]
$let[num2;10]
Result is $sum[$num1;$num2]
```

### Output

Here's the bot's output:

<discord-messages>
    <discord-message :bot="true" author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Result is 15
    </discord-message>
</discord-messages>

As you can see, the multi-line comment did not affect the program's output.

::: tip Quick Tip: Commenting in the Dashboard Editor
When using the dashboard editor, you can quickly comment out selected line(s) by pressing `Ctrl + /`. This is a great way to quickly add or remove comments while you're working.
:::