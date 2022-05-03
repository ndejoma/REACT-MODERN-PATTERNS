/** @format */

import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, styles = {}, idx, handleClick = f => f }) => {
	return (
		<FaStar
			onClick={() => handleClick(idx + 1)}
			color={selected ? 'red' : 'grey'}
			style={{ ...styles }}
		/>
	);
};

export default Star;
