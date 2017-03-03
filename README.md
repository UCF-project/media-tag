# Media Tag Version 0.2

This is the repository for the contents of version 0.2 of Media Tag.
It is a architecture and functionality redesign of Media Tag v0.1.

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

# Find more

You can understand better the differences from Media Tag v0.1 to
v0.2 in our [proposal](docs/proposal.md) documentation.

Discussion about the integration (usage in a HTML page) of Media Tag v0.2 is
detailed at [integration](docs/integration.md) document.
