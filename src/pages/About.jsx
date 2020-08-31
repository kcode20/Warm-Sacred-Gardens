import React from 'react';
import herbs from '../images/herbs-about.jpg';
import './About.css';

export default function About() {
	return (
		<div className='about'>
			<p>
				Warm Sacred Gardens is a black woman-run organization dedicated to
				providing the highest quality of organic herbs and spices for your well
				being. We believe that plant medicine, when used appropriately, is
				effective in providing a safe way to promote your health, energy, and
				vitality. Warm Sacred Gardens offers an abundance of healing herbs in
				various combinations and forms. Our mission is to help our customers
				achieve and maintain health and well-being. All spices and herbs are
				100% organic and ethically sourced.
			</p>
			<img alt='' src={herbs} />\{' '}
		</div>
	);
}
