# Contributing to the Documentation

This guide outlines how to contribute to the project documentation.  We appreciate your help in making our documentation clear, accurate, and comprehensive!

## Contribution Guidelines

Please adhere to the following guidelines when contributing:

*   **Use the Template:**  A template ensures consistency across all function documentation. You can find the template [here](./function_template.md).
*   **Clear and Correct English:**  Please use proper English grammar and spelling. Avoid slang and profanity.
*   **Descriptive Pull Requests:** When submitting a pull request, clearly explain the changes you've made in the title and description.  Be specific about what you've added, modified, or removed.
*   **Document What You Know:**  Only document functions you are familiar with.  Accuracy is paramount.  Double-check your work to avoid introducing errors.

### Editing Existing or Adding Documentation

You can contribute by editing existing pages or adding new ones directly through our GitHub repository.

#### Prerequisites

*   **GitHub Account:** You'll need a [GitHub account](https://github.com).
    *   New to GitHub?  Check out the official GitHub [documentation](https://docs.github.com/en) for tutorials and guidance.
*   **Markdown Basics:**  A basic understanding of [Markdown](https://www.markdownguide.org/cheat-sheet/) is required for formatting.

#### Adding Documentation for a New Function

Here's a step-by-step guide to adding documentation for a function that doesn't already have a page:

1.  **Check `undone.md`:**  Before you start, check the `undone.md` file in the [repository](https://github.com/raspdevpy/ccdoc/tree/main/guide) to ensure that nobody else is already documenting the function.  This prevents duplicate effort.

    *   _Example: You want to document the function `$botCount`._

2.  **Fork the Repository:** Create your own copy of the repository by forking it.
    ![](https://i.ibb.co/2kPRCX0/image.png)

3.  **Create a New File:** In your forked repository, navigate to the appropriate folder (usually `guide`) and create a new file named after the function, using the `.md` extension.

    *   _Example: Create a file named `botCount.md`._
    ![](https://i.ibb.co/BLCbs7q/image.png)

4.  **Use the Template and Populate It:** Use the [template](./function_template.md) as a starting point. Fill in the template with accurate and detailed information about the function.  You can also refer to existing function documentation files for inspiration.
    ![](https://i.ibb.co/X5M0s01/image.png)

5.  **Save and Commit:**  Save your changes and commit them to your forked repository with a descriptive commit message.
    ![](https://i.ibb.co/8XvCCdm/image.png)

6.  **Update `undone.md`:** Go to `undone.md` and move the function name from the `undone` list to the `done` list. This indicates that the documentation is complete.
    ![](https://i.ibb.co/85PxQjM/image.png)

7.  **Create a Pull Request:** Once you've completed all your changes (adding/changing documentation for one or more functions), create a pull request from your forked repository to the main repository.  We will review your pull request.
    ![](https://i.ibb.co/p3RCGYf/image.png)
    ![](https://i.ibb.co/R9fJz7g/image.png)

### Need Help?

For any additional information or assistance, please contact a moderator or developer in our Discord server!