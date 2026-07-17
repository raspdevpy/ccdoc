# $modalAnswer

Retrieves the value entered by a user in a modal. This function is used to access the data submitted through a modal triggered by the [`modal` trigger](../Trigger/modal.md).

**Usage:** `$modalAnswer[InputValue]`

**Parameters:**

*   `InputValue`:  The unique identifier (input value) assigned to the specific input field within the `$modal` function when the modal was created. This is how you tell the function which input field's value you want to retrieve.

**Example:**

The following image illustrates how to use `$modalAnswer` inside the `modal` trigger to retrieve the value the user entered in the modal's input field:

![](https://i.imgur.com/SZc3371.png)

::: tip Important
`$modalAnswer` can *only* be used within the context of the [`modal` trigger](../Trigger/modal.md).  Attempting to use it elsewhere will result in an error or unexpected behavior.
:::

**Difficulty:** <Badge type="tip" text="Easy" vertical="middle" />

**Tags:** <Badge type="tip" text="modalAnswer" vertical="middle" /> <Badge type="tip" text="modal" vertical="middle" /> <Badge type="tip" text="modal answer" vertical="middle" />