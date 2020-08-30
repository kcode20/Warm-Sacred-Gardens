import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import './Navigation.css';
import cart from '../images/supermarket.png';

export default function Navigation() {
	return (
		<>
			<Navbar bg='dark' variant='dark' fixed='top' expand='lg'>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link className='linkStyle' href='/about'>
							About
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/blog'>
							Blog
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand href='/'>
					Warm Sacred Gardens
					{/*<img src={logo} height={100} alt='Warm Sacred Gardens' />*/}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link className='linkStyle' href='/shop'>
							Shop
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/cart'>
							<img alt='cart' src={cart} height={20} className='cart' />{' '}
							<Badge variant='danger'>0</Badge>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
