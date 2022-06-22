import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<i class="fas fa-film"></i>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
