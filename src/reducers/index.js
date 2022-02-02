import { SET_MOVIE_DATA,SET_SORT_RELEASEDATE,SET_SORT_RANK } from "../types";
import movieListDetails from '../top5MoviesAssessement';
const INITIAL_STATE = {
  movieList: movieListDetails.components[1].items
};

export default ( state = INITIAL_STATE,action) => {

  switch (action.type) {
    case SET_MOVIE_DATA:
      return {
        ...state,
        movieList: action.payload.movieData
      };
      case SET_SORT_RELEASEDATE:
        return {
              ...state,
              movieList: action.payload.data
            };
      case SET_SORT_RANK:
              return {
                    ...state,
                    movieList: action.payload.data
                  };      
   default:
      return INITIAL_STATE;
  }
};
