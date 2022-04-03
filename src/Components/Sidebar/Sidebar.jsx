import React from 'react';

import { NavLink } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
	return (
		<div className='body-left-nav'>
			<ul className='showcase-list-group'>
				<LinkItem to='/' name='Notes' />
				<LinkItem to='/archive' name='Archive' />
				<LinkItem to='/trash' name='Trash' />
			</ul>
		</div>
	);
}

export { Sidebar };
const LinkItem = ({ to, name }) => {
	const navLinkClass = ({ isActive }) => `showcase-list-item ${isActive ? 'showcase-list-item-active' : ''}`;
	return (
		<li className='nav-li'>
			<NavLink to={to} className={navLinkClass}>
				{name}
			</NavLink>
		</li>
	);
};
