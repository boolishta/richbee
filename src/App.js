import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import MoviePage from './components/MoviePage'
import SearchPage from './components/SearchPage'
import Axios from 'axios'

const api_key = '8ebb70c7'
const url = 'https://www.omdbapi.com'

function App() {
	const [data, setData] = useState({})
	const [search, setSearch] = useState('')
	const [movie, setMovie] = useState(false)
	const [error, setError] = useState(null)

	const requestSearch = async () => {
		try {
			const res = await Axios.get(
				`${url}/?apikey=${api_key}&t=${search}&plot=full`
			)
			setData(res.data)
			setMovie(true)
		} catch (e) {
			setError(e)
		}
	}

	return (
		<Switch>
			<Route exact path='/'>
				<SearchPage
					data={data}
					setData={setData}
					search={search}
					setSearch={setSearch}
					error={error}
					setError={setError}
					requestSearch={requestSearch}
					movie={movie}
				/>
			</Route>
			<Route path='/movie'>
				<MoviePage
					data={data}
					setData={setData}
					search={search}
					setSearch={setSearch}
					requestSearch={requestSearch}
				/>
			</Route>
		</Switch>
	)
}

export default App
