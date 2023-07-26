---
title: debugpy>=x.x.x distribution was not found and is required by ipykernel
date: 2023-07-26
tags: ['spyder', 'python']
author: ervan kurniawan
---

## Introduction
Spyder IDE is a powerful Python IDE that is often used for scientific computing and data analysis. However, some users have reported an error when trying to run Spyder IDE on Manjaro Linux. This error is caused by a missing dependency, debugpy.

## Problems
I just wanna install SpyderIDE in my Manjaro Linux with `sudo pacman -S spyder`, but when try to launch the **spyder** I just got nothing.

Then, I trying to launch through terminal by running `spyder`, then I got error logs like this:
```
...
...
...

File "/usr/lib/python3.11/site-packages/pkg_resources/__init__.py", line 829, in resolve
    dist = self._resolve_dist(
           ^^^^^^^^^^^^^^^^^^^
  File "/usr/lib/python3.11/site-packages/pkg_resources/__init__.py", line 870, in _resolve_dist
    raise DistributionNotFound(req, requirers)
pkg_resources.DistributionNotFound: The 'debugpy>=1.6.5' distribution was not found and is required by ipykernel
```

![debugpy error when run spyder ide](https://i.imgur.com/ck5Ub82.png)

This error means that the debugpy package is not installed on your system. debugpy is a Python library that provides debugging support for Python applications. It is required by Spyder IDE in order to provide debugging features.

## Solution
In this case, I use Manjaro (based on Arch Linux) we can install debugpy through this command:
`sudo pacman -S python-debugpy`

In general (Windows/Linux/macOS) we can install through PIP:
`pip install debugpy`


