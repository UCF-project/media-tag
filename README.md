# Media Tag

## Build

We recommend the usage of [yarn](https://yarnpkg.com/) as package
manager but the library remains compatible with
[npm](https://www.npmjs.com/).

```sh
$ git clone git@git.rnd.alterway.fr:UCF/media_tag_v2.git  # Clone  the project
$ cd media_tag_v2      # Enter the project folder
$ yarn install         # Install dependencies
$ yarn run build       # Create ./dist folder with JS bundled files
```

## Usage

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Page with Media Tag</title>
</head>
<body>
	<media-tag
		src="image-without-extension"
        data-type="image"
        data-attr-width="300px"
        data-attr-height="200px"
        ></media-tag>
	<!-- Include Media Tag library -->
	<script type="text/javascript" src="media-tag.js"></script>
	<script>
		// The only way to use as library is with JavaScript.
		// You will need to select a DOM element that will be the wrapper
		// element, for example a div.
		// Then create a new MediaTag Object passing that element as
		// parameter.
		var mediaTagObj = mediaTag(document.querySelector('media-tag'));
	</script>
</body>
</html>
```

## Development

To start a web server and automatic builds when changing files you can
use:

```sh
$ yarn start
```

To run tests (linter, unit tests and test coverage) you can use:

```sh
$ yarn test
```

To build the documentation at `./dist/docs/` you can use:

```sh
$ yarn run build:docs
```

## Examples

To check out the examples you can start a webserver in the demo
folder. Make sure you have built the library before. Then, access in
your browser the webserver URL for example
`http://localhost:8080/plugin-crypto/plugin-crypto-image.html`.

```sh
$ git clone git@git.rnd.alterway.fr:UCF/media_tag_v2.git  # Clone  the project
$ cd media_tag_v2      # Enter the project folder
$ yarn install         # Install dependencies
$ yarn run build       # Create ./dist folder with JS bundled files
$ http-server ./demo   # Start any webserver at demo folder
```

You can also use the development server to visualize the examples. In
this mode there is no need to build the library since the development
server does an auto-build at start and at each time source file
changes. Again you can access it in your browser, with the webserver
URL, for example
`http://localhost:8080/plugin-crypto/plugin-crypto-image.html`.

```sh
$ git clone git@git.rnd.alterway.fr:UCF/media_tag_v2.git  # Clone  the project
$ cd media_tag_v2      # Enter the project folder
$ yarn install         # Install dependencies
$ yarn start           # Start dev webserver and auto-builds the library
```

# Media Tag Version 0.2

This is the repository for the contents of version 0.2 of Media Tag.
It is an architecture and functionality redesign of Media Tag v0.1.

## Why v0.2?

XWiki has a use case that could be covered by an implementation of
Media Tag. The use case is: given a URL with an encrypted PNG file at
`https://myserverwithmedias.org/encrypted-media`. Using the media-tag
as follows would provide an image (decrypted if the key is valid) to
final user.

```
<media-tag src="https://myserverwithmedias.org/encrypted-media" data-type="image/png" data-crypto-key="salsa20poly1305:sdHDIVsdiDHfishvsdhvdDSihvsCHDCShi">
```
To achieve such simplicity on the media-tag declaration (without
manifest for example) we must redesign Media Tag. We also think that
this is a good opportunity to make Media Tag more interesting to
general use. This change will not only help in the XWiki case but it
also may increase the chances of adoption by the community.

## Find more

You can understand better the differences from Media Tag v0.1 to v0.2
in our [proposal](docs/proposal.md) documentation.

Discussion about the integration (usage in a HTML page) of Media Tag
v0.2 is detailed at [integration](docs/integration.md) document.
