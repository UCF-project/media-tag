import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey'}>
    <PluginBlock
      className={'background-white'}
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
    src="/assets/images/media-tag-logo-text.png"
    data-type="image/png">
  </media-tag>

`}
          </pre>
        </div>
      )}
      viewTitle={'View'}
      viewBody={(
        <MediaTag
          class="flex fit v-aligned h-aligned"
          data-attr-class="fit"
          src="/assets/images/media-tag-logo-text.png"
          data-type="image/png">
        </MediaTag>
      )}
    />
  </Page>
);