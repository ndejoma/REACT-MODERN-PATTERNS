/** @format */

import React from 'react';
import Color from './Color';
import { useColors } from '../hooks/useColors';

const ColorLists = () => {
	//get the colors from the context provider object
	const { colors } = useColors();


	//if there are no colors to show, the length is 0
	if (!colors.length)
		return <h2 style={{ color: 'red' }}>There are no colors to show!!!</h2>;
	return (
		<>
			{colors.map(color => {
				return <Color key={color.id} {...color} />;
			})}
		</>
	);
};

export default ColorLists;
