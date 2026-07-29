# $emoji

This function packs a punch with **11 different functionalities** related to emojis, all in a single compact command! Get ready to unlock a world of emoji information.

## Usage

The syntax is simple and powerful:

```
$emoji[emojiID;option]
```

**Let's break it down:**

*   `$emoji`:  This is the function itself.
*   `emojiID`: This is the ID of the emoji you want to analyze.  Make sure you have the correct emoji ID!
*   `;`:  This separates the emoji ID from the option you want to use.
*   `option`: This determines what information you want to retrieve about the emoji.

## Available Options

Here's a list of all the options you can use with the `$emoji` function and what they return:

*   `created`:  Returns the timestamp (in milliseconds since epoch) when the emoji was created.
*   `emoji`:  Returns the raw emoji itself (e.g.,  :smile:).
*   `guildid`:  Returns the ID of the guild where the emoji is from.
*   `id`:  Returns the emoji ID (same as what you put in, but useful for confirmation).
*   `identifier`: Returns the emoji's identifier, usually in the format `name:ID` which is helpful when using the emoji in reactions.
*   `isanimated`: Returns `true` if the emoji is animated (a GIF), and `false` otherwise.
*   `isdeleted`: Returns `true` if the emoji has been deleted, and `false` otherwise.
*   `ismanaged`: Returns `true` if the emoji is managed by an integration (like Twitch), and `false` otherwise.
*   `name`:  Returns the name of the emoji.
*   `url`:  Returns the URL of the emoji image.
*   `authorid`: Returns the ID of the user who created the emoji.