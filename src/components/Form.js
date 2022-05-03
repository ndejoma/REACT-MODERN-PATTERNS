/** @format */

import React from 'react';
import useInput from '../hooks/useInput';

const Form = ({ addNewColor = f => f }) => {
	const [hexProps, resetHexColor] = useInput('#111212');
	const [titleProps, resetTitle] = useInput('black');

	console.log(hexProps, titleProps);

	const runOnSubmit = e => {
		e.preventDefault();
		//add the colors
		const hexValue = hexProps.value;
		const titleValue = titleProps.value;
		//add the new color and the title
		console.log(hexValue, titleValue);	
		addNewColor(hexValue, titleValue);
	};

	return (
		<div className='container'>
			<form action='/signin' method='post' onSubmit={runOnSubmit}>
				<label htmlFor='colorTitle'>
					Color Title:
					<input
						{...titleProps}
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
						{...hexProps}
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
