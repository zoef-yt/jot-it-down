import React from 'react';
import { NavLink } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../assets/svg/allsvg';
import { useAuth, useFilter, useTheme } from '../../context';
import './header.css';
function Header() {
	const { theme, toggleTheme } = useTheme();
	const { user } = useAuth();
	const { filterDispatch, filterState } = useFilter();
	const nameInitials = user?.foundUser.firstName[0] + user?.foundUser.lastName[0];
	return (
		<nav className='header'>
			<NavLink className='header-brand' to='/'>
				<h1>Jot It Down</h1>
			</NavLink>

			<input
				type='search'
				className='text-field'
				placeholder='Search For Notes'
				value={filterState.search}
				onChange={(e) => filterDispatch({ type: 'SEARCH', payload: e.target.value })}
			/>

			<div className='header-cta'>
				<div className='flex-column' onClick={toggleTheme}>
					{theme === 'dark' ? <SunIcon className='header-icon ' /> : <HalfMoonIcon className='header-icon' />}
				</div>

				{!!user && (
					<div className='badge-holder'>
						<div className='avatar avatar-sm '>{nameInitials}</div>
						<div className='profile-modal'>
							<li>Hello, {user?.foundUser.firstName}</li>
							<li>Logout 😞</li>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export { Header };
