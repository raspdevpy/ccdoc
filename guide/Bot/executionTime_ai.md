# $executionTime

This function returns the time it took for the interpreter to execute the code *before* this function, measured in milliseconds.

**Important:** This function will not work within embeds. It will return `false`.

## How to Use

Simply include `$executionTime` in your code.  It will be replaced with the execution time in milliseconds.

```
$executionTime
```

**Example:**

Imagine your bot executes some complex calculations or retrieves data from an external source. You can use `$executionTime` to gauge how long these operations take.

```
Some complex command code
$executionTime
```

This would output the time taken to execute the "Some complex command code" part of the command. This can be useful for identifying performance bottlenecks.