import React from 'react'
import Movie from './Movie'
import Error from './Error'
import './SearchPage.css'

export default function SearchPage({
	data,
	setData,
	search,
	setSearch,
	error,
	setError,
	requestSearch,
	movie,
}) {
	function handleChange(event) {
		setError(null)
		setSearch(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		setSearch('')
		requestSearch()
	}

	return (
		<div className='SearchPage'>
			<div className='SearchPage-wrapper'>
				<h1>Unlimited movies, TV shows, and more.</h1>
				<div className='text'>Watch anywhere. Cancel anytime.</div>
				<form className='search' onSubmit={handleSubmit}>
					<input
						className='search-input'
						type='text'
						placeholder='Type here smth...'
						onChange={handleChange}
						value={search}
					/>
					<button className='search-btn' type='submit'>
						Search
					</button>
				</form>
				{error && <Error error={error.message} />}
				{movie && <Movie data={data} />}
			</div>
		</div>
	)
}
