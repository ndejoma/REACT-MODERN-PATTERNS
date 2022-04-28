/** @format */

import React from 'react';
import { FaStar } from 'react-icons/fa';

console.dir(FaStar);

const Star = ({
	selected = false,
	handleClick = () => console.log('Clicked'),
	styles = {}
}) => {
	return (
		<FaStar
			color={selected ? 'red' : 'grey'}
			style={{ ...styles }}
			onClick={handleClick}
		/>
	);
};

export default Star;
