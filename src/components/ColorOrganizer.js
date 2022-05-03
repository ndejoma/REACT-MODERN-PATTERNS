/** @format */

import React, { createContext } from 'react';
import ColorsList from './ColorLists';
import Form from './Form';
import ColorsProvider from './ColorsProvider';

export const ColorsContext = createContext();

const ColorOrganizer = () => {
	return (
		<ColorsProvider>
			<main>
				<Form />
				<h1>Colors organized</h1>
				<ColorsList />
			</main>
		</ColorsProvider>
	);
};

export default ColorOrganizer;
