import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import './App.css';

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />
			</div>
			<div className='page-body'>
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
