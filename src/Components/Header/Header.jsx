import React from 'react';

function Header() {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<a href='#navigation'> Brand Game</a>
			</div>

			<input type='search' className='text-field' placeholder='Search For Games' />

			<div className='navbar-cta'>
				<div className='badge-holder'>
					<div className='badge-icon'>1</div>
				</div>

				<div className='badge-holder'>
					<div className='badge-icon'>9</div>
				</div>

				<img className='avatar avatar-sm' src='...' />
			</div>
		</nav>
	);
}

export { Header };
