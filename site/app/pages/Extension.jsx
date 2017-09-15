import React from 'react';
import Page from '../containers/Page.jsx';
import {Component as MediaTag} from '../../www/assets/dist/media-tag-react.js';

export default (
  <Page class={'flex fit-width page column background-grey scrollable'}>
    <h1>Extension</h1>
    <p>
        Media-Tag is modular and extensible.<br />
        In this section you should find information about the way to extend Media-Tag.<br />
    </p>

    <h3>Add a plugin : Image example</h3>

    <p>
        We will talking about the steps to add a plugin to the current Media-Tag build.<br />
        Follow these <b>5 steps</b> to create your own plugins.<br />
    </p>

    <h5>Step 1 : Prepare a plugin folder</h5>

    <p>
        To prepare the library to accept a new plugin you can create a une folder named like your wanted plugin inside <code className={'code'}>/src/plugins/</code>.<br />
    </p>

    <h5>Step 2 : Create a matcher</h5>

    <p>
        Matchers are analytic parts of a plugin. They are useful to determine when your plugin must be called.<br />
        You have to create a matcher in the folder previously created : <code className={'code'}>/src/plugins/image/matcher.js</code>.<br />
    </p>
    <em>example :</em>
    <pre className={'prompt'}>
{` 
  const Identifier =  require('../../enums/identifier');
  const Type =        require('../../enums/type');
  const Matcher =     require('../matcher');

    class ImageMatcher extends Matcher {
        /**
         * Constructs the object.
         */
        constructor() {
            super(Identifier.IMAGE, Type.RENDERER);
        }

        /**
         * Conditions to fulfil to call active plugin part.
         *
         * @param      {MediaObject}  mediaObject  The media object
         */
        process(mediaObject) {
            const regexExtensions = /^png|jpg|jpeg|gif|svg[+]xml$/;
            const regexMimes = /^image[/](png|jpg|jpeg|gif|svg[+]xml)$/;

            return  mediaObject.hasAttribute('src') &&
                    mediaObject.getType() === 'image' &&
                    regexExtensions.exec(mediaObject.getExtension()) !== null &&
                    regexMimes.exec(mediaObject.getMimeType()) !== null;
        }
    }

    module.exports = ImageMatcher;

`}
    </pre>

    <h5>Step 3 : Create an active plugin part</h5>

    <p>
      Active plugin parts are renderers, filters and sanitizers.<br />
      The active part have to be called when all of the conditions from the associated matcher are fulfilled.<br />
      We want create an image renderer, so the plugin type will be a <code className={'code'}>Renderer</code>.<br />
      You have to create a matcher in the folder previously created : <code className={'code'}>/src/plugins/image/renderer.js</code>.<br />
    </p>
    <em>example: </em>
    <pre className={'prompt'}>
{` 
  const Renderer =  require('../renderer');
  const Identifier =  require('../../enums/identifier');

  class ImageRenderer extends Renderer {
    /**
     * Constructs the object.
     */
    constructor() {
      super(Identifier.IMAGE);
    }

    /**
     * Job to realise to render a image with a mediaObject.
     *
     * @param      {MediaObject}  mediaObject  The media object
     */
    process(mediaObject) {
      const element = document.createElement('img');

      element.setAttribute('src', mediaObject.getAttribute('src'));
      mediaObject.utilsSetAllDataAttributes(element);
      mediaObject.replaceContents([element]);
      mediaObject.return();
    }
  }

  module.exports = ImageRenderer;

`}
    </pre>

    <h5>Step 4 : Register a plugin</h5>

    <p>
      Our plugin is ready to be processed by the Media-Tag.<br />
      Now we have to register its parts to include the plugin to the next build. <br />
      Matchers and Actives parts are registered inside two differents files.<br />
    </p>
    <p>
      Matchers are registered inside <code className={'code'}>/src/presets/media-tag.matchers.js</code>.<br />
    </p>
    <em>example :</em>
    <pre className={'prompt'}>
{` /**
   * Renderer matchers
   */
  const ImageMatcher =    require('../plugins/image/matcher');
  const AudioMatcher =    require('../plugins/audio/matcher');
  const VideoMatcher =    require('../plugins/video/matcher');
  const PdfMatcher =      require('../plugins/pdf/matcher');
  const DashMatcher =     require('../plugins/dash/matcher');
  const DownloadMatcher = require('../plugins/download/matcher');

  /**
   * Filter matchers
   */
  const CryptoMatcher =   require('../plugins/crypto/matcher');
  const ClearKeyMatcher = require('../plugins/clear-key/matcher');

  /**
   * Sanitizer matchers
   */
  const MediaObjectMatcher = require('../plugins/media-object/matcher');

  /**
   * Media Tag API
   */
  const MediaTag = require('../core/media-tag-api');

  /**
   * Store every matchers to detect when an job part plugin should be loaded
   * and should be applied on a media object. So it works for static and dynamic
   * media tag mode.
   */

  MediaTag.pluginStore.store(new ImageMatcher());
  MediaTag.pluginStore.store(new AudioMatcher());
  MediaTag.pluginStore.store(new VideoMatcher());
  MediaTag.pluginStore.store(new PdfMatcher());
  MediaTag.pluginStore.store(new DashMatcher());
  MediaTag.pluginStore.store(new DownloadMatcher());

  MediaTag.pluginStore.store(new CryptoMatcher());
  MediaTag.pluginStore.store(new ClearKeyMatcher());

  MediaTag.pluginStore.store(new MediaObjectMatcher());

  module.exports = MediaTag;

`}
    </pre>
    <p>
      Active parts are registered inside <code className={'code'}>/src/presets/media-tag.plugins.js</code>.<br />
    </p>
    <pre className={'prompt'}>
{`  ...

  /**
   * Renderers
   */
  const ImagePlugin     = require('../plugins/image/renderer');
  const AudioPlugin     = require('../plugins/audio/renderer');
  const VideoPlugin     = require('../plugins/video/renderer');
  const PdfPlugin       = require('../plugins/pdf/renderer');
  const DashPlugin      = require('../plugins/dash/renderer');
  const DownloadPlugin  = require('../plugins/download/renderer');

  /**
   * Filters
   */
  const CryptoFilter    = require('../plugins/crypto/filter');
  const ClearKeyFilter  = require('../plugins/clear-key/filter');

  /**
   * Sanitizers
   */
  const MediaObjectSanitizer = require('../plugins/media-object/sanitizer');

  /**
   * Media Tag API with matchers.
   *
   * @type       {Function}
   */
  const MediaTag = require('./media-tag.matchers');

  /**
   * Register every job/active part plugins.
   */

  MediaTag.pluginStore.store(new ImagePlugin());
  MediaTag.pluginStore.store(new AudioPlugin());
  MediaTag.pluginStore.store(new VideoPlugin());
  MediaTag.pluginStore.store(new PdfPlugin());
  MediaTag.pluginStore.store(new DashPlugin());
  MediaTag.pluginStore.store(new DownloadPlugin());

  MediaTag.pluginStore.store(new CryptoFilter());
  MediaTag.pluginStore.store(new ClearKeyFilter());

  MediaTag.pluginStore.store(new MediaObjectSanitizer());
  
  ...

  module.exports = MediaTag;
`}
    </pre>

    <h5>Step 5 : Prepare a demonstration</h5>
    
    <p>
      Now our image plugin is ready for the use.<br />
      It is time to create our html page to test it under <code className={'code'}>/demo/webpack/plugins/image/index.html</code><br />
      <em>example :</em>
      <pre className={'prompt'}>
{`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Media-Tag - Image plugin</title>
    <script type="text/javascript" src="/dist/media-tag.js"></script>
  </head>
  <body>
    <media-tag
      src="./assets/data/images/image.svg"
      data-type="image/svg+xml"
      data-attr-width="300px"
      data-attr-height="200px"></media-tag>
  </body>
  </html>
`}
      </pre>
    </p>

    <h5>Final step : Build and start the development server</h5>
    <p>
      To fully contemplate our work we need to make a build with our fresh plugin.<br />
      So, you just have to excute these following lines to see the result.<br />
    </p>
    <pre className={'prompt'}>
{`  export NODE_ENV=development-es7
  yarn build
  yarn start
`}  
    </pre>
    <p>
      And finally follow this link <a href='http://localhost:8080/webpack/plugins/image'>http://localhost:8080/webpack/plugins/image</a>.<br />
    </p>

    <h3>Next step</h3>
    <p>
      Well done !<br />
      Now your are able to create various plugins.<br />
      Create and share new interesting plugins !<br />
      You can share with us your creations by doing a pull request on our <a href='https://github.com/UCF-project/media-tag'>github project</a>.<br />
    </p>
  </Page>
);
