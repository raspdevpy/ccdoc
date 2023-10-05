# $eventEdit

Edit an event by id

## Usage

```bash
$eventEdit[
	{event=Event ID to edit}
	{name=new event name}
	{type=new event type i.e external}
	
	{start=new Start Timestamp}
	{end=new End Timestamp}
	{desc=new description}
	{channel=new voice/stage channel}
	{location=new location}
	{cover=Event Image (optional)}
	{reason=edit reason for audit log}
	]
```

# Notes:
`start, type, location, channel` can be modified only if event is not active

### Example:
```bash
$eventEdit[
	{event=12345}
	{name=My event new name!}]
```