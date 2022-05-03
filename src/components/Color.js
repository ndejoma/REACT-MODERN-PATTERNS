/** @format */

import React, { useContext } from 'react';
import StarRating from './StarRating';
import { FaTimes } from 'react-icons/fa';
import { ColorsContext } from './ColorsProvider';

//create an object for the Fatime styles
const closeStyles = {
	height: '1.5rem',
	width: '1.5rem',
	padding: '1rem',
	fill: 'blue'
};
const btnStyles = {
	position: 'absolute',
	right: '1rem',
	top: '-1rem',
	cursor: 'pointer',
	outline: '0',
	border: 'none',
	backgroundColor: 'transparent'
};
const Color = ({ title, color, rating, id }) => {
	//get the remove colors function from the ColorsContext
	const { removeColor, rateColor } = useContext(ColorsContext);
	//create a function to handle click
	const getRating = rating => {
		rateColor(id, rating);
	};
	return (
		<section className='color' style={{ position: 'relative' }}>
			<button
				onClick={() => removeColor(id)}
				className='btn'
				style={{ ...btnStyles }}>
				<FaTimes style={{ ...closeStyles }} />
			</button>

			<h2>{`${title[0].toUpperCase()}${title.slice(1)}`}</h2>
			<div
				className='color-div'
				style={{ height: '300px', backgroundColor: color }}></div>
			<StarRating selectedStars={rating} getRating={getRating} />
		</section>
	);
};

export default Color;
