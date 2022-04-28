/** @format */

import React from 'react';
import StarRating from './StarRating';
import { FaTimes } from 'react-icons/fa';

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
const Color = ({
	id,
	title,
	color,
	rating,
	onRemove = f => console.log('Color removed', f),
	onRateColor = f => f
}) => {
	return (
		<section className='color' style={{ position: 'relative' }}>
			<button
				onClick={() => onRemove(id)}
				className='btn'
				style={{ ...btnStyles }}>
				<FaTimes style={{ ...closeStyles }} />
			</button>

			<h2>{`${title[0].toUpperCase()}${title.slice(1)}`}</h2>
			<div
				className='color-div'
				style={{ height: '300px', backgroundColor: color }}></div>
			<StarRating selectedStars={rating} onRate={rating => onRateColor(id, rating)} />
		</section>
	);
};

export default Color;
