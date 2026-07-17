# $serverBanner

Returns the current server banner

#### Usage: `$serverBanner[size (optional);dynamic (yes/no)(optional)]`

**Description:**

This function retrieves the server's banner image URL.  You can optionally specify the size and whether the image should be dynamic (e.g., animated GIF).

**Parameters:**

*   `size` (optional):  The desired size of the image. This should be a number representing the width/height (e.g., `1024`).
*   `dynamic` (optional):  Specifies whether to use the dynamic (animated) version of the banner, if available.  Use `yes` to try to get the animated version, or `no` to force the static version.

**Example:**

*   `$serverBanner`: Returns the default-sized server banner URL.
*   `$serverBanner[512]`: Returns the server banner URL with a size of 512x512.
*   `$serverBanner[;yes]`: Returns the server banner URL, attempting to use the dynamic (animated) version.
*   `$serverBanner[1024;no]`: Returns the server banner URL with a size of 1024x1024, forcing the static version.

Learn more about server banners: https://support.discord.com/hc/en-us/articles/360028716472-Server-Banner-Background-Invite-Banner-Image

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 