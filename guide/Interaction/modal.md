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
    {desc=Menu description}

    // support menu curls, like below
    {option=Option 1}
    {value=option_1_id}

    {option=Option 2}
    {value=option_2_id}
    ...
}

{input=
    {name=User/Role/Mention/Channel Menu name}
    {type=user or role or mention or channel}
    {id=menu id}
    {desc=Menu description}

    {selected=user id or role id or channel id} // for user/role/channel menu
    ...

    {selected_user=user id for mention} // for mention menu
    {selected_role=role id for mention} // for mention menu
    ...
}


{input=
    {name=Input name}
    {id=Input id}
    ...
}

```
#### Notes on input properties:
##### **required**
must be `yes` or `no`, the default is `yes`<br\>

##### **type**
property must be `short`, `long`, `menu/user/role/mention/channel` , the default is `short`, `short` means it accept only one line as input
but `long` means it accept multiple lines. and `menu/user/role/mention/channel` to specify that input as menu instead of text input

##### **input**
it can be multiple but max of 5 inputs, i.e (3 text inputs, 2 menus)

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