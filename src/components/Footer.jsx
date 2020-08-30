import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';
import logo from '../images/WSG.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import home from '../images/home.png';
import email from '../images/email.png';
import phone from '../images/phone.png';

export default function Footer() {
	return (
		<div
			className='footer'
			style={{
				backgroundColor: '#343a40',
				color: 'white',
			}}
		>
			<footer className='font-small mdb-color pt-4'>
				<Container>
					<Row className='text-center'>
						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								<img alt='' src={logo} height={200} />
							</h6>
							<p>
								Warm Sacred Gardens is a black woman-run organization dedicated
								to providing the highest quality of organic herbs and spices for
								your well being.
							</p>
						</Col>

						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>Contact</h6>
							<p>
								<img className='icon' alt='' src={home} height={15} /> Atlanta,
								GA, US
							</p>
							<p>
								<img className='icon' alt='' src={email} height={15} />
								info@warmsacredgardens.com
							</p>
							<p>
								<img className='icon' alt='' src={phone} height={15} />
								1-234-567-8910
							</p>
						</Col>

						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								Follow Us On Social Media
							</h6>
							<ul className='list-unstyled list-inline'>
								<li className='list-inline-item'>
									<img
										src={facebook}
										alt='facebook'
										height={25}
										className='fab fa-facebook-f'
									/>
								</li>
								<li className='list-inline-item'>
									<img
										alt='twitter'
										src={twitter}
										height={25}
										className='fab fa-twitter'
									/>
								</li>
								<li className='list-inline-item'>
									<img
										src={instagram}
										alt='instagram'
										height={25}
										className='fab fa-google-plus-g'
									/>
								</li>
							</ul>
						</Col>
					</Row>

					<hr className='separator' />

					<Row className='align-items-center credit'>
						<div>
							Made with <span>&#9829;</span> by @kcode
							<div>
								Icons made by{' '}
								<a
									href='https://www.flaticon.com/authors/freepik'
									title='Freepik'
									className='freepik'
								>
									Freepik
								</a>{' '}
								from{' '}
								<a
									href='https://www.flaticon.com/'
									title='Flaticon'
									className='freepik'
								>
									www.flaticon.com
								</a>
							</div>
						</div>
					</Row>
				</Container>
			</footer>
		</div>
	);
}
