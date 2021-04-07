import React from 'react'
import './Rating.css'

export default function Rating({ rating }) {
	return (
		<div className='rating'>
			<div className='imdb'>IMDb</div>
			<div className='score'>{rating}</div>
		</div>
	)
}
