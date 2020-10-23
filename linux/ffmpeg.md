---
title: FFmpeg
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
{: .-one-column}

## Cut videos

### Extract a 5 seconds video from 3-8 

```bash
$ ffmpeg -ss 00:00:03 -t 00:00:08 -i input.mp4 -async 1 cut.mp4
```

### Cut first X seconds from a video

```bash
$ ffmpeg -ss 10 -i input.mp4 -async 1 cut.mp4
``` 

## Mixing

### Mix a video with an audio

```bash
$ ffmpeg -i original_video.mkv -i clean_audio.mp3 -c:v copy -c:a flac -map 0:v:0 -map 1:a:0 out.mkv
```

## Recording

### Screencasting (software encoding) with dynamic screen size

```bash
$ ffmpeg -y -f x11grab -s `xdpyinfo | grep 'dimensions:'| awk '{print $2}'` -i :0.0 -f pulse -i default -c:v libx264 -r 48 -c:a flac out.mkv
```

### Screencasting (hard encoding) with provided screen size

```bash
$ ffmpeg -f alsa -i default -c:a flac \
    -vaapi_device /dev/dri/renderD128 -y -f x11grab -s 1920x1080  -i :0.0+1366,0 \
    -vf 'format=nv12|vaapi,hwupload' -c:v h264_vaapi -preset ultrafast -crf 0 \
    -tune film -r 60 out.mkv
```

### Podcast recording

```bash
$ ffmpeg -f pulse -i 2 -ac 2 -acodec libmp3lame -ab 320k out.mp3
```