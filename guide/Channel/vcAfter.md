# $vcAfter

Returns the ID of the voice channel a user **joined** or **switched to**. This function is triggered **after** a user changes voice channels or joins a voice channel for the first time.

## Functionality

This function is particularly useful in events that track voice channel activity.  It provides the ID of the *new* voice channel the user is in.

## Usage

```markdown
$vcAfter
```