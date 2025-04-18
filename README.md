# ccdoc
Custom Command Documentation

# How to contribute?
You can contribute by forking this repo, [click here](https://github.com/raspdevpy/ccdoc/fork), modify the changes, then Pull request.
* Some .md files ends with _ai.md, which means the file was generated with AI using the original file content, for example AI used user.md to generate user_ai.md. You can modify these files directly if it contain wrong generated information compared to the orginal file. you can modify the original, if the original file contain wrong information or missing one, after merge we will make AI regenerate the file with _ai.md with the new file.
* The docs, will show _ai.md files if it exists instead of the original one, otherwise it will use the original one.

# How to run?
Required: Node 18.x, npm

1. run `git clone https://github.com/raspdevpy/ccdoc`
2. run `npm install`
3. run `npm run dev`, and head to `https://localhost:8080`

