import React from 'react';
import "../App.css";
import StarRatings from 'react-star-ratings';

const MovieCard = ({ movies, openPopup, handleFavouritesClick, favouriteComponent, isOpen, buttontext, dropDownData }) => {
    const FavouriteComponent = favouriteComponent;
    return (
        <>
            <div className='row'>
                {movies.map((movie, index) => (
                    <div className="movie-card-container"
                    >
                        <div className="image-container" onClick={() => openPopup(movie)} >
                            <div
                                className="bg-image"
                                style={{ backgroundImage: `url(${movie.imageUrl})` }}
                            />
                        </div>
                        <div className="movie-info">
                            <div>
                                <h1>{movie.title}</h1>
                                <small className="releaseDate">Released Date: {movie.releaseDate}</small>
                            </div>
                            <h5>Rating: {movie.rank} / 5</h5>
                            <StarRatings
                                rating={movie.rank}
                                starRatedColor="#e2df15"
                                numberOfStars={5}
                                size={20}
                                name='rating'
                            />
                            <button className="watchlistfav" onClick=
                                {
                                    () =>
                                        handleFavouritesClick(movie)
                                } disabled={movie.disabled === "true" && buttontext === "movies" ?
                                    true : false}>
                                <FavouriteComponent isOpen={isOpen} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default MovieCard;
