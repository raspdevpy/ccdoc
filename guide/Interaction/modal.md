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
    {name=Input name}
    {id=Input id}
    ...
}

```
#### Notes on input properties:
##### **required**
must be `yes` or `no`, the default is `yes`<br\>

##### **type**
property must be `short` or `long`, the default is `short`, `short` means it accept only one line as input
but `long` means it accept multiple lines

##### **input**
it can be multiple but max of 5 inputs

### Example
#### Code
![](https://i.imgur.com/ByYr0UI.png)

#### Output
![](https://i.imgur.com/LF7cnOK.png)

::: tip
This can only be used inside the [modal trigger](../Trigger/modal.md)
:::
##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="modal" vertical="middle" /> <Badge type="tip" text="sending modal" vertical="middle" />