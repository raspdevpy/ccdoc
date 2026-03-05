# Discord V2 Components Curl Format
You can use {container:data} to send a message with v2 component

### Usage
```
{container:
	{color: the color of the container}
	{text: a text inside the container}
	{section: ...}
	{gallery: ...}
	{row: ...}
	{menu: ...}
	{file: ...}
	{spoiler:...}
	{separator:...}
}
```
* Total number of components (i.e container, text...) cannot exceed 40 in the entire message
* Containers can hold up to 40 components (i.e text, gallery,...) at max.
* Total text content length in the message cannot exceed 4000

#### Section
Sections allow you to add text, along with a thumbnail or button inside a container. A section should contain at least one text and one accessory (image or button). If you are putting this inside a container and want *only* the thumbnail to be a spoiler, use {spoiler:yes} inside the section.
```
{section:
	{text: any text inside the section}
	{thumbnail/thumb: an image URL to show inside the section}
	{button:Name:color:emoji:id:new line (yes/no):disabled (yes/no)}
	{spoiler:yes/no}
}
```
 
#### Gallery
Galleries allows you to show multiple images together like a gallery. Supports up to 10 images for each gallery component.
```
{gallery:
	{image: image 1 url}
	{image: image 2 url}
	...
	{image: image 10 url}
}
```

#### Rows
Rows allow you to include multiple buttons at once (up to 5 buttons per row). Buttons are like the normal button curl, read more about button curl format at [$button](../Text/Components/button.md).
```
{row:
	{button: button 1 details}
	{button: button 2 details}
	...
	{button: button 5 details}
}
```

#### Menu
Menus are like the normal menu curl. It can be used to form a menu inside a container. Read more about menu at [$selectMenu](../Text/Components/selectMenu.md)

#### File
You can set a file in the container for downloading.
```
{file:name of the file:file content as text}
```

#### Separator
You can set a separator between other components in the container with {separator}
```
{separator:divide (yes/no):size (1 or 2)}
```

#### Spoiler
Spoiler, allow you to determine if the whole container will be marked as spoiler or not (user will need to click to view).
```
{spoiler:yes/no}
```

### Example
```
$sendMessage[
	{container:
		{text:a text inside container}
		{separator:no:2}
		{gallery:
			{image:$userAvatar}
		}
		{row:
			{button:BTN 1:red::btn1}
			{button:BTN 2:GREEN::btn2}
		}
		{text:a text before the section}
		{section:
			{text:a text inside the section}
			{thumbnail:$userAvatar}
			{button: BTN 3:gray:btn3}
		}
		
		{file:file.txt:Whatever}

		{color:Green}
		{spoiler:yes}
	}
]
```

### Example (Without a container)
If you don't like how the container looks like, you can directly add components without it (only for text, section, gallery, file, separator)
```php
$sendMessage[
	{section:
		{text:a text inside section}
		{thumb:$userAvatar}
	}
	{separator}
	{section:
		{text:a text inside another section}
		{button:Click me:gray::btn_id}
	}
]
```
### Output
![](https://i.imgur.com/v8DYvPY.png)
