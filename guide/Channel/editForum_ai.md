# $editForum

Edits an existing forum channel. This allows you to modify various aspects of the forum, such as its name, topic, layout, and available tags.

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

**Parameters:**

*   `id`: (Required) The ID of the forum channel you want to edit.
*   `name`: (Optional) The new name for the forum channel.
*   `topic`: (Optional) The new topic and guidelines for the forum channel. This is often displayed at the top of the forum.
*   `layout`: (Optional) The layout of the forum.  Accepts two values: `list` or `gallery`.
*   `category`: (Optional) The ID of the category you want to move the forum channel to.
*   `position`: (Optional) The position of the forum channel within its category. This determines the order in which it's displayed.
*   `default_reaction`: (Optional) The default emoji reaction added to new posts in the forum.
*   `tag_required`: (Optional)  Set to `true` to require users to select a tag when creating a new post. Defaults to `false`.
*   `sort`: (Optional) The sorting order of posts. Accepts two values: `creation` (sort by creation date) or `activity` (sort by last activity).
*   `archive`: (Optional)  The duration after which inactive posts are automatically archived.  Accepts the following values: `1h`, `1d`, `3d`, `7d`.
*   `nsfw`: (Optional) Set to `true` to mark the forum as age-restricted (NSFW). Defaults to `false`.
*   `post_ratelimit`: (Optional) The ratelimit in seconds for creating new posts in the forum.
*   `message_ratelimit`: (Optional) The ratelimit in seconds for sending messages in posts in the forum.
*   `reason`: (Optional) The reason for editing the forum channel. This will be displayed in the audit log.
*   `tag`: (Optional)  Add a new tag available for posts. You can specify both an emoji and a name, or just a name. See "Tag Values" below.
*   `moderator_tag`: (Optional)  Add a tag available only for moderators.  You can specify both an emoji and a name, or just a name. See "Tag Values" below.
*   `remove_tag`: (Optional) The name of a tag to remove from the forum. You can use this parameter multiple times to remove several tags.

### Tag Removal

You can remove existing tags using the `{remove_tag=Tag name}` parameter.  Repeat this parameter as many times as necessary to remove multiple tags. Make sure you use the exact name of the tag you want to remove.

### Layout Values

The `layout` parameter accepts two possible values:

*   `list`: Displays posts in a list format.
*   `gallery`: Displays posts in a gallery format.

### Sort Order Values

The `sort` parameter accepts two possible values:

*   `creation`: Sort posts by their creation date.
*   `activity`: Sort posts by their last activity.

### Tag Values

The `tag` and `moderator_tag` parameters accept two formats:

*   `<emoji> <name>` (e.g., `:heart: Love`)
*   `<name>` (e.g., `Helpful`)

### Auto-archive Inactive Post

The `archive` parameter accepts the following durations:

*   `1h` (1 hour)
*   `1d` (1 day)
*   `3d` (3 days)
*   `7d` (7 days)

### Tag Limits

You can repeat the `{tag}` or `{moderator_tag}` parameters as many times as needed, but the total number of tags (combined `tag` and `moderator_tag`) cannot exceed 20. Discord will reject the request if you exceed this limit.

### Example

Adding a tag with an emoji:

```bash
$editForum[
	{id=123456789}
	{tag=:heart: Love}
]
```

### Example

Changing the forum name:

```bash
$editForum[
	{id=123456789}
	{name=My cute new forum name}
]
```