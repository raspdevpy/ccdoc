# $getEventInfo

to get an information about an event in the guild

## Usage

```bash
$getEventInfo[event id;info type]
```
| Info Type      | Description | Value |
| ----------- | ----------- | ----------- | 
| id      | the event id       | id like `123456789123456789`|
| name      | the event name       | name like `My Cool Event`|
| owner      | the user who created the event       | user id like `123456789123456789`|
| creator      | alias for owner       | user id like `123456789123456789`|
| channel      | the channel where event is in only if the event type is `voice`       | channel id like `123456789123456789` or `undefined`|
| desc      | the event description       | description like `This event is so cool!`|
| start_time      | the event start time       | timestamp in millisecond |
| end_time      | the event end time       | timestamp in millisecond |
| status      | the event status       | `active` or `scheduled`|
| type      | the event type       | `voice` or `external`|
| location      | the location of the event only if the event type is `external`       ||
| cover      | the event cover image if available       | image url or `undefined` |
| users_count      | the count of users interested in the event       | Number |
| url      | the url of the event       | Link |
| privacy      | the event privacy       | `private` or `public` |








### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getEventinfo[123456789123456789;name]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Event Name
        </discord-message>
</discord-messages>