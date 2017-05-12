## Implemented plugins

### Image

```html
<media-tag
	src="image-without-extension"
	data-type="image/(png|jpg|jpeg|gif)"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Audio

```html
<media-tag
	src="audio.mp3"
	data-type="audio/mp3"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Video

```html
<media-tag
	src="video.mp4"
	data-type="video/mp4"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Pdf

```html
<media-tag
	src="file.pdf"
	data-type="application/pdf"
	></media-tag>
```

### Crypto

```html
<h1>Image:</h1>
<media-tag
	id="image"
	data-type="image/(png|jpg|jpeg|gif)"
	src="encrypted-image"
	data-crypto-key="algorithm:avR58kfJOeKb0PJ9apcDknTZJ4CilErg"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>

<h1>Video:</h1>
<media-tag
	id="video"
	data-type="video/(mp4|ogg|webm)"
	src="encrypted-video"
	data-crypto-key="algorithm:WTG3GM1y9yWsGPo3i0aQcVyDiDuofCUE"
	data-attr-width="300px"
	data-attr-height="200px"
	data-attr-controls="true"
	></media-tag>

<h1>Pdf:</h1>
<media-tag
	id="pdf"
	data-type="application/pdf"
	src="encrypted-pdf"
	data-crypto-key="algorithm:I+eyjXjsMu8zR+3KtGAWh96HNFaYMbkM"
	data-attr-style="border: 1px solid black"
	></media-tag>
```

### DASH - DRM

```html
<media-tag
	id="dash"
	data-type="application/xml+dash"
	src="bbb_encrypt/bbb_dash.mpd"
	data-clear-key="0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e"
	data-attr-width="1240px"
	data-attr-height="720px"
	data-attr-controls="true"
	data-attr-autoplay="true"
	></media-tag>
```
