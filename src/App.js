import React, { useState, useEffect } from 'react';
import movieListDetails from './top5MoviesAssessement';
import MovieCard from './components/movieCard';
import './App.css';
import AddFavourites from './components/AddFavourites';
import PopUpDetails from './components/PopUpDetails';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [state, setState] = useState({
		results: [],
		selected: {}
	});
	const [isOpen, setIsopen] = useState(false);
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = () => {
		if (movieListDetails.components[1].type === "movie-list") {			
			movieListDetails.components[1].items.sort(function(a, b) {
				return a.rank - b.rank;
			  });
			  setMovies(movieListDetails.components[1].items);
			setState(prevState => {
				return { ...prevState, results: movieListDetails.components[1].items }
			})
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
	}, []);

	const addFavouriteMovie = (movie) => {
		console.log("movie:::"+JSON.stringify(movie));
		const newFavouriteList = [...favourites, movie];
		const data=[...favourites];

		console.log("favourites:::"+JSON.stringify(favourites));
		newFavouriteList.map((item,index)=>
		{
			if(favourites.length>0&&favourites[index].id===movie.id)
			{
				setFavourites(data);
				saveToLocalStorage(data);
			}
			else
			{
				setFavourites(newFavouriteList);
				saveToLocalStorage(newFavouriteList);
			}

		})

		
		
	};
	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.title !== movie.title
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
	return (
		<div>
			<h1 className="movie-heading">Movies Recommended For You</h1>
			<MovieCard
				movies={movies}
				openPopup={openPopup}
				handleFavouritesClick={addFavouriteMovie}
				buttontext={movies}
				favouriteComponent={AddFavourites}
				isOpen={isOpen}			
			/>
			<div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
				<div className="sd-header">
					<div className="btn btn-primary" onClick={openPopup}><i className="fa fa-times"></i></div>
				</div>
				<div className="sd-body">
					<PopUpDetails selected={state.selected} openPopup={openPopup} isOpen={isOpen}  />
				</div>	
			</div>	
			
			{favourites.length>0&&
				<h1 className="movie-heading">Favourites</h1>

			}
				<MovieCard
					movies={favourites}
					openPopup={openPopup}
					handleFavouritesClick={removeFavouriteMovie}
					buttontext={favourites}
				    favouriteComponent={RemoveFavourites}
					isOpen={isOpen}
				/>				
		</div>
	);
}

export default App;
