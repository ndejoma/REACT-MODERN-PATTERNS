/** @format */

import React from 'react';
import Color from './Color';

const ColorLists = ({
	colors = [],
	onRemove = f => console.log(f),
	onRateColor = f => f
}) => {
	//if there are no colors to show, the length is 0
	if (!colors.length)
		return <h2 style={{ color: 'red' }}>There are no colors to show!!!</h2>;
	return (
		<>
			{colors.map(color => {
				return (
					<Color
						key={color.id}
						{...color}
						onRemove={onRemove}
						onRateColor={onRateColor}
					/>
				);
			})}
		</>
	);
};

export default ColorLists;
