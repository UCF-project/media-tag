import React from 'react';
import Page from '../containers/Page.jsx';
import {Component as MediaTag} from '../../www/assets/dist/media-tag-react.js';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
	<Page class={'flex fit-width page column background-grey'}>
	<PluginBlock 
          htmlTitle={'Crypto'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Crypto plugin is a special plugin categorized as filter. <br />
                This plugin is used to decrypt a specific content. <br />
                It allows users to provide their own decryption algorithms. <br />
              </p>
              <h4>Usage</h4>
              <p>
                To render an image, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b>, a <b>data-type</b> and a <b>data-crypto-key</b>. 
                Other attributes are optional. <br />
              </p>
              <pre className={'code-block'}>
{`  <media-tag
    id="video"
    data-type="video/mp4"
    src="./assets/data/videos/encrypted/video-encrypted"
    data-crypto-key="salsa20poly1305:gxGQi0zzmj/w8GrV+/xGgaMI"
    data-attr-width="600px"
    data-attr-height="400px"
    data-attr-controls=true>
  </media-tag>
`}
              </pre>
              <h4>How add algorithms</h4>
              Algorithms can be add by two differents ways
              <h5> By the build </h5>
              <p>
                The first step define your javascript file algorithm by exportating a function which treats with an instance of media object. <br />
              </p>
              <em>example :</em><br />
              <pre className={'code-block'}>
{`  function myAlgorithm(mediaObject) {
    /* Do your stuff ... When your process is finished call */

    /* /!\ And when your process is done your have to call /!\*/
    mediaObject.return();

    /* or after importating MediaTagAPI */
    MediaTagAPI.processingEngine.return(mediaObject);
  }

  module.exports = myAlgorithm;

`}
              </pre>
              <h5> By the configuration </h5>
              <p>
                With special definition of the crypto plugin you can create externals algorithms and pass them to the plugin. <br />
              </p>
              <em>configuration.js :</em>
              <pre className={'code-block'}>
{`  Inside event.configuration.plugins

  crypto: {
    matcher: {
      process: (self, mediaObject) => {
        return mediaObject.hasAttribute('data-crypto-key');
      }
    },
    filter: {
      algorithms: [
        {
          scheme: 'cryptpad:',
          src: '/algorithms/cryptpad.js',
          run: null
        },
        {
          scheme: 'salsa20poly1305:',
          src: '/algorithms/salsa20poly1305.js',
          run: null
        }
      ],
      types: [
        'image',
        'audio',
        'video',
        'application'
      ],
      subtypes: [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'svg+xml',
        'mp3',
        'ogg',
        'webm',
        'wav',
        'mp4',
        'dash+xml',
        'pdf'
      ],
      isAllowedMediaType: (self, type) => {
        const mimeTypes = self.types.map(type => {
          return self.subtypes.map(subtype => {
            return type + '/' + subtype;
          });
        }).reduce((array, next) => {
          return array.concat(next);
        });

        if (mimeTypes.includes(type)) {
          return true;
        }
        return false;
      },
      process: (self, mediaObject) => {
        const cryptoUrl = mediaObject.getAttribute('data-crypto-key');

        const scheme = self.algorithms.map(algorithm => {
          return algorithm.scheme;
        }).filter(scheme => {
          return cryptoUrl.includes(scheme);
        }).reduce((result, next) => {
          return result || next;
        });

        if (!scheme) {
          throw new Error('No matching scheme found');
        }

        const key = cryptoUrl.replace(scheme, '');

        const algorithm = self.algorithms.filter(algorithm => {
          return algorithm.scheme === scheme;
        }).reduce((result, next) => {
          return result || next;
        });

        mediaObject.setAttribute('data-crypto-key', key);

        if (!algorithm) {
          throw new Error('No algorithm for the scheme ' + scheme);
        }

        if (!algorithm.run && algorithm.src) {
          mediaObject.loader.algorithm(algorithm.src).then(algorithm => {
            algorithm.run = algorithm;
            algorithm.run(self, mediaObject);
          });
        } else if (algorithm.run) {
          algorithm.run(self, mediaObject);
        } else {
          throw new Error(
            'No source and no algorithm to run for self scheme' + scheme);
        }
      }
    }
  }

`}
              </pre>
              <br />
              <em>salsa20poly1305.js :</em>
              <pre className={'code-block'}>
{` Some classes and functions ...

  (function () {
    const event = new Event('Algorithm');

    event.scheme = 'salsa20poly1305';
    event.algorithm = (plugin, mediaObject) => {
      const src = mediaObject.getAttribute('src');
      const strKey = mediaObject.getAttribute('data-crypto-key');
      const cryptoKey = Crypto.getKeyFromStr(strKey);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = () => {
        const arrayBuffer = xhr.response;
        if (arrayBuffer) {
          const u8 = new Uint8Array(arrayBuffer);
          const binStr = Crypto.decrypt(u8, cryptoKey);
          const url = DataManager.getBlobUrl(
              binStr, mediaObject.getMimeType());

          const decryptionEvent = new Event('decryption');
          decryptionEvent.blob = new Blob([binStr], {
            type: mediaObject.getMimeType()
          });
          window.document.dispatchEvent(decryptionEvent);
          mediaObject.setAttribute('src', url);
          mediaObject.removeAttribute('data-crypto-key');
          mediaObject.return();
        }
      };
      xhr.send(null);
    };

    document.dispatchEvent(event);
  })();

`}
              </pre>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit-width v-aligned h-aligned"
              data-attr-className="fit"
              data-type="video/mp4"
              src="./assets/data/videos/encrypted/video-encrypted"
              data-crypto-key="salsa20poly1305:gxGQi0zzmj/w8GrV+/xGgaMI">
            </MediaTag>
          )}
        />
	</Page>
);
