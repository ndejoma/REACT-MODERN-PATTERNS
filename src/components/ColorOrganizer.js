/** @format */

import React, { useState } from 'react';
import colorsData from '../data/colordata.json';
import ColorsList from './ColorLists';

const ColorOrganizer = () => {
	//initialize the state with the colors
	const [colors, setColors] = useState(colorsData);
	//create the function to rate color
	const rateColor = (id, rating) => {
		let newColorsRated = colors.map(color =>
			color.id === id ? { ...color, rating } : color
		);
		console.log(newColorsRated);
		//set the color to be the new colorsRated
		setColors(newColorsRated);
	};
	const removeColor = colorId => {
		let newColors = colors.filter(color => color.id !== colorId);
		//set the colors to be the new colors object
		console.log(newColors);
		setColors(newColors);
	};
	return (
		<main>
			<h1>Colors organized</h1>
			<ColorsList
				colors={colors}
				onRemove={removeColor}
				onRateColor={rateColor}
			/>
		</main>
	);
};

export default ColorOrganizer;
