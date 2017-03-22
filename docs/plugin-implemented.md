## Implemented plugins

### Image

```html
<media-tag
	src="image-without-extension"
	data-type="image"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Audio

```html
<media-tag
	src="audio.mp3"
	data-type="audio"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Video

```html
<media-tag
	src="video.mp4"
	data-type="video"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>
```

### Pdf

```html
<media-tag
	src="file.pdf"
	data-type="pdf"
	></media-tag>
```

### Crypto

```html
<h1>Image:</h1>
<media-tag
	id="image"
	data-crypto-type="image"
	data-crypto-src="encrypted-image"
	data-crypto-key="xsalsa20poly1305:1O9hQmf0QJkjvGnK+q0JLamus1IUAhhqZGWRa1dMMlk=:avR58kfJOeKb0PJ9apcDknTZJ4CilErg"
	data-attr-width="300px"
	data-attr-height="200px"
	></media-tag>

<h1>Video:</h1>
<media-tag
	id="video"
	data-crypto-type="video"
	data-crypto-src="encrypted-video"
	data-crypto-key="xsalsa20poly1305:gZO+B16pTH5vyvzL9d/PIljh1JU8teJWEf7GHX/KA0g=:WTG3GM1y9yWsGPo3i0aQcVyDiDuofCUE"
	data-attr-width="300px"
	data-attr-height="200px"
	data-attr-controls="controls"
	></media-tag>

<h1>Pdf:</h1>
<media-tag
	id="pdf"
	data-crypto-type="pdf"
	data-crypto-src="encrypted-pdf"
	data-crypto-key="xsalsa20poly1305:r0YjVXdLRrLprrocK60z5Pp+DRzBzokh6vmZEDGL5ic=:I+eyjXjsMu8zR+3KtGAWh96HNFaYMbkM"
	data-attr-style="border: 1px solid black"
	></media-tag>
```

### DASH - DRM

```html
<media-tag
	id="dash"
	data-crypto-type="dash"
	data-crypto-src="bbb_encrypt/bbb_dash.mpd"
	data-crypto-key="clearkey:0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e"
	data-attr-width="1240px"
	data-attr-height="720px"
	data-attr-controls="true"
	data-attr-autoplay="true"
	></media-tag>
```
