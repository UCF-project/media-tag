# Filters

A filters musts :
* Do structural modification on its MediaObject.
* Bring back the MediaObject to the RunningEngine.

## Crypto

Crypto is a filter for data decryption.
Crypto can register several algorithm to decrypt a content.
Each algorithm takes the MediaObject as entry and must return it to RunningEngine with its return() method when the filter processing is ended.

Algorithms are identified by a scheme declared at registration : 
`CryptoFilter.FunctionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);`

The scheme must by placed into `data-crypto-key` :
`data-crypto-key="salsa20poly1305:gxGQi0zzmj/w8GrV+/xGgaMI"`

## Clear-Key

Clear-Key is filter for dedicated to MPEG-DASH and DRM.
Clear-Key as a single behavior, take `data-clear-key` from MediaObject, split it into encryption `id` and `key`, add these data to MediaObject for the futur rendering and remove `data-clear-key` from the MediaObject before bringing it back to RunningEngine.

Example :
`data-clear-key="0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e"`
