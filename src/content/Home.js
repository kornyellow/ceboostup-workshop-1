import React, {Component} from 'react'

function Card() {
	return (
		<div className='w-full p-6 bg-neutral-400 rounded-3xl'>
			<div className='justify-center flex p-6 py-20 bg-neutral-100 rounded-3xl'>
				<span className='text-5xl text-neutral-700'>IMG</span>
			</div>
			<div className='justify-center flex p-6 py-10'>
				<span className='text-5xl text-neutral-700'>Text</span>
			</div>
		</div>
	);
}

class Home extends Component {
	render() {
		return (
			<div className='p-8 md:p-18 xl:p-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-18 lg:gap-24'>
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default Home;
