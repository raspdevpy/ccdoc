# $upvoteReferralUserID

Returns the ID of the user whose referral link was used for the current upvote.

## Usage

```bash
$upvoteReferralUserID
```

This function is only available in the **On Upvote** trigger.

If the vote was not made using a referral link, 'unknown' value is returned.

::: tip Note
This function will behave like `$clientID` if the upvote command is triggered by `!!emit upvote`
:::