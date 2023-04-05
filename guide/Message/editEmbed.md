# $editEmbed

edit embed in given message

## Usage

```bash
$editEmbed[channel id (optional);message id (optional);New data (curl);Embed Number (optional, default 1)]
```

### Example:
#### Sending Dummy Embed
![](https://i.imgur.com/WINGkjW.png)
The embed message ID is 1091071622624051300 in this example

#### Editing the title
to edit the title we can do use {title:Your title}
![](https://i.imgur.com/NRKCdS1.png)

#### Adding a field
to add a field to the embed, use {field:Name:Value:inline}
![](https://i.imgur.com/M3IVHx0.png)

#### Editing a field
to edit a field, we can use {field:Name:Value:inline:field number to edit}
![](https://i.imgur.com/14zlrvJ.png)

#### Edit multiple part of the embeds
you can edit multiple parts of the embed add once by adding them together like this:
```
{title:Your new title}
{description:Your new description}
```
![](https://i.imgur.com/VoMAg9b.png)


### List of Curl Message
| Format | description |
|---------|-------------------|
| {title:text} | Editing a title |
| {url:link} | Editing title's url |
| {footer:text:url} | edit a footer |
| {description:text} | edit a description |
| {desc:text} | alias to {description} |
| {color:hex} | edit a color of embed |
| {author:text:image url:link url} | edit author |
| {thumbnail:url} | edit thumbnail |
| {field:name:value:inline} | add a field |
| {field:name:value:inline:field number} | edit a field |
| {timestamp:ms} | editing a timestamp |
| {image:url} | displaying image |
