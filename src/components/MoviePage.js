import React from 'react'
import { Link } from 'react-router-dom'
import './MoviePage.css'
import Rating from './Rating'

export default function MoviePage({
	data,
	setData,
	search,
	setSearch,
	requestSearch,
}) {
	function handleChange(event) {
		setSearch(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		setSearch('')
		requestSearch()
	}

	return (
		<>
			<div className='MoviePage'>
				<div className='MovePage-wrapper'>
					<div className='header'>
						<Link to='/' className='header-logo'>
							Richbee Shows
						</Link>
						<form className='header-input' onSubmit={handleSubmit}>
							<i>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clipPath='url(#clip0)'>
										<path
											d='M19.7556 18.5775L14.7815 13.6033C16.137 11.9455 16.8035 9.83008 16.643 7.69464C16.4826 5.55919 15.5075 3.56711 13.9195 2.13044C12.3314 0.69376 10.252 -0.0775884 8.11119 -0.0240619C5.97039 0.0294646 3.93207 0.903771 2.41783 2.41801C0.903588 3.93225 0.0292815 5.97058 -0.024245 8.11137C-0.0777715 10.2522 0.693577 12.3316 2.13025 13.9197C3.56693 15.5077 5.55901 16.4828 7.69445 16.6432C9.82989 16.8037 11.9453 16.1372 13.6031 14.7817L18.5773 19.7558C18.7345 19.9076 18.945 19.9916 19.1635 19.9897C19.382 19.9878 19.591 19.9002 19.7455 19.7457C19.9 19.5912 19.9876 19.3822 19.9895 19.1637C19.9914 18.9452 19.9074 18.7347 19.7556 18.5775ZM8.33315 15C7.01461 15 5.72568 14.609 4.62935 13.8765C3.53302 13.1439 2.67854 12.1027 2.17395 10.8846C1.66937 9.66638 1.53735 8.32594 1.79458 7.03273C2.05182 5.73953 2.68676 4.55164 3.61911 3.61929C4.55146 2.68694 5.73934 2.052 7.03255 1.79477C8.32576 1.53753 9.6662 1.66955 10.8844 2.17414C12.1025 2.67872 13.1437 3.53321 13.8763 4.62953C14.6088 5.72586 14.9998 7.01479 14.9998 8.33333C14.9978 10.1008 14.2948 11.7954 13.045 13.0452C11.7952 14.295 10.1006 14.998 8.33315 15Z'
											fill='#5F5F5F'
										/>
									</g>
									<defs>
										<clipPath id='clip0'>
											<rect width='20' height='20' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</i>
							<input
								placeholder='Type here smth...'
								value={search}
								onChange={handleChange}
							/>
						</form>
					</div>

					<div className='title'>{data.Title}</div>
					<div className='desc'>
						<Rating rating={data.imdbRating} className='rating' />
						<div className='genre'>{data.Genre}</div>
						<div className='type'>{data.Type}</div>
						<div className='year'>{data.Year}</div>
					</div>
					<button className='watch'>Watch</button>
					<div className='awards'>
						{/* <div className='wrapper'>
								<div className='top'>Top Rated TV #148</div>
								<div className='won'>Won 2 Golden Globes.</div>
							</div> */}
						<div className='another'>{data.Awards}</div>
					</div>
				</div>
			</div>
		</>
	)
}
