import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey'}>
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
            <li>audio/mp3</li>
            <li>audio/ogg</li>
            <li>audio/webm</li>
            <li>audio/wav</li>
            <li>audio/mpeg</li>
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
      src="/assets/audios/alterway.mp3"
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
          src="/assets/audios/alterway.mp3"
          data-type="audio/mp3">
        </MediaTag>
      )}
    />
  </Page>
);