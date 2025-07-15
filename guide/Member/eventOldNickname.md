# $eventOldNickname

Returns the old nickname of a member when their nickname is updated. Works in `On Nickname Changes` trigger.

## Usage

```bash
$eventOldNickname
```

## Example

#### Using $eventOldNickname

Imagine you have a Nickname Change command that logs the new nickname to a channel

```bash
$sendMessage[User $username changed their nickname from $eventOldNickname to $eventNewNickname!]
```

##### Related functions: [$username](../Member/username.md) [$eventNewNickname](../Member/eventNewNickname.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="nickname" vertical="middle"/> <Badge type="tip" text="username" vertical="middle"/>