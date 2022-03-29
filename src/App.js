import React, {Component} from 'react';

import Header from './template/Header';
import Body from './template/Body';

class App extends Component {
	render() {
		return (
			<div className='min-h-screen bg-neutral-500'>
				<Header />
				<Body />
			</div>
		); 
	}
}

export default App;
