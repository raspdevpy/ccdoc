# $createPost

add a new post in forum channel

## Usage

```bash
$createPost[
	{forum=Forum Name/ID}
	{title=Post title}
	{content=Post Content}
	{archive=Auto-archive duration}
	{message_ratelimit=how often messages can be sent}
	{return_id=yes/no}
	{reason=reason for audit log}
	{tag=apply Tag1}
	{tag=apply Tag2}...
]
```

### Auto-archive Inactive post:
It accepts only 7 durations: 1h, 1d, 3d, 7d

### Post Content:
It accept embed and curl format like\
```
{content=
	{desc:Embed description}
	{title:Embed Title}
}
```
