---
title: Eleventy
layout: post.njk
templateEngineOverride: md
---

# Hello post

This is a blog post

Clone repo

```bash
mkdir $HOME/git
cd $HOME/git
git clone https://github.com/serif/serif.github.io.git
cd serif.github.io
```

Create new node project

```bash
npm init -y
```

Install 11ty and Prism.js

```bash
npm install @11ty/eleventy --save-dev
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

Change scripts value in `package.json`

```json
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
  },
```

Create dirs

```bash
mkdir -p src/{_includes,blog,css,img}
```

Tell 11ty what dirs to use with `.eleventy.js`

```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addWatchTarget("./src/blog/");
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

```

Create base template at `src/_includes/base.njk`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <main>
    {{ content | safe }}
  </main>
</body>
</html>
```

Create post template at `src/_includes/post.njk` as a child of the base template

```html
---
layout: base.njk
---

<article>{{ content | safe}}</article>
```

Specify layout and tag for blog posts at `src/blog/blog.json`

```json
{
  "layout": "post",
  "permalink": "/{{ page.fileSlug }}/",
  "tags": "posts"
}
```

Create first post at `src/blog/first.md`

```md
---
title: First post
layout: post.njk
---

# Hello post

This is a blog post
```

Create `src/index.md`

```md
---
title: Website Title
layout: base.njk
templateEngineOverride: njk,md
---

# Hello world

## Posts

{% include "postlist.njk" %}
```


Create the postlink template fragment at `src/_includes/postlist.njk`

```html
{% for post in collections.posts %}
<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
```


Create `src/css/style.css`

```css
body {
  font-family: sans-serif;
}
```

Verify that site builds

```bash
npm start
```

![SERIF](/img/serif.png)
