import React from 'react'
import { Link } from 'react-router-dom'
import Error from './Error'
import './Movie.css'
import Rating from './Rating'

export default function Movie({ data }) {
	return (
		<>
			{data.Response === 'False' ? (
				<Error error={data.Error} />
			) : (
				<div className='movie'>
					<Link to='/movie' className='movie--image'>
						<img src={data.Poster} alt='Poster'></img>
					</Link>
					<div className='movie--title'>
						<div className='move--title_desc'>
							<div className='move--title_desc-wrapper'>
								<Link to='/movie' className='movie--title_desc-name'>
									{data.Title}
								</Link>
								<div className='movie--title_desc-text'>
									<div className='type'>{data.Type}</div>
									<div className='genre'>{data.Genre}</div>
									<div className='year'>{data.Year}</div>
								</div>
							</div>
							<Rating rating={data.imdbRating} />
						</div>
						<div className='movie--title_awards'>
							{/* <div className='wrapper'>
								<div className='top'>Top Rated TV #148</div>
								<div className='won'>Won 2 Golden Globes.</div>
							</div> */}
							<div className='another'>{data.Awards}</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
