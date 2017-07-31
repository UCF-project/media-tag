import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey'}>
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
    src="/assets/data/documents/kasukasu-manuel-utilisateur.pdf"
    data-type="application/pdf">
  </media-tag>

`}
              </pre>
            </div>
          }
          viewTitle={'View'}
          viewBody={(
            <MediaTag
              class="flex fit v-aligned h-aligned pdf"
              data-attr-class="flex fit"
              src="/assets/data/documents/kasukasu-manuel-utilisateur.pdf"
              data-type="application/pdf">
            </MediaTag>
          )}
        />
  </Page>
);