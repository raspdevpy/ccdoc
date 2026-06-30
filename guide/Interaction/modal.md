# $modal
Used to send a modal, it must be used inside interaction like button/menu/slash triggers
#### Usage: `$modal[Input]`

**Input** will accept this format:
```
{title=The modal title}
{id=The modal id}

{input=
    {name=Input name}
    {id=Input id}
    {ph=Input placeholder}
    {def=Input Default Value}
    {required=Is input required?}
    {min=Minimum length of the input}
    {max=Maximum length of the input}
    {type=What is the type of input?}
}

{input=
    {name=Menu name}
    {type=menu}
    {id=menu id}
    {subtitle=Menu subtitle (description)}

    {option=Option 1}
    {value=option_1_id}

    {option=Option 2}
    {value=option_2_id}
}

{input=
    {name=Attachment Input}
    {type=attachment}
    {id=input id}
    {subtitle=Attachment subtitle (description)}
    {min=Min number of attachments (1-10)}
    {max=Max number of attachments (1-10)}
    {required=yes/no}
}

{input=
    {name=Select Menu}
    {type=user or role or mention or channel}
    {id=menu id}
    {subtitle=Menu subtitle (description)}
    {selected=ID} // Prefilled ID for user/role/channel menus
    {selected_user=ID} // Prefilled user ID for mention menus
    {selected_role=ID} // Prefilled role ID for mention menus
}

```
#### Notes on input properties:
##### **required**
must be `yes` or `no`, the default is `yes`<br\>

##### **type**
Specifies the input type for the input.
* **`short` (Default):** A single-line text input field.
* **`long`:** A multi-line text area for longer responses.
* **`menu/user/role/mention/channel`:** A dropdown selection menu instead of a text field.
* **`attachment/attach`:** A file upload input field.

#### Max Amount of Inputs
You can include multiple input fields, up to a maximum of 5 total (for example: 3 text inputs and 2 selection menus).

### Example
#### Code
![](https://i.imgur.com/ByYr0UI.png)

#### Output
![](https://i.imgur.com/LF7cnOK.png)

### Example With Menu
#### Code
![](https://i.imgur.com/ClY5l4b.png)

#### Output
![](https://i.imgur.com/chJsAth.png)

::: tip
This can only be used inside the [modal trigger](../Trigger/modal.md)
:::

::: tip
Read more about the menu structure in [selectMenu](../Text/Components/selectMenu.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="modal" vertical="middle" /> <Badge type="tip" text="sending modal" vertical="middle" />