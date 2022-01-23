import React from 'react';
import "../App.css";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movies, openPopup, handleFavouritesClick, favouriteComponent }) => {
    const FavouriteComponent = favouriteComponent;
    return (
        <>
            <div className='row'>
                {movies.map((movie, index) => (
                    <div className="movie-card-container"
                        onClick={() => openPopup(movie)}>
                        <div className="image-container">
                            <div
                                className="bg-image"
                                style={{ backgroundImage: `url(${movie.imageUrl})` }}
                            />
                        </div>
                        <div className="movie-info">
                            <div>
                                <h1>{movie.title}</h1>
                                <small>Released Date: {movie.releaseDate}</small>
                            </div>
                            <h4>Rating: {movie.rank} / 5</h4>
                            <ReactStars
                                count={5}
                                value={movie.rank}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <button className="watchlistfav" onClick={() => handleFavouritesClick(movie)}>
                                <FavouriteComponent />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default MovieCard;
