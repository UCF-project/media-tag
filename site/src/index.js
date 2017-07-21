import { Button, Menu, MenuItem } from 'react-mdl';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Menu colored={true}>
		<li>Home</li>
		<li>Configuration</li>
		<li>Penguins</li>
	</Menu>, document.getElementById('react'));
});
