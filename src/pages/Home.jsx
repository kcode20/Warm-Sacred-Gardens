import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sorrell from '../images/sorrell.jpg';
import garlic from '../images/garlic.jpg';
import johnWort from '../images/john-wort.jpg';
import cilantroSeeds from '../images/cilantro-seeds.jpg';
import './Home.css';

export default function Home() {
	return (
		<>
			<Container>
				<Row>
					<Col xs={6} md={4} align='center'>
						<img alt='Warm Sacred Gardens sorrell' src={sorrell} height={300} />
					</Col>
					<Col xs={6} md={4} align='center'>
						<img
							alt='Warm Sacred Gardens St. John Wort'
							src={johnWort}
							height={300}
						/>
					</Col>
					<Col xs={6} md={4} align='center'>
						<img
							alt='Warm Sacred Gardens Cilantro Seeds'
							src={cilantroSeeds}
							height={300}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}
