# Get User Banner

Retrieves the banner image URL for a user.

**Returns:**

*   The banner image URL as a string if the user has a banner.
*   `undefined` if the user does not have a banner.

## How to Use

The `$userBanner` function allows you to fetch the banner image of a user.  You can optionally specify a User ID. If no User ID is provided, it defaults to the current user in the context.

```
$userBanner[User ID (optional)]
```

**Parameters:**

*   `User ID (optional)`: The ID of the user whose banner you want to retrieve. If omitted, the function will attempt to retrieve the banner of the current user.

**Example:**

To get the banner of user with ID `123456789012345678`:

```
$userBanner[123456789012345678]
```

To get the banner of the current user:

```
$userBanner[]
```
or simply
```
$userBanner