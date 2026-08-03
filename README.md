# Custom Command

Hello! Welcome to our official documentation repository.

If you'd like to read our documentation, please head to [doc.ccommandbot.com](https://doc.ccommandbot.com).  
If you'd like to contribute, here's how:

## Single Files

For small edits to a few files, you can navigate to the page you want to edit, scroll down and click the `Improve This Page!` button.  
After making your changes, click the `Commit changes` button.  
This will automatically fork the repository and create a new branch for your edit.  
Finally, click the `Open Pull Request` button to submit your changes for review.

## Multiple Files

For larger changes involving many files, we recommend using your IDE and the dev server so you can preview how everything will look.

## Running the Dev Server

### Requirements

[Git](https://git-scm.com/install/),  
[Node.js](https://nodejs.org/en/download/current) `>=22.18.0` and [pnpm](https://pnpm.io/installation), or [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Steps

1\. [Fork this repository](https://github.com/raspdevpy/ccdoc/fork)  
2\. Clone your forked repository to your device:

```bash
git clone https://github.com/YOUR_USERNAME/ccdoc
```

Or using SSH:

```bash
git clone git@github.com:YOUR_USERNAME/ccdoc.git
```

### Node.js
 
3\. Install dependencies:
 
```bash
pnpm install
```

4\. Start the dev server and go to [localhost:8080](http://localhost:8080):

```bash
pnpm dev
```

### Docker Compose

3\. Start the Docker server and go to [localhost:8080](http://localhost:8080):

```bash
docker compose up
```

## Saving Changes

After your changes are done, you need to update your fork.

1\. Add all files for commit:

```bash
git add .
```

2\. Commit with your message:

```bash
git commit -m "Updated category Member"
```

3\. Push changes to your fork:

```bash
git push
```

To send these changes for review, open your cloned fork on GitHub and click the `Open Pull Request` button.

## Where Things Live

The site runs on [Fumadocs](https://fumadocs.dev) (Next.js), exported as a static build.

| Path | What it is |
| --- | --- |
| `content/docs/` | Every page, as MDX. The URL matches the file path. |
| `content/docs/(functions)/` | Function reference. The `(functions)` folder groups them in the sidebar without appearing in the URL — `Member/kick.mdx` is served at `/Member/kick`. |
| `content/docs/**/meta.json` | Sidebar titles and page ordering for that folder. |
| `components/` | `Badge`, `Arg`, and the Discord message components used in pages. |
| `lib/remark/` | Build-time content rules: cooldown sections, `$function` auto-linking, cached remote images. |
| `data/cooldowns.json` | Drives the generated "Function Cooldown" section on function pages. |

### Writing a page

Each page needs a `title` in its frontmatter — it renders as the page heading, so don't repeat it as an `# H1` in the body:

```mdx
---
title: "$myFunction"
---

What the function does.

::: is not available — use `<Callout>` and `<Accordion>` instead:

<Callout type="info" title="Note">
Something worth knowing.
</Callout>
```

Because pages are MDX, a literal `{` or a stray `<` in prose must be escaped as `\{` and `\<`.
