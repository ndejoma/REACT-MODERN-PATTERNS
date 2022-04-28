/** @format */

import React, { useState } from 'react';

const Form = ({ addNewColor = f => f }) => {
	const [hexColor, setHexColor] = useState('#000000');
	const [colorTitle, setColorTitle] = useState('black');

	//create a function to run on change
	const handleTitleChange = e => {
		//set tthe title to be the current title
		setColorTitle(e.target.value);
	};
	const handleColorChange = e => {
		setHexColor(e.target.value);
	};

	const runOnSubmit = e => {
		e.preventDefault();
		//add the colors to the array
		addNewColor(hexColor, colorTitle);
	};

	return (
		<div className='container'>
			<form action='/signin' method='post' onSubmit={runOnSubmit}>
				<label htmlFor='colorTitle'>
					Color Title:
					<input
						onChange={handleTitleChange}
						value={colorTitle}
						type='text'
						name='colorTitle'
						id='colorTitle'
						required
					/>
				</label>
				<br />
				<label htmlFor='colorHex'>
					Choose color:
					<input
						onChange={handleColorChange}
						value={hexColor}
						type='color'
						name='colorHex'
						id='colorHex'
					/>
				</label>
				<br />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default Form;
