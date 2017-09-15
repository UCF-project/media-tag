import React from 'react';
import Page from '../containers/Page.jsx';
import {Component as MediaTag} from '../../www/assets/dist/media-tag-react.js';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
	<Page class={'flex fit-width page column background-grey'}>
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
      src="./assets/data/videos/encrypted/bbb_dash_encrypted.mpd"
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
              data-attr-className="fit"
              data-type="application/dash+xml"
              src="./assets/data/videos/encrypted/bbb_dash_encrypted.mpd"
              data-clear-key="0ebf43152d2de26431e271a9872fbc0a:e2a48174c0c424e605def5368e59636e">
            </MediaTag>
          )}
        />
	</Page>
);