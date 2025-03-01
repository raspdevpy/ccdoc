## `$modalID`

This variable returns the unique ID of the modal that activated the [modal trigger](../Trigger/modal.md).

**Usage:** `$modalID`

::: tip Important
You can only use `$modalID` **within** the context of a [modal trigger](../Trigger/modal.md).  It won't work anywhere else!
:::

**What does it do?**

When a user interacts with something that opens a modal (like clicking a button linked to a specific modal), `$modalID` will hold the ID of that modal. You can then use this ID to perform actions specific to the modal that was opened.

**Example:**

Imagine you have two modals: "Contact Form" and "Subscription Form".  When the "Contact Form" modal is triggered, `$modalID` will be set to something like `"contact-form-modal"`.  When the "Subscription Form" is triggered, `$modalID` will be set to `"subscription-form-modal"`.

**Function Difficulty:** <Badge type="tip" text="Easy" vertical="middle" />

**Tags:** <Badge type="tip" text="modalID" vertical="middle" /> <Badge type="tip" text="modal" vertical="middle" /> <Badge type="tip" text="modal id" vertical="middle" />