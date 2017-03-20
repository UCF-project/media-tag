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

### Crypto

```html
<media-tag
	id="image"
	data-crypto-type="image"
	data-crypto-src="encrypted-image"
	data-crypto-key="xsalsa20poly1305:1O9hQmf0QJkjvGnK+q0JLamus1IUAhhqZGWRa1dMMlk=:avR58kfJOeKb0PJ9apcDknTZJ4CilErg"
	data-attr-width="300px"
	data-attr-height="200px"
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
