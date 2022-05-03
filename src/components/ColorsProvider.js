/** @format */

import React, { createContext, useState } from 'react';
import colorsData from '../data/colordata.json';

//create the Colors Context
export const ColorsContext = createContext();

//get the timestamp
const getTimestamp = () => {
	return `${new Date().getTime()}`;
};

//create Colors context
const ColorsProvider = ({ children }) => {
	//initialize the state of the application
	const [colors, setColors] = useState(colorsData);

	//create a function to remove the color
	const removeColor = id => {
		const newColors = colors.filter(color => color.id !== id);
		//updae the colors
		setColors(newColors);
	};

	//create a function to add new color
	const addNewColor = (title, color) => {
		const newColors = [
			...colors,
			{
				id: getTimestamp(),
				rating: 0,
				title,
				color
			}
		];
		//set the color to be the new colors
		setColors(newColors);
	};

	//rate color
	const rateColor = (id, rating) => {
		const newColors = colors.map(color =>
			color.id === id ? { ...color, rating } : color
		);
		setColors(newColors);
	};
	return (
		// will render any child componet and the child Component will have access to colors
		<ColorsContext.Provider
			value={{ colors, removeColor, addNewColor, rateColor }}>
			{children}
		</ColorsContext.Provider>
	);
};

export default ColorsProvider;
