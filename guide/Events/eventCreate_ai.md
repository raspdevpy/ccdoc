# $eventCreate

Creates a scheduled event on your server.

## Usage

The `$eventCreate` function allows you to schedule events with various types, including voice, stage, and external events. Here's how to use it:

```bash
$eventCreate[
	{name=Your event name}
	{type=Your event type i.e. voice, stage, or external}
	{start=Start Timestamp}
	{end=End Timestamp}
	{desc=The event description (optional)}
	{channel=The event channel ID (required for voice/stage events)}
	{location=Your event location (required for external events)}
	{cover=Event Image URL (optional)}
	{return_id=Whether to return the created event ID (yes/no, default: no)}
	{reason=Creation reason for audit log (optional)}]
```

**Explanation of Parameters:**

*   **`name`**:  The name of the event.  Required.
*   **`type`**: The type of event.  Must be one of: `voice`, `stage`, or `external`. Required.
*   **`start`**:  The start time of the event, expressed as a Unix timestamp (in seconds).  You can use `$timestamp` and time calculations to set this. Required.
*   **`end`**: The end time of the event, expressed as a Unix timestamp (in seconds).  You can use `$timestamp` and time calculations to set this. Required.
*   **`desc`**: A description of the event. Optional.
*   **`channel`**: The ID of the voice or stage channel where the event will take place.  Required if `type` is `voice` or `stage`.
*   **`location`**: The location of the event.  Required if `type` is `external`.
*   **`cover`**: A URL to an image to use as the event cover. Optional.  Must be a valid URL.
*   **`return_id`**:  If set to `yes`, the function will return the ID of the created event.  Defaults to `no` if omitted.
*   **`reason`**:  A reason for creating the event.  This will appear in the audit log. Optional.

## Event Types

The `{type=...}` parameter accepts the following values:

*   `voice`:  A scheduled event within a voice channel.
*   `stage`:  A scheduled event within a stage channel.
*   `external`: An external event with a specified location.

## Voice and Stage Events

When creating `voice` or `stage` events, ensure you specify:

*   `{type=voice}` or `{type=stage}`
*   `{channel=Voice/Stage Channel ID}`  (Replace `Voice/Stage Channel ID` with the actual channel ID)

## External Events

When creating `external` events, ensure you specify:

*   `{type=external}`
*   `{location=Your event location}` (Replace `Your event location` with the actual location)

### Example

This example creates a voice channel event called "Anime Watch!" in the channel "AnimeWatchVC", starting in 10 minutes and lasting for 1 day.

```bash
$eventCreate[
	{name=Anime Watch!}
	{start=$math[$timestamp+$parseTime[10m]]}
	{end=$math[$timestamp+$parseTime[1d]]}
	{type=voice}
	{channel=AnimeWatchVC}
	{desc=Today we gonna watch anime together!}]
```