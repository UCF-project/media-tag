import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey'}>
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
    src="/assets/videos/bbb_dash.mpd"
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
              src="/assets/videos/bbb_dash.mpd"
              data-type="application/dash+xml">
            </MediaTag>
          )}
        />
  </Page>
);