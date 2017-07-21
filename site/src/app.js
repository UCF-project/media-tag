import View from './composites/View.jsx';
import listExample from './composites/ListExample.jsx';

document.addEventListener('DOMContentLoaded', () => {
	const target = document.getElementById('react');

	ReactDOM.render(listExample(), target);
});