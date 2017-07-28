import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey'}>
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
            <li>video/mp4</li>
            <li>video/ogg</li>
            <li>video/webm</li>
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
    src="/assets/videos/bbb.mp4"
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
          src="/assets/videos/bbb.mp4"
          data-type="video/mp4">
        </MediaTag>
      )}
    />
  </Page>
);