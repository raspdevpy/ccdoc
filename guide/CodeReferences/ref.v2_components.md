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

#### section structure
section allow you to add a text + image + button together in inside the container
the structure is:
```
{section:
	{text: any text inside the section}
	{thumbnail/thumb: an image URL to show inside the section}
	{button:Name:color:emoji:id:new line (yes/no):disabled (yes/no)}
}
```
 
#### gallery structure
gallery, allows you to show multiple images together like a gallery, up to 10 images.
the structure is:
```
{gallery:
	{image: image 1 url}
	{image: image 2 url}
	...
	{image: image 10 url}
}
```

#### row structure
row, allows you to include multiple buttons at once (up to 5 buttons)
the structure is:
```
{row:
	{button: button 1 details}
	{button: button 2 details}
	...
	{button: button 5 details}
}
```

#### menu structure
menu, like the normal menu curl, to form a menu inside the container, read more about menu in [$selectMenu](../Text/Components/selectMenu.md)

#### file structure
you set a file in the container for download , the structure is:
```
{file:name of the file:file content as text}
```

#### separator structure
you can set a separator between other components in the container with {separator}, the structure is:
```
{separator:divide (yes/no):size (1 or 2)}
```

#### spoiler
spoiler, allow you to determine if the whole container will be marked as spoiler or not (user will need to click to view)
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

### Output
![](https://i.imgur.com/9bnlwKg.png)