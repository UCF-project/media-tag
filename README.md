
# Why?

XWiki has a use case that could be covered by an implementation of Media Tag.
The use case is: given a URL with an encrypted PNG file at `https://myserverwithmedias.org/encrypted-media`.
Using the media-tag as follows would provide an image (decrypted if the key is valid) to final user.

```
<media-tag src="https://myserverwithmedias.org/encrypted-media" data-type="image/png" data-crypto-key="salsa20poly1305:sdHDIVsdiDHfishvsdhvdDSihvsCHDCShi">
```
To achieve such simplicity on the media-tag declaration (without manifest for example) we must redesign Media Tag.
We also think that this is a good opportunity to make Media Tag more interesting to general use.
This change will not only help in the XWiki case but it also may increase the chances of adoption by the community.

# Changes Proposal

## Content Parsers

No more extensions for content parses.
The only extension that remains (like in html for videos, images, etc) is the URL parser.
This one will then defines the mime type.
The introduction of mime type on "type" property.
The idea is that Media Tag behaves exactly like the to the current behavior of media elements by default on the browser (img, video, audio, etc).

## Content Types

Table from Media Tag v0.1:

Identifier | Description | Example Expected Content
-----------|-------------|--------------------------------------------
dash-audio | Reads two dash manifests, one with video only and one with audio only. It is able to degrade to audio only. | { "urlVideo": "http://0.0.0.0/video_only.mpd", "urlAudio": "http://0.0.0.0/audio_only.mpd", "contentType": "dash-audio" }
video-dash | Read a dash manifest file. Load DASH.js library. | "http://0.0.0.0/video.mpd"
html | HTML content | "&lt;p&gt;Any HTML content surrounded by tag&lt;/p&gt;"
image | Image content | "http://domain/image.png"
text | Text content | "http://domain/image.txt"
videojs | Allows to include video object with external video.js library | {"sources": [{ "src": "http://domain/video.mpd", "type": "application/dash+xml"}], "contentType": "videojs"}
video | Video content | "http://domain/video.mp4"
videoObj | Allows to include video object | {"sources": [{ "src": "http://domain/video.mp4", "type": "video/mp4"}], "contentType": "videoObj"}
dashAudioHtmlBoxAudioOnly | Message that appears when dash-audio can play only audio | "Message to display"
dashAudioHtmlBoxInsufficient | Message that appears when dash-audio can not play any media| "Message to display"
oembed | HTML response from oEmbed content request | "&lt;iframe src="http://domain/path"&gt;&lt;/iframe&gt;"
shakaPlayer | Playing videos using Google's Shaka Player. To work, the content **MUST** contains ```"contentType": "shakaPlayer"``` and ```"shakaPlayerExtension": "shakaPlayer"```. If the ```src``` not contains valid url an error should appear into browser's console. | {<br>&nbsp;&nbsp;&nbsp;&nbsp;"contentType": "shakaPlayer",<br>&nbsp;&nbsp;&nbsp;&nbsp;"shakaPlayerExtension": "shakaPlayer",<br>&nbsp;&nbsp;&nbsp;&nbsp;"src": "https://domain/dashed-video.mpd"<br>}


Content types with the new Media Tag proposal:

### dash-audio

```html
<media-tag data-render-lib="dashaudio">
	<source src="http://0.0.0.0/video_only.mpd" data-dashaudio-urlvideo>
	<source src="http://0.0.0.0/audio_only.mpd" data-dashaudio-urlaudio>
</media-tag>
```

### video-dash

```html
<media-tag src="http://0.0.0.0/video.mpd"/>
```

### html

```html
<media-tag>
	HTML contents
	<div>A div</div>
	<div>A span</div>
</media-tag>
```

### image

```html
<media-tag src="http://0.0.0.0/image.png"/>
```

### text

```html
<media-tag src="http://0.0.0.0/text.txt"/>
```

### video-js

:question: how to include videojs skin and other customizations?

```html
<media-tag data-render-lib="videojs" src="http://0.0.0.0/video.mpd"/>
```

### video

```html
<media-tag src="http://0.0.0.0/video.mp4"/>
```

### videoObj

:question: how differentiate multiple sources of same video and multiple videos with one source each?

```html

<!-- This will normally create 3 video tags one for each source -->
<!-- Which is bad because differs from normal <video> tag behavior -->
<media-tag>
	<source src="http://0.0.0.0/video.webm" type="video/webm">
	<source src="http://0.0.0.0/video.mp4" type="video/mp4">
	<source src="http://0.0.0.0/video.ogv" type="video/ogg">
</media-tag>

<!-- Suggestion 1: use name to group sources (like in <input type="radio"/>) -->
<!-- This will create 1 video tag with all 3 sources -->
<media-tag>
	<source name="video" src="http://0.0.0.0/video.webm" type="video/webm">
	<source name="video" src="http://0.0.0.0/video.mp4" type="video/mp4">
	<source name="video" src="http://0.0.0.0/video.ogv" type="video/ogg">
</media-tag>

<!-- Suggestion 1: use name to group sources (like in <input type="radio"/>) -->
<!-- This will create 1 video tag with all 3 sources -->
<media-tag>
	<source name="video" src="http://0.0.0.0/video.webm" type="video/webm">
	<source name="video" src="http://0.0.0.0/video.mp4" type="video/mp4">
	<source name="video" src="http://0.0.0.0/video.ogv" type="video/ogg">
</media-tag>




```

### dashAudioHtmlBoxAudioOnly

:exclamation: TO BE REMOVED

### dashAudioHtmlBoxInsufficient

:exclamation: TO BE REMOVED

### oembed

```html
<media-tag data-render-lib="oembed" src="http://myoembedserver.org/myoembedcontent"/>

<media-tag>
	<source data-render-lib="oembed" src="https://gfycat.com/WarmheartedAnyFairyfly">
	<source data-render-lib="oembed" src="http://soundcloud.com/forss/flickermood">
</media-tag>
```

### shakaPlayer

```html
<media-tag data-render-lib="shaka" src="http://0.0.0.0/video.mpd"/>
```

## Demos

The best way to define the new API is to transform all examples.

### Usage - adding-extensions

```json
{
  "medias":  [
    {
      "content": "<p>HTML Sample</p>",
      "rules": {
        "network": {
          "up": {
            "style": "color:green"
          },
          "down": {
            "style": "color:red"
          }
        }
      }
    }
  ]
}
```

```html
<media-tag>
	<p id="content1">HTML Sample</p>
	<rules for="content1">
		<network>
			<up style-set="color:green"/>
			<down style-set="color:red"/>
		</network>
	</rules>
</media-tag>
```


### Usage - content-network

```json
{
  "medias": [{
    "content": "/tests/assets/media/video-only.mpd",
    "rules": {
      "network": {
        "up": {
          "visibility": true
        },
        "down": {
          "visibility": false
        }
      }
    }
  }, {
    "content": "/tests/assets/media/cube.png",
    "rules": {
      "network": {
        "up": {
          "visibility": false
        },
        "down": {
          "visibility": true
        }
      }
    }
  }]
}
```

```html
<media-tag>
	<source id="video" src="/tests/assets/media/video-only.mpd">
	<img id="image" src="/tests/assets/media/cube.png"/>
	<rules for="video">
		<network>
			<up visibility="true"/>
			<down visibility="false"/>
		</network>
	</rules>
	<rules for="image">
		<network>
			<up visibility="false"/>
			<down visibility="true"/>
		</network>
	</rules>
</media-tag>
```

### Content types - video-dash-audio

```json
{
  "medias":  [
    {
      "content": {
        "urlVideo": "/tests/assets/media/video-only.mpd",
        "urlAudio": "/tests/assets/media/audio-only.mpd",
        "contentType": "dash-audio"
      },
      "rules": {
        "bandwidth": {
          "insufficient": {
            "playAudio": false,
            "playVideo": false,
            "playSync": false
          },
          "audio": {
            "playAudio": true,
            "playVideo": false,
            "playSync": false
          },
          "video": {
            "playAudio": true,
            "playVideo": true,
            "playSync": true
          }
        },
        "network": {"up": {"visibility": true}, "down": {"visibility": false}}
      }
    }, {
      "content": "<div class=\"divWarnMessage\">We detect that your bandwidth suffice to play only audio content.</div>",
      "rules": {
        "bandwidth": {
          "insufficient": {
            "visibility": false
          },
          "audio": {
            "visibility": true
          },
          "video": {
            "visibility": false
          }
        },
        "network": {"up": {"visibility": true}, "down": {"visibility": false}}
      }
    }, {
      "content": "<div class=\"divWarnMessage\">We detect that your bandwidth is insufficient to play the content.</div>",
      "rules": {
        "bandwidth": {
          "insufficient": {
            "visibility": true
          },
          "audio": {
            "visibility": false
          },
          "video": {
            "visibility": false
          }
        },
        "network": {"up": {"visibility": true}, "down": {"visibility": false}}
      }
    }, {
      "content": "/tests/assets/media/cube.png",
      "rules": {
        "network": {"up": {"visibility": false}, "down": {"visibility": true}}
      }
    }
  ]
}
```

```html
<media-tag>
	<source id="video"  src="http://0.0.0.0/video_only.mpd" data-dashaudio-urlvideo>
	<source for="video" src="http://0.0.0.0/audio_only.mpd" data-dashaudio-urlaudio>
	<rules for="video">
		<network>
			<up visibility="true"/>
			<down visibility="false"/>
		</network>
		<bandwidth>
			<video playAudio="true" playVideo="true" playSync="true"/>
			<audio playAudio="true" playVideo="false" playSync="false"/>
			<insufficient playAudio="false" playVideo="false" playSync="false"/>
		</bandwidth>
	</rules>
	<div id="messageAudioOnly">We detect that your bandwidth suffice to play only audio content.</div>
	<rules for="messageAudioOnly">
		<network>
			<up visibility="true"/>
			<down visibility="false"/>
		</network>
		<bandwidth>
			<video visibility="false"/>
			<audio visibility="true"/>
			<insufficient visibility="false"/>
		</bandwidth>
	</rules>
	<div id="messageCantPlay">We detect that your bandwidth is insufficient to play the content.</div>
	<rules for="messageCantPlay">
		<network>
			<up visibility="true"/>
			<down visibility="false"/>
		</network>
		<bandwidth>
			<video visibility="false"/>
			<audio visibility="false"/>
			<insufficient visibility="true"/>
		</bandwidth>
	</rules>
	<source id="image" src="/tests/assets/media/cube.png">
	<rules for="image">
		<network>
			<up visibility="false"/>
			<down visibility="true"/>
		</network>
	</rules>
</media-tag>
```
