# $createForum

Create a new forum channel within your Discord server.

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

**Parameters:**

*   **`name`**: (Required) The name of the forum channel.
*   **`topic`**: (Optional) A description or guidelines for the forum.  This will be displayed at the top of the forum channel.
*   **`layout`**: (Optional) The visual layout of the forum.  Accepts two values: `list` or `gallery`. Defaults to `list` if not specified.
*   **`category`**: (Optional) The category ID where the forum channel should be created. If not provided, the forum will be created in the same category as the channel executing the command or at the top of the guild.
*   **`position`**: (Optional) The numerical position of the forum within its category.
*   **`default_reaction`**: (Optional) The default emoji reaction added to each new post.  Must be a valid emoji.
*   **`tag_required`**: (Optional) Specifies whether a tag is required when creating a new post.  Accepts `yes` or `no`.
*   **`sort`**: (Optional) Determines the sorting order of posts in the forum.  Accepts two values: `creation` (sort by creation date) or `activity` (sort by last activity). Defaults to `creation`.
*   **`archive`**: (Optional) Automatically archives inactive posts after a specified duration.  Accepts the following values: `1h`, `1d`, `3d`, `7d`.
*   **`nsfw`**: (Optional) Marks the forum as age-restricted (NSFW).  Accepts `yes` or `no`.
*   **`post_ratelimit`**: (Optional)  Sets a ratelimit (in seconds) for creating new posts within the forum.
*   **`message_ratelimit`**: (Optional) Sets a ratelimit (in seconds) for sending messages within posts in the forum.
*   **`reason`**: (Optional) A reason for creating the forum, which will be logged in the audit log.
*   **`tag`**: (Optional) Defines available tags for posts.  Can be repeated.
*   **`moderator_tag`**: (Optional) Defines available tags only for moderators. Can be repeated.
*   **`return_id`**: (Optional) Specifies whether the created forum's ID should be returned. Accepts `yes` or `no`.

**Important Considerations:**

*   You can repeat the `{tag}` and `{moderator_tag}` parameters as many times as needed, but keep the combined total number of tags below 20. Discord's API limits the number of tags.

### Tag Format

Tags can be defined in two formats:

1.  **Emoji + Name:** `<emoji> <name>` (e.g., `❤️ Love`)
2.  **Name Only:** `<name>` (e.g., `Helpful`)

### Example:

```bash
$createForum[
  {name=Opinions}
  {topic=Share your thoughts and opinions on various topics.}
  {archive=1w}
  {tag=In Life}
  {tag=In Work}
  {tag=In Society}
  {tag_required=yes}
  {default_reaction=👍}
  {sort=activity}
]
```
