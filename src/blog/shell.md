---
title: Shell Tricks
layout: post.njk
templateEngineOverride: md
---

This is a blog post

Automatically list directory contents after changing directories with `cd`. The `builtin` keyword helps the function reach the original command instead of starting an infinite loop.

```sh
cd() {
    builtin cd "$@"
    ls --color --group-directories-first -Xh
}
```
