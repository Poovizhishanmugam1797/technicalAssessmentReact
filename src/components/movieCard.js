import React from 'react';
import "../App.css";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movies, openPopup, handleFavouritesClick, favouriteComponent, isOpen }) => {
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
                            <ReactStars
                                count={5}
                                value={movie.rank}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <button className="watchlistfav" onClick=
                                {
                                    () =>
                                        handleFavouritesClick(movie)
                                }>
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
