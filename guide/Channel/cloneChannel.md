# $cloneChannel

Clones a channel, duplicating its permissions.

## Usage

```bash
$cloneChannel[Channel ID;New Name (optional);Category (optional);Return ID (yes/no, optional)]
```

**Parameters:**

*   **`Channel ID`**:  The ID of the channel you want to clone. This is a required parameter.
*   **`New Name`**: (Optional) The desired name for the new, cloned channel. If left blank, the cloned channel will have the same name as the original.
*   **`Category`**: (Optional) The name or ID of the category you want the cloned channel to be placed in.  If omitted, the cloned channel will be created outside of any category.
*   **`Return ID`**: (Optional) Specifies whether the function should return the ID of the newly created channel.  Accepts `"yes"` or `"no"`. Defaults to `"no"` if not specified.

## Examples

**Basic Cloning:**

This example clones the channel with the ID "General" and names the clone "General-Cloned".

```bash
$cloneChannel[General;General-Cloned]
```

**Cloning to a Category:**

This example clones the channel with the ID "General", names the clone "General-Cloned", and places it in the category named "Category1".

```bash
$cloneChannel[General;General-Cloned;Category1]
```

**Returning the Cloned Channel ID:**

This clones the channel with the ID "General" and returns the ID of the newly created channel.

```bash
$cloneChannel[General;;;yes]
```