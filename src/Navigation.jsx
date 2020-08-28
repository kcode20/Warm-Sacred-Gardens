import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
	return (
		<>
			<Navbar bg='light' variant='light' fixed='top' expand='lg'>
				<Navbar.Brand href='/'>
					Warm Sacred Gardens
					{/*<img src={logo} height={100} alt='Warm Sacred Gardens' />*/}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link className='linkStyle' href='/'>
							Home
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/about'>
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
