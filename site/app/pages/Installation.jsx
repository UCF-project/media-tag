import React from 'react';
import Page from '../containers/Page.jsx';

export default (
	<Page class='flex fit-width page column background-grey scrollable'>
		<div>
			<h1>Installation</h1>
			<p>
				We recommend the usage of <a href="https://yarnpkg.com">yarn</a> as package manager but the library remains compatible with npm.
			</p>
			<pre className={'prompt'}>
{`
$ git clone git@github.com:UCF-project/media-tag.git  # Clone  the project
$ cd media-tag		# Enter the project folder
$ yarn install 		# Install dependencies

`}
			</pre>
			<h3>Builds</h3>	
			<table className={'background-white fit-width table'}>
				<tbody>
					<tr>
						<th>Yarn script</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>build:dev</td>
						<td>Produce an ES6 build into UMD style</td>
					</tr>
					<tr>
						<td>build:pro</td>
						<td>Produce an ES5 build into UMD style</td>
					</tr>
					<tr>
						<td>build:amd</td>
						<td>Convert sources to AMD</td>
					</tr>
					<tr>
						<td>build:site</td>
						<td>Produce an ES6 build of the site, no minified</td>
					</tr>
					<tr>
						<td>build:docs</td>
						<td>Produce some documentation</td>
					</tr>
					<tr>
						<td>start</td>
						<td>Build and launch the site with the lastest media-tag modifications in development mode</td>
					</tr>
				</tbody>
			</table>
			<p></p>
			<em>examples:</em>
			<pre className={'prompt'}>
{`
yarn build:dev
yarn build:pro
yarn build:amd
yarn build:docs
...

`}
			</pre>
			<h3>Start</h3>
			<pre className={'prompt'}>
{`
$ yarn start

`}
			</pre>
		</div>
	</Page>
);
