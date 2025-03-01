# $boostingSince

This function returns the date a user started boosting the server.

## Usage

You can use `$boostingSince` in two ways:

**1. Without Arguments (Returns your own boosting date):**

```bash
$boostingSince
```

This will return the date you started boosting the server if you are a boosting member. If you are not boosting, it will likely return an error or empty string.

**2. With Arguments (Returns a specific user's boosting date):**

```bash
$boostingSince[userID;date/ms (optional)]
```

This allows you to specify a user ID and optionally a formatting option to customize the output.

**Arguments:**

*   `userID`: The Discord user ID of the member you want to check. This is a required argument.
*   `date/ms (optional)`: Specifies how the date should be formatted. This is an *optional* argument. If you omit this, it will return the raw timestamp in milliseconds.  You can format the date according to [Moment.js](https://momentjs.com/docs/) format strings (e.g., `YYYY-MM-DD HH:mm:ss`).

**Examples:**

*   `$boostingSince`:  Returns the date you started boosting in milliseconds.

*   `$boostingSince[123456789012345678]`: Returns the date user with ID `123456789012345678` started boosting in milliseconds.

*   `$boostingSince[123456789012345678;YYYY-MM-DD]`: Returns the date user with ID `123456789012345678` started boosting, formatted as `YYYY-MM-DD` (e.g., `2023-10-26`).

*   `$boostingSince[123456789012345678;MMMM Do YYYY, h:mm:ss a]`: Returns the date user with ID `123456789012345678` started boosting, formatted as `MMMM Do YYYY, h:mm:ss a` (e.g., `October 26th 2023, 10:30:45 am`).

**Important Notes:**

*   Ensure the user ID is valid.
*   Refer to the [Moment.js](https://momentjs.com/docs/) documentation for valid date formatting strings.