import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main.jsx';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

/* global document */

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Main />, document.body);
});
