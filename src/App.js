import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, Header, Footer } from './Components/index';
import Mockman from 'mockman-js';
import './Components/utils/CSS/Common.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/mock-api' element={<Mockman />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
