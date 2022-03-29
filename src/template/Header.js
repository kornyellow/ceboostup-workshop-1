import React, {Component} from 'react'

function MenuButton(props) {
	const active = 'inline-block rounded py-2 px-4 text-neutral-800 font-semibold bg-neutral-200';
	const nonActive = 'inline-block rounded py-2 px-4 text-neutral-50 hover:bg-neutral-600 transition';

	return (
		<a className={props.active ? active : nonActive} href={props.href}>
			{props.label}
		</a>
	);
}

class Header extends Component {
	render() {
		return (
			<nav className='flex items-center justify-between flex-wrap p-3 bg-neutral-700'>
				<button className='font-semibold text-neutral-50 text-lg px-4'>
					LOGO
				</button>

				<ul className='flex'>
					<li className='mr-3'><MenuButton href='#' label='Home' active /></li>
					<li className='mr-3'><MenuButton href='#' label='Tasks' /></li>
					<li className='mr-3'><MenuButton href='#' label='Logout' /></li>
				</ul>
			</nav>
		);
	}
}

export default Header;
