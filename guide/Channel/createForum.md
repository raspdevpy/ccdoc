# $createForum

Create a forum channel

## Usage

```bash
$createForum[
	{name=Forum name}
	{topic=Forum topic and guidelines (optional)}
	{layout=Forum Layout (optional)}
	{category=Forum category (optional)}
	{position=Forum position in the category (optional)}
	{default_reaction=Post's default reaction (optional)}
	{tag_required=Whether tag is required or not when adding post (optional)}
	{sort=sorting order of the posts(optional)}
	{archive=When auto-archive inactive post (optional)}
	{nsfw=age restriction of forum (optional)}
	{post_ratelimit=Post creations ratelimit (optional)}
	{message_ratelimit=Post messages ratelimit (optional)}
	{reason=Creation Reason for audit log (optional)}
	{tag=available tags in the post (optional)}
	{moderator_tag=available tags only for moderators}
	{return_id=Whether return the created forum id or not}
]
```

### Layout values:
it accepts 2 types: list or gallery

### Sort Order values:
it accepts 2 types: creation or activity

### Tag values:
It accepts 2 formats: &#60;emoji&#62; &#60;name&#62; or &#60;name&#62; only

### Auto-archive Inactive post:
It accepts only 7 durations: 1h, 1d, 3d, 7d

### Example:
```bash
```
{tag=&#10084;️ Love}
```
You can repeat {tag} or {moderator_tag} as many as you want, but keep it within 20 tags (combined) otherwise discord will not accept it.


```

### Example:
```bash
$createForum[
	{name=Opinions}
	{topic=Tell us your honest opinions}
	{archive=1w}
	{tag=In Life}
	{tag=In Work}
	{tag=In Society}
	{tag_required=yes}
	{default_reaction=👍}
	{sort=activity}
]
```