/** @format */

import React, { useRef } from 'react';

const Form = ({ addNewColor = f => f }) => {
	//create the ref
	const titleRef = useRef(null);
	const hrefColorRef = useRef(null);
	const runOnSubmit = event => {
		event.preventDefault();
		const colorTitle = titleRef.current.value;
		const hexValue = hrefColorRef.current.value;
		//set the color to be the the current values on submit
        //gaurd clause for empty
		if (!colorTitle) return;
		addNewColor(hexValue, colorTitle);
		console.log(event);
	};
	return (
		<div className='container'>
			<form action='/signin' method='post' onSubmit={runOnSubmit}>
				<label htmlFor='colorTitle'>
					Color Title:
					<input
						ref={titleRef}
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
						ref={hrefColorRef}
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
