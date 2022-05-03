/** @format */

import React from 'react';
import Star from './Star';

//create an array
const createArray = length => Array.from({ length });

const starStyles = { height: '2rem', width: '2rem' };

//refactor  to be a pure component
const StarRating = ({
	totalStars = 5,
	selectedStars = 0,
	getRating = f => f
}) => {
	return (
		<div className='stars' style={{ padding: '5px' }}>
			{createArray(totalStars).map((_, idx) => {
				return (
					<Star
						handleClick={getRating}
						idx={idx}
						key={idx}
						selected={selectedStars > idx}
						styles={{ ...starStyles }}
					/>
				);
			})}
			<p>
				Selected stars: {selectedStars} of {totalStars}
			</p>
		</div>
	);
};

export default StarRating;
