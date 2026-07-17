# Understanding Discord Rate Limits and Bot Cooldowns

To ensure fair usage and prevent abuse, Discord implements rate limits on its API. Our bot also uses a cooldown system to manage requests efficiently. This page explains how these limits work and how they might affect your custom commands.

## What are Cooldowns and Limits?

Think of cooldowns and limits as restrictions designed to prevent the bot from being overwhelmed or misused. They control how frequently certain actions can be performed.

*   **Cooldown:** A waiting period before a function can be used again with the same inputs (e.g., by the same user, in the same channel, or in the same guild).

*   **Limit:** A maximum number of times a function can be called within a specific context (e.g., within a single custom command).

## Function Cooldowns

Many functions have a built-in cooldown period. This means that after using the function, there will be a delay before it can be used again with the same input data.

**What happens when a function is on cooldown?**

The bot's behavior depends on the function and its configuration:

*   **Wait and Execute:** The bot waits for the cooldown to expire and then executes the function.
*   **Error Message:** The bot sends an error message indicating that the function is on cooldown.
*   **Silent Cancellation:** The bot cancels the execution without any warning message.

::: tip How to Check Function Cooldowns
You can use the command `!!func function name` to check the cooldown period (if any) of a specific function. This will help you understand how long you need to wait before using the function again.
:::

## Function Limits

Even with cooldowns in place, a function can only be called a limited number of times within a single custom command.

**Function Limit:** A function with cooldown can be called a maximum of **5 times** within a single custom command.

If this limit is reached, the bot will silently cancel the execution of the function.

## Execution Limits

These limits control how many custom commands can run simultaneously and how quickly they can be triggered.

*   **Parallel Execution Limit:** The bot supports up to **5 parallel executions** of the same custom command.

*   **Execution Cooldown:** The same custom command can only be triggered **once every 5 seconds**.

## Premium Benefits (Tier 3/4/5)

Premium tiers (3, 4, and 5) allow you to run your own dedicated bot instance. This comes with significantly relaxed limitations, as your bot runs in an isolated environment.

**Removed/Increased Limits for Premium Tiers:**

*   **Function Cooldown:** Removed entirely.
*   **Function Limit:** Hard capped to 20 calls per custom command.
*   **Execution Limits:** Hard capped to 60 parallel executions.
*   **Execution Cooldown:** Hard capped to 0.5 seconds.