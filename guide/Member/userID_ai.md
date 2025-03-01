# `$userID`

Retrieves a user ID based on a provided username.

#### Usage: `$userID[username]`

This function searches for a user within the server and returns their unique ID.

<br/>

**Example:**

```discord
!!exec $userID[Mika]
```

**Output:**

```discord
787695068306866198
```

<br/>

::: danger Warning
**Important:** The user data is retrieved from the server's cache. This means the information might not be completely up-to-date if all guild members haven't been fully cached.  Complete caching is typically only available on tier 5 servers.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="userID" vertical="middle" /> <Badge type="tip" text="Member ID" vertical="middle" /> <Badge type="tip" text="User ID" vertical="middle" /> <Badge type="tip" text="Username" vertical="middle" />