import React from 'react';

import { NavLink } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
	return (
		<ul className='body-left-nav'>
			<ul className='showcase-list-group'>
				<LinkItem to='/' name='Home' />
				<LinkItem to='/archive' name='Archive' />
				<LinkItem to='/trash' name='Trash' />
			</ul>
		</ul>
	);
}

export { Sidebar };
const LinkItem = (props) => {
	const navLinkClass = ({ isActive }) => (isActive ? 'showcase-list-item showcase-list-item-active' : 'showcase-list-item');
	return (
		<li className='nav-li'>
			<NavLink to={props.to} className={navLinkClass}>
				{props.name}
			</NavLink>
		</li>
	);
};
