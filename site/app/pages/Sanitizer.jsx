import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
	<Page class={'flex fit-width page column background-grey'}>
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
              class="flex fit v-aligned h-aligned"
              data-attr-class="fit"
              src="/assets/data/images/media-tag-logo-text.png"
              data-type="image/png">
            </MediaTag>
          )}
        />
	</Page>
);