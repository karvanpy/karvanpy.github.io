---
title: enable syntax highlighting python code on html
date: 2023-08-13
tags: ['python', 'flask', 'django', 'jinja2template', 'vscode']
author: ervan kurniawan
---

![Thumbnail for blog posting about enabling python code syntax highlighting inside HTML file when working with Flask and Django framework.](https://i.imgur.com/v28M64A.png)

## Introduction
When we talk about web development in Python, we will think about Flask and Django.

The both framework was use Jinja2Template so we can write Python code in HTML file just like PHP language.

In default, Visual Studio Code doesn't provide syntax highlighting when we are working on Web Development in Flask or Django.

But, there is an extension that can coloring our Python code inside HTML.

The extension is "Better Jinja".


## Tutorial
**1 Install _Better Jinja_ extension**
> https://marketplace.visualstudio.com/items?itemName=samuelcolvin.jinjahtml

**2. Rename your HTML file**

We don't need to configure anything, but the only thing to do is add ".j2" at the end of every HTML file.

For example:
`index.html` > `index.html.j2`

Before:
![Python code wasn't colored inside HTML](https://i.imgur.com/ilAZtva.png)

After:
![Python syntax was showing up the highlighting](https://i.imgur.com/JFXEXXo.png)
