import React from 'react';
import Page from '../containers/Page.jsx';

export default () => {
	return (
		<Page class='flex fit-width page column background-grey scrollable'>
			<div>
				<h1>Installation</h1>
				<p>
					We recommend the usage of <a href="#">yarn</a> as package manager but the library remains compatible with npm.
				</p>
				<h3>Setup</h3>
				<h4>Environnement</h4>
				<p>
					You need to define a environnement variable to set a target build, the variable <code className={'code'}>NODE_ENV</code>.
				</p>
				
				<table className={'background-white fit-width'}>
					<th>Environnement</th>
					<th>Caracteristics</th>
					<tr>
						<td>development-es7</td>
						<td>ES6, CommonJS, no Source map</td>
					</tr>
					<tr>
						<td>development-es5</td>
						<td>ES5, CommonJS, no Source map</td>
					</tr>
					<tr>
						<td>production-cjs</td>
						<td>ES6, CommonJS, Source map, Minified</td>
					</tr>
					<tr>
						<td>production-umd</td>
						<td>ES5, UMD, no Source map</td>
					</tr>
				</table>
				<pre className={'prompt'}>
{`export NODE_ENV=development-es7
    # OR
NODE_ENV=development-es7 yarn <command>`}
				</pre>

				<h3>Build</h3>
				<pre className={'prompt'}>
{`$ git clone git@git.rnd.alterway.fr:UCF/media_tag_v2.git  # Clone  the project
$ cd media_tag_v2      # Enter the project folder
$ yarn install         # Install dependencies
$ yarn run build       # Create ./dist folder with JS bundled files
$ yarn run start       # Start the development server
`}
				</pre>
				<h3>Start</h3>
				<pre className={'prompt'}>
{`$ yarn run start       # Start the development server`}
				</pre>
				<h3>Site</h3>
				<div className="left-padded">
				<h4>Start</h4>
				<p>
					Go to <code>media-tag/site</code> and type this line.
				</p>
				<pre className={'prompt'}>
{`yarn start # Start the web site on http://localhost:8080`}
				</pre>
				</div>
			</div>
		</Page>
	);
}