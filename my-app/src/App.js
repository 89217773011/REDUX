import React, { Component } from 'react';
import { createStore } from 'redux';
import Input from './Input.container.js'

function list (state = [], action) {
	if (action.type === 'ADD_SMTH') {
		return [
			...state,
			action.name
		];
	}
	return state;
}

const store = createStore(list);

store.subscribe(() => {
	return (console.log('subscribe', store.getState())
)
});

store.dispatch({ 
	type: 'ADD_SMTH', 
	name: 'SMTH',
});

store.dispatch({ 
	type: 'ADD_SMTH', 
	name: 'NEWSMTH',
});

class App extends Component {
render() {
	return (
			<div>
				<p>Starting with learning REDUX</p>
				<Input />
			</div>
		);
	}
}

export default App;
