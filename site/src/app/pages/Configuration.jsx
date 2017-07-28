import React from 'react';
import Page from '../containers/Page.jsx';

export default (
    <Page class='flex fit-width page column background-grey scrollable'>
      <div>
        <h1>Configuration</h1>
        <div className="tb-padded">
          <div className="left column lr-padded">

            <h3 className="tb-padded">Introduction</h3>
            <p>
              Media-Tag allows users to configure it.<br />
              A configuration is passed by a configuration file which is used by the library to modify its nominal operations.<br />
              It permits create or modify plugins, add permissions on it, define a default behavior ... <br />
            </p>

            <h3 className="tb-padded">Structure</h3>
            <p>
              You need to create a configuration file like "configuration.js".<br />
            </p>
            <em>example:</em>
            <pre className={'code-block'}>
{`  (function () {
      const event = new Event('Configuration');

      event.configuration = {
        # Needed configuration
      };

      document.dispatchEvent(event);
    })();
`}
            </pre>
            <br />
            <p>
              A configuration need to be enclosed inside a event.configuration key to permits library a dynamical loading.<br />
              The library handle dynamical modifications of the DOM and introduce a new <code><media-tag /></code> starts a new processing which concerns only unprocessed tags.<br />
              So introduce a new configuration at run time updates the last one by overwritting.<br />
            </p>

            <h3 className="tb-padded">Dependencies</h3>
            <p>
              Media-tag is modular and all its features are turned as plugins.<br />
              Usual media rendering like image, audio, video doesn't use dependencies.<br />
              Other ones like pdf, dash or the crypto filter use external dependencies to work.<br />
              The configuration allows to define directly all needed dependencies into one field.<br /><br />
            </p>
            <em>example :</em><br /><br />
            <pre className={'code-block'}>
{`  event.configuration = {
      dependencies: [
        'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.1.3/shaka-player.compiled.js',
        'https://cdnjs.cloudflare.com/ajax/libs/tweetnacl/1.0.0/nacl.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js',
        '/ext-lib/nacl-util.min.js'
      ]
    };
`}
            </pre>
            <br />
            <p>
              Dependencies are loaded only one time, Media-tag handles a caching system to avoid multiple loadings.
            </p>
            <h3 className="tb-padded">Permissions</h3>
            <p>
              Default Media-Tag build contains basic plugins like image, audio, video, pdf, dash, crypto ...<br /><br />
              In some usage context Media-Tag user don't want let their custom use every plugins.
              So, to have less operations to do to disable plugins you could set permission on it.
              Every plugin with no permission is considered as allowed.<br /><br />
              Existing permissions are allowed, required and forbidden.<br /><br />
              Allowed is the default plugin status. No specified permission is the same than allowed.<br />
              Required is a specific permission used in the case of dynamic plugin servering that preload a plugin before it is really needed.<br />
              Forbidden disable plugin usage, if it's applied to a rendering plugin them the Media-Tag processing engine must applies it default rendering behavior.<br /><br />
            </p>

            <em>example:</em><br /><br />

            <pre className={'code-block'}>
{`  permission: {
      image: 'forbidden',
      audio: 'forbidden',
      video: 'forbidden'
    }
`}
            </pre>
          
            <h3 className="tb-padded">Processing Engine</h3>
            <p>
              You can configure the default processing engine behavior.
            </p>
            <em>example:</em>
            <pre className={'code-block'}>
{`  processing-engine: {
      defaultPlugin: 'failure'  # The plugin identified as 'failure' will be used as default rendering one.
    }
`}
            </pre>
            <p>
              Currently, only the default plugin field from processing-engine is configurable.<br /><br />
            </p>

            <h3 className="tb-padded">Plugins</h3>
            <p>
              Sometime plugins needs some configuration. <br />
              Pdf plugin is in this case and can have the pdfjs viewer as main rendering method. <br />
              This example illustrate how define and configure the pdf plugin : <br />
            </p>
            <pre className={'code-block'}>
{`  event.configuration = {
    /*
     * Defines several plugins here
     */
    plugins: {
      /*
       * A plugin group identified by 'pdf' is declared 
       */
      pdf: {
        /*
         * A matcher plugin is defined
         */
        matcher: {
          types: [
            'application'
          ],
          subtypes: [
            'pdf'
          ],
          process: (self, mediaObject) => {
            const hasType = self.types.includes(mediaObject.getType());
            const hasSubtype = self.subtypes.includes(mediaObject.getExtension());

            return hasType && hasSubtype;
          }
        },
        /*
         * A renderer plugin is defined
         */
        renderer: {
          viewer: '/pdfjs/web/viewer.html',
          mode: 'pdfjs',
          process: (self, mediaObject) => {
            const url = mediaObject.getAttribute('src');
            const iframe = document.createElement('iframe');

            /**
             * Default dimention for the iframe if nothing is specified.
             */
            if (!mediaObject.getAttribute('data-attr-width')) {
              iframe.setAttribute('width', '100%');
            }
            if (!mediaObject.getAttribute('data-attr-height')) {
              iframe.setAttribute('height', document.body.scrollHeight);
            }

            /**
             * When no viewer is set, the pdf is rendered by the browser.
             */
            if (!self.viewer) {
              self.mode = 'default';
            }

            switch (self.mode) {
              case 'pdfjs': {
                const viewerUrl = 'self.viewer' + '?file=' + url;
                const xhr = new XMLHttpRequest();

                xhr.onload = () => {
                  if (xhr.status < 400) {
                    iframe.src = viewerUrl;
                  } else {
                    console.warn('The pdfjs viewer has not been found ... The browser viewer will be used by default');
                    iframe.src = url;
                  }
                };
                xhr.open('HEAD', viewerUrl, true);
                xhr.send();

                break;
              }
              default: {
                iframe.src = url;
              }
            }

            mediaObject.utilsSetAllDataAttributes(iframe);
            mediaObject.replaceContents([iframe]);

            iframe.onload = () => {
              mediaObject.return();
            };
          }
        }
      }
    }
  }
`}
            </pre>
          </div>
        </div>
      </div>
    </Page>
  );
