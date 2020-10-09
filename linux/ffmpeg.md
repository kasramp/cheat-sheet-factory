---
title: ffmpeg
category: Linux
layout: 2017/sheet
updated: 2020-10-09
keywords:
    - "ffmpeg"
intro: |
  FFmpeg useful commands for recording and video editing
---

Shortcuts
---------
{: .-two-column}

## Cut videos

### Extract a 5 seconds video from 3-8 

```bash
$ ffmpeg -ss 00:00:03 -t 00:00:08 -i input.mp4 -async 1 cut.mp4
```

### Cut first X seconds from a video

```bash
$ ffmpeg -ss 10 -i input.mp4 -async 1 cut.mp4
``` 