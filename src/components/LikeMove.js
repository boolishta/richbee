import React from 'react'
import Rating from './Rating'
import './LikeMove.css'

export default function LikeMove({ data, got, requestSearch }) {
	const watchThis = () => {
		requestSearch(data.Title)
		window.scrollTo(0, 0)
	}
	return (
		<div className='like_1'>
			<img src={data.Poster} alt={data.Title} />
			<div className='like_1--inner' onClick={watchThis}>
				<div className='title'>{data.Title}</div>
				<div className='genre'>{data.Genre}</div>
				<div className='type'>
					{data.Type} {data.Year}
				</div>
				<div className='plot'>{data.Plot}</div>
				<Rating rating={data.imdbRating} className='rating' />
			</div>
		</div>
	)
}
