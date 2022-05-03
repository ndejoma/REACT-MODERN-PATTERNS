/** @format */

import React from 'react';
import { FaStar } from 'react-icons/fa';


const Star = ({
	selected = false,
	styles = {}
}) => {
	return (
		<FaStar
			color={selected ? 'red' : 'grey'}
			style={{ ...styles }}
		/>
	);
};

export default Star;
