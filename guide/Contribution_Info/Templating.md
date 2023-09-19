# Templating
This pages contains information about the templating system and how to make commands for the template system compatible
The new templating system includes parsing of Metadata and Inputs.

## Metadata
Metadata is a way to add extra information to a command like description,tags,category,etc.
It helps the user to find the command easier in the template search.
Metadata is a JSON object.So incorrect syntax will not be accepted.

### Metadata Syntax
In your code you can add metadata by using the following syntax:
You need to comment out the metadata in your code,else it will get sent as message.
```
{{{ and }}}
``` 
are used to mark the metadata and parse it much easier.

#### Metadata Syntax Types
```ts
{{{
        "version": number,
        "tags": Array<string>,
        "author": string,
        "usecase": string,
        "category": string,
        "preview": link,
        "description": Array<string> ,
        "link": Array<link>,
        "custommd"?: string, //optional
}}}
```

#### Metadata Syntax Example in your code for !balance command
```
/* Metadata : 
{{{
        "version": "1",
        "tags": ["economy","balance","money"],
        "author": "User-0000",
        "usecase": "checks the balance of the user",
        "category": "economy",
        "preview": "https://media.discordapp.net/attachments/845279377733320745/928401183809364008/unknown.png",
        "description": ["Run <code>!bal</code> to show your balance"] ,
        "link": ["https://media.discordapp.net/attachments/845279377733320745/928401183809364008/unknown.png"],
        "custommd": ""
}}}
*/
The !bal command code
```
The link and preview are same since it is a small command.

## $onTemplate
This is a function ,which is used to create  a UI for the user to interact with like inputs,choice.
It is useful to get inputs from the user and to directly replace it in the command code.

**A Ui only gets created ,if metadata for the commands exists**

### Usage

```
$onTemplate[type;field;title;help;def value]
```

* Valid types: category,number,channel,role,text,boolean,id
* Valid fields: input,inputarray,dropdown,dropdown array,checkbox

:::warning Escaping 
You can't have chars like  [] and ; in the function since it is unsupported by the parser.
use the following syntax to escape the chars:
`#RIGHT#` and `#LEFT#` and `#SEMI#`
:::

#### Types
* `category` : This creates a dropdown with the categories from the server.  `dropdownarray` or `dropdown` would be used for the 2nd param.
* `number` : This creates a number input. 
* `channel` : This creates dropdown with the channels from the server.  `dropdownarray` or `dropdown` would be used for the 2nd param.
* `role` : This creates dropdown with the roles from the server.  `dropdownarray` or `dropdown` would be used for the 2nd param.
* `text` : This creates a text input.
* `boolean` : This creates a checkbox.
* `id` : This creates a text input.
* `runonlyin` : This modifies the cloned command run only in to the selected channel(s)

#### Fields
* `input` : This creates a text input.
* `inputarray` : This creates a text input with the placeholder "Split by ,"
* `dropdown` : This creates a dropdown with the values from the type or if `text` / `number` from the default value parameter,where the values are separated by "," 
* `dropdownarray` : This creates a dropdown,where you can select multiple options with the values from the type or if `text` / `number` from the default value parameter,where the values are separated by ","
* `checkbox` : This creates a checkbox.

#### Title,Help
* title: This is the title of the input/dropdown/checkbox.
* help: This is the help text of the input/dropdown/checkbox.

#### Default Value
* def value: This is the default value,if a value is not provided by the user.

#### Example Ticket System

Ticket Code :
```
$let[categoryID;$onTemplate[category;dropdown;Ticket Category;Choose the category where the ticket should be created;$channelCategoryID]] // Put the category ID Here 
$if[$buttonID==openTicket]
    $cooldown[1m;<@$authorID> Please Wait %time% to create a new ticket]
    $newTicket[$userTag;
    {title:🎫 Ticket}
    {url:https://raspdevpy.gitbook.io}
    {description:You can change this message to yours}
    {footer:Press the blue link for the docs}
    {button:Close The ticket:red:❌:closeTicket}
    {color:RANDOM}
    ;$get[categoryID];no;Could not Create Ticket]
$elseIf[$buttonID==closeTicket]
    $sendMessage[{title: This ticket will be closed in 10s} {color: #ff4a4a};no]
    $disableButton[$messageID;closeTicket]
    $wait[10s]
    $closeTicket[This channel is not a ticket!]
$endelse
```
Template Asking for Input:
![](https://i.ibb.co/LQnfhh3/image.png)


After Cloning: `$let[categoryID;866251414232498197]`

# Special Cases 
dropdownarray and inputarray are splited by ","
In your custom commands you have to spread the array by using the following syntax:
```
$let[input;input,from,template]
$giveRoles[$authorID;$spread[,;$input]]
```
