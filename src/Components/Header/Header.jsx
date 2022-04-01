import React from 'react';
import { NavLink } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../assets/svg/allsvg';
import { useTheme } from '../../context';
import './header.css';
function Header() {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className='header'>
			<NavLink className='header-brand' to='/'>
				<h1>Jot It Down</h1>
			</NavLink>

			<input type='search' className='text-field' placeholder='Search For Games' />

			<div className='header-cta'>
				<div className='flex-column' onClick={toggleTheme}>
					{theme === 'dark' ? <SunIcon className='header-icon ' /> : <HalfMoonIcon className='header-icon' />}
				</div>
				<div className='badge-holder'>
					<div className='avatar avatar-sm '>Z</div>
					<div className='profile-modal'>
						<li>Logout 😞</li>
					</div>
				</div>
			</div>
		</nav>
	);
}

export { Header };
