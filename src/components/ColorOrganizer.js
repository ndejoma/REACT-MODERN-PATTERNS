/** @format */

import React, { useState } from 'react';
import colorsData from '../data/colordata.json';
import ColorsList from './ColorLists';

const ColorOrganizer = () => {
	//initialize the state with the colors
	const [colors, setColors] = useState(colorsData);
	const removeColor = colorId => {
		let newColors = colors.filter(color => color.id !== colorId);
		//set the colors to be the new colors object
		console.log(newColors);
		setColors(newColors);
	};
	return (
		<main>
			<h1>Colors organized</h1>
			<ColorsList colors={colors} onRemove={removeColor} />
		</main>
	);
};

export default ColorOrganizer;
