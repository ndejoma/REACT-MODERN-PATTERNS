/** @format */

import React, { useState } from 'react';
// import ColorOrganizer from './ColorOrganizer';
import Form from './Form';

const App = ({ title = 'My App' }) => {
	//set the state
	const [colors, setColors] = useState([]);
	const addNewColor = (hex, title) => {
		const currentColors = colors;
		currentColors.push({ colorTitle: hex, title });
		//set the currentColor
		console.log(new Set(colors));
		setColors(currentColors);
	};
	return (
		<>
			{/* <ColorOrganizer /> */}
			<Form addNewColor={addNewColor} />
		</>
	);
};

export default App;
