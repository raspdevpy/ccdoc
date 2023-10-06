# $editForum

edits a forum channel

## Usage

```bash
$editForum[
	{id=Forum Channel ID}
	{name=Forum name (optional)}
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
	{reason=Edit Reason for audit log (optional)}
	{tag=available tags in the post (optional)}
	{moderator_tag=available tags only for moderators}
	{remove_tag=Tag name to remove}
]
```


### Tags Removal:
you can remove an existing tag with {remove_tag=Tag name}, you can repeat it as much as you want to remove multiple tags.

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
$editForum[
	{id=123456789}
	{name=My cute new forum name}
]
```