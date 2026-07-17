# Troubleshooting

Our bot's advanced features mean users may encounter unique issues. This section addresses common problems, ordered from most frequent to less frequent.

Each problem is presented as a question, followed by troubleshooting steps and the trigger type.

## My command doesn't trigger  <Badge type="tip" text="Word" vertical="middle" />

**Possible Causes:**

*   **Incorrect Permission Level:** Have you set the minimum permission level for the command execution to `None`?

    *   **No:** Change the permission level to `None`, save the changes, and try again.

    *   **Yes:** Continue to the next possible cause.

*   **Special Characters in Trigger:** Does your command trigger contain any [special characters](../CodeReferences/specialCharacters)? Special characters can sometimes interfere with trigger recognition.

## The bot failed to assign a role

**Troubleshooting Steps:**

1.  **Insufficient Bot Permissions:** Ensure the bot has sufficient permissions to assign roles.  Granting the bot Administrator permissions is the easiest way to resolve permission issues.

2.  **Role Hierarchy:**  The bot's role (@Custom Command) must be higher in the server's role hierarchy than:
    *   The role the bot is trying to assign.
    *   All roles the member already has.

    You can adjust the role hierarchy in your Discord server settings.

    ![Hierarchy example](https://media.discordapp.net/attachments/857273141968371732/964741875179356180/unknown.png?width=497&height=593 "Role Hierarchy Example")

**Still having trouble?**

If these steps don't resolve the issue, please reach out to our staff on the [support server](https://ccommandsbot.com/join) for personalized assistance.