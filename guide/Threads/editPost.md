# $editPost

edit an existing post in forum channel

## Usage

```bash
$editPost[
	{post_id=Post ID}
	{title=New Post title}
	{content=New Post Content (only if bot is author)}
	{archive=Auto-archive duration}
	{message_ratelimit=how often messages can be sent}
	{locked=is post locked? (yes/no)}
	{closed=is post closed? (yes/no)}
	{pinned=is post pinned? (yes/no)}
	{reason=reason for audit log}
	{tag=Add Tag1}
	{tag=Add Tag2}...
	{remove_tag=Remove Tag3}
	{remove_tag=Remove Tag4}...
]
```

### Auto-archive Inactive post:
It accepts only 7 durations: 1h, 1d, 3d, 7d

### Locked/Closed/Pinned Values:
They accept: `yes` or `no`

### Tag values:
It accept the tag names only, if not valid will be ignored.

### Post Content:
It accept embed and curl format like\
```
{content=
	{desc:Embed description}
	{title:Embed Title}
}
```

### Example (Lock , Add Tag Inactive, Remove Tag Active):
```bash
$editPost[
	{id=1234}
	{locked=yes}
	{remove_tag=Active}
	{tag=Inactive}
]
```
