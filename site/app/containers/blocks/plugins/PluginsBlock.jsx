import React from 'react';

import Page from '../../Page.jsx';
import MediaTag from '../../../components/MediaTag.jsx';
import PluginBlock from './plugin/PluginBlock.jsx';

import { List, ListItem, ListItemContent } from 'react-mdl';

/**
 * @brief      { function_description }
 *
 * @param      identifier  The identifier
 *
 * @return     { description_of_the_return_value }
 */
function subPage(identifier) {
  switch (identifier) {
    case 'image': {
      return (
        <PluginBlock 
          htmlTitle={'Image'}
          htmlBody={(
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Image plugin is able to render several type of image.<br />
                Currently this plugin renders these image types : <br />
              </p>
              <ul>
                <li>image/png</li>
                <li>image/jpg</li>
                <li>image/jpeg</li>
                <li>image/gif</li>
                <li>image/svg+xml</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render an image, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
              <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit-height v-aligned h-aligned"
    data-attr-class="fit"
    src="./assets/images/media-tag-logo-text.png"
    data-type="image/png">
  </media-tag>

`}
              </pre>
            </div>
          )}
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit-height v-aligned h-aligned"
              data-attr-class="fit"
              src="./assets/images/media-tag-logo-text.png"
              data-type="image/png">
            </MediaTag>
          )}
        />
      );
    }
    case 'audio': {
      return (
        <PluginBlock 
          htmlTitle={'Audio'}
          htmlBody={(
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Audio plugin is able to render several type of audios.<br />
                Currently this plugin renders these audios types : <br />
              </p>
              <ul>
                <li>audio/?</li>
                <li>audio/?</li>
                <li>audio/?</li>
                <li>audio/?</li>
                <li>audio/?</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render an audio, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
                <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit v-aligned h-aligned"
    src="./assets/audios/alterway.mp3"
    data-type="audio/mp3">
  </media-tag>

`}
              </pre>
            </div>
          )}
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned"
              src="./assets/audios/alterway.mp3"
              data-type="audio/mp3">
            </MediaTag>
          )}
        />
      );
    }
    case 'video': {
      return (
        <PluginBlock 
          htmlTitle={'Video'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Video plugin is able to render several type of videos.<br />
                Currently this plugin renders these videos types : <br />
              </p>
              <ul>
                <li>video/?</li>
                <li>video/?</li>
                <li>video/?</li>
                <li>video/?</li>
                <li>video/?</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render a video, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
              <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit v-aligned h-aligned"
    data-attr-class="flex fit-width"
    src="./assets/videos/bbb.mp4"
    data-type="video/mp4">
  </media-tag>

`}
              </pre>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned"
              data-attr-class="flex fit-width"
              src="./assets/videos/bbb.mp4"
              data-type="video/mp4">
            </MediaTag>
          )}
        />
      );
    }
    case 'pdf': {
      return (
        <PluginBlock 
          htmlTitle={'Pdf'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                PDF plugin is able to render pdfs.<br />
                Type : <br /> 
              </p>
              <ul>
                <li>application/pdf</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render a pdf, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
              <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit v-aligned h-aligned bottom-padded"
    data-attr-class="flex fit-width"
    src="./assets/documents/kasukasu-manuel-utilisateur.pdf"
    data-type="application/pdf">
  </media-tag>

`}
              </pre>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned bottom-padded"
              data-attr-class="flex fit"
              src="./assets/documents/kasukasu-manuel-utilisateur.pdf"
              data-type="application/pdf">
            </MediaTag>
          )}
        />
      );
    }
    case 'dash': {
      return (
        <PluginBlock 
          htmlTitle={'Dash'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Dash plugin is able to render dash contents.<br />
                Type : <br />
              </p>
              <ul>
                <li>application/dash+xml</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render a dash, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
              <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit v-aligned h-aligned"
    data-attr-class="flex fit-width"
    src="./assets/videos/bbb_dash.mpd"
    data-type="application/dash+xml">
  </media-tag>

`}
              </pre>
              <h4>Warning</h4>
              <p>
                Due to the nature of the dash content, this format is no downloadable. <br />
              </p>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned"
              data-attr-class="flex fit-width"
              src="./assets/videos/bbb_dash.mpd"
              data-type="application/dash+xml">
            </MediaTag>
          )}
        />
      );
    }
    case 'download': {
      return (
        <PluginBlock 
          htmlTitle={'Download'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Download plugin is able to provide a download button for several contents.<br />
                Type : <br />
              </p>
              <ul>
                <li>download (not a true type)</li>
              </ul>
              <h4>Usage</h4>
              <p>
                To render a download button, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. <br />
                Other attributes are optional. <br />
              </p>
              <pre className={'no-padding no-margin'}>
{`  <media-tag
    class="flex fit v-aligned h-aligned"
    data-attr-class="flex fit-width"
    src="./assets/videos/bbb.mp4"
    data-type="download">
  </media-tag>

`}
              </pre>
              <h4>Warning</h4>
              <p>
                This plugin is also used as default render when no types are found. <br />
                For example, if a mistake occurs on dash rendering the download button risk to provide only the mpd file ... <br />
              </p>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned"
              data-attr-class="flex fit-width h-aligned v-aligned"
              src="./assets/videos/bbb.mp4"
              data-type="download">
            </MediaTag>
          )}
        />
      );
    }
    case 'crypto': {
      return (
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
              <pre>
{`  <media-tag
    id="video"
    data-type="video/mp4"
    src="./assets/videos/encrypted/video-encrypted"
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
              <pre>
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
              <pre>
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
              <pre>
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
              data-attr-class="fit"
              data-type="video/mp4"
              src="./assets/videos/encrypted/video-encrypted"
              data-crypto-key="salsa20poly1305:gxGQi0zzmj/w8GrV+/xGgaMI">
            </MediaTag>
          )}
        />
      );
    }
    case 'clearkey': {
      return (
        <PluginBlock 
          htmlTitle={'ClearKey'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Clearkey plugin is a filter plugin. <br />
                This plugin is used to decrypt dash contents. <br />
                Currently it permits to use only one clear key to decrypt dash content. <br />
              </p>
              <h4>Usage</h4>
                <p>
                To render an image, you should define a {'<media-tag>'} element. <br />
                This tag can contain severals attributes but have to contain at least a <b>src</b> and a <b>data-type</b>. 
                Other attributes are optional. <br />
              </p>
              <pre>
{`  <media-tag
      id="dash"
      data-type="application/dash+xml"
      src="./assets/videos/encrypted/bbb_dash_encrypted.mpd"
      data-clear-key=
        "0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e"
      data-attr-width="1240px"
      data-attr-height="720px"
      data-attr-controls="true"
      data-attr-autoplay="true">
      </media-tag>

`}
              </pre>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit-width v-aligned h-aligned"
              data-attr-class="fit"
              data-type="application/dash+xml"
              src="./assets/videos/encrypted/bbb_dash_encrypted.mpd"
              data-clear-key="0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e">
            </MediaTag>
          )}
        />
      );
    }
    case 'sanitizer': {
      return (
        <PluginBlock 
          htmlTitle={'Sanitizer'}
          htmlBody={
            <div className={'flex column fit'}>
              <h4>Description</h4>
              <p>
                Sanitizer plugin is a plugin able to clean malicious behaviours potentially injected in the content. <br />
                Between each processing step every sanitizers are called. <br />
              </p>
              <h4>Usage</h4>
              <p>
                Just declare a sanitizer by build or configuration way.<br />
                The Media Tag processing engine must apply it on the content between each step.<br />
                With this kind of plugin you can for example clear javascript injection inside svg file. <br />
              </p>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit-height v-aligned h-aligned"
              data-attr-class="fit"
              src="./assets/images/media-tag-logo-text.png"
              data-type="image/png">
            </MediaTag>
          )}
        />
      );
    }
  }
}

/**
 * Class for plugins block.
 *
 * @class      PluginsBlock (name)
 */
class PluginsBlock extends React.Component {
  /**
   * @brief      Constructs the object.
   *
   * @param      props  The properties
   */
  constructor(props) {
    super(props);

    this.state = {
      page: subPage('image')
    }
  }

  /**
   * @brief      { function_description }
   *
   * @return     { description_of_the_return_value }
   */
  render() {
    return (
      <Page class={this.props.class}>
        <div className={'flex fit column'}>
          <h1>Plugins</h1>
          <p>
            Media-tag is an open source library.<br />
            It provide features to enable media rendering.<br />
          </p>
          <div className={'flex fit background-white'}>
            <nav className={'nav scrollable'}>
              <List>
                <ListItem>
                  Renderers
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('image')})
                    }
                  }
                >
                  <ListItemContent icon='image'>Image</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('audio')})
                    }
                  }
                >
                  <ListItemContent icon='music_note'>Audio</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('video')})
                    }
                  }
                >
                  <ListItemContent icon='movie'>Video</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('pdf')})
                    }
                  }
                >
                  <ListItemContent icon='description'>Pdf</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('dash')})
                    }
                  }
                >
                  <ListItemContent icon='video_label'>Dash</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('download')})
                    }
                  }
                >
                  <ListItemContent icon='file_download'>Download</ListItemContent>
                </ListItem>
                <ListItem>
                  Filters
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('crypto')})
                    }
                  }
                >
                  <ListItemContent icon='build'>Crypto</ListItemContent>
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('clearkey')})
                    }
                  }
                >
                  <ListItemContent icon='build'>ClearKey</ListItemContent>
                </ListItem>
                <ListItem>
                  Sanitizers
                </ListItem>
                <ListItem 
                  onClick={
                    () => {  
                      this.setState({page: subPage('sanitizer')})
                    }
                  }
                >
                  <ListItemContent icon='healing'>Sanitizer</ListItemContent>
                </ListItem>
              </List>
            </nav>
            {this.state.page}
          </div>
        </div>
      </Page>
    );
  }
}

export default PluginsBlock;
