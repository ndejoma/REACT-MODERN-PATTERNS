/** @format */

import React, { createContext } from 'react';
import ColorsList from './ColorLists';
import colors from '../data/colordata.json';

export const ColorsContext = createContext();

const ColorOrganizer = () => {
	return (
		<ColorsContext.Provider value={colors}>
			<main>
				<h1>Colors organized</h1>
				<ColorsList />
			</main>
		</ColorsContext.Provider>
	);
};

export default ColorOrganizer;
