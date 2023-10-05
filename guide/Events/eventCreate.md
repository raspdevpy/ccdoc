# $eventCreate

Creates a scheduled event

## Usage

```bash
$eventCreate[
	{name=Your event name}
	{type=Your event type i.e voice}
	{start=Start Timestamp}
	{end=End Timestamp}
	{desc=The event description (optional)}
	{channel=the event channel if type is voice/stage}
	{location=Your event location if type is external}
	{cover=Event Image (optional)}
	{return_id=whether to return the created event id or not (yes/no)}
	{reason=creation reason for audit log(optional)]
```

# Event Type Values:
Type in {type=..} accepts `voice, stage, external`

# Event Of Voice/Stage Type
in that case make sure to specify the type with `{type=voice/stage}` and the channel with {channel=Stage/Voice Channel ID}

# External Event
You can make external event by specifying `{type=external}` and set the event location through `{location=Your event location}`

### Example:
```bash
$eventCreate[
	{name=Anime Watch!}
	{start=$math[$timestamp+$parseTime[10m]]}
	{end=$math[$timestamp+$parseTime[1d]]}
	{type=voice}
	{channel=AnimeWatchVC}
	{desc=Today we gonna watch anime together!}]
```