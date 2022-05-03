/** @format */

// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

//create the custom useInput hook
const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	//return the props
	return [
		{ value, onChange: e => setValue(e.target.value) },
		() => setValue(initialValue)
	];
};

export default useInput;
