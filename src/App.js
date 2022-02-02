import React, { useState, useEffect } from 'react';
import movieListDetails from './top5MoviesAssessement';
import MovieCard from './components/movieCard';
import './App.css';
import AddFavourites from './components/AddFavourites';
import PopUpDetails from './components/PopUpDetails';
import RemoveFavourites from './components/RemoveFavourites';
import Dropdown from 'react-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieData, fetchSortByRank, fetchSortByReleaseDate } from './actions/index';
import 'react-dropdown/style.css';
const App = () => {
	const movielist = useSelector(state => state);
	const dispatch = useDispatch();
	const [movies, setMovies] = useState([]);
	const [dropDownData, setDropdownData] = useState("");
	const [state, setState] = useState({
		results: [],
		selected: {}
	});
	const options = [
		"Release Date", "Rank"
	];
	const [isOpen, setIsopen] = useState(false);
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = () => {
		if (dropDownData != undefined) {
			if (movieListDetails.components[1].type === "movie-list") {
				if (dropDownData === "Rank") {
					return dispatch(fetchSortByRank(movieListDetails.components[1].items))
				}
				else if (dropDownData === "Release Date") {
					return dispatch(fetchSortByReleaseDate(movieListDetails.components[1].items))
				}
				setMovies(movielist.nameReducer?.movieList);
				setState(prevState => {
					return { ...prevState, results: movieListDetails.components[1].items }
				})
			}
		}
	};
	const openPopup = (data) => {
		isOpen === true ? setIsopen(false) : setIsopen(true);
		setState(prevState => {
			return { ...prevState, selected: data }
		});
	}
	useEffect(() => {
		getMovieRequest();

	}, [dropDownData]);
	useEffect(() => {
		dispatch(fetchMovieData(movieListDetails.components[1].items))

	}, [])
	const addFavouriteMovie = (movie) => {
		movie["disabled"] = "true";
		const newFavouriteList = [...favourites, movie];
		const data = [...favourites];
		newFavouriteList.map((item, index) => {
			if (favourites.length > 0 && favourites[index].id === movie.id) {
				setFavourites(data);
				saveToLocalStorage(data);
			}
			else {
				setFavourites(newFavouriteList);
				saveToLocalStorage(newFavouriteList);
			}
		})
	};
	const dropDownValue = ["Release Date", "Rank"]
	const defaultOption = dropDownValue[0];
	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
	const removeFavouriteMovie = (movie) => {
		movie["disabled"] = "false";
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.title !== movie.title
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
	return (
		<div>
			<div className="headingDetails row">
				<h2 className="movie-heading">Movies Recommended For You
				</h2>
				<Dropdown className="orderBy"
					options={options}
					label={options}
					onChange={(e) => { setDropdownData(e.value) }}
					value={defaultOption}
					placeholder="Select an option" />
			</div>
			<MovieCard
				movies={movies}
				openPopup={openPopup}
				handleFavouritesClick={addFavouriteMovie}
				buttontext={"movies"}
				favouriteComponent={AddFavourites}
				isOpen={isOpen}
				dropDownData={dropDownData}
			/>
			<div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
				<div className="sd-header">
					<div className="btn btn-primary" onClick={openPopup}><i className="fa fa-times"></i></div>
				</div>
				<div className="sd-body">
					<PopUpDetails selected={state.selected} openPopup={openPopup} isOpen={isOpen} />
				</div>
			</div>

			{favourites.length > 0 &&
				<h2 className="movie-heading">Favourites</h2>

			}
			<MovieCard
				movies={favourites}
				openPopup={openPopup}
				handleFavouritesClick={removeFavouriteMovie}
				buttontext={"favourites"}
				favouriteComponent={RemoveFavourites}
				isOpen={isOpen}
				dropDownData={dropDownData}
			/>
		</div>
	);
}

export default App;
