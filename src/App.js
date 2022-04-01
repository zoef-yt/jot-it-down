import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, Header, Footer, NotesPage, Sidebar, ArchivePage, TrashPage } from './Components/index';
import Mockman from 'mockman-js';
import './Components/utils/CSS/Common.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
			<Routes>
				<Route path='/landing-page' element={<LandingPage />} />
				<Route path='/mock-api' element={<Mockman />} />
				<Route path='/' element={<NotesPage />} />
				<Route path='/archive' element={<ArchivePage />} />
				<Route path='/trash' element={<TrashPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
