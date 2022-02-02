import { SET_MOVIE_DATA, SET_SORT_RANK, SET_SORT_RELEASEDATE } from "../types";
export const fetchMovieData = (data) => (dispatch, getState) => {
  const movieData=data;
  try {
    dispatch({
      type: SET_MOVIE_DATA,
      payload: {
        movieData,      
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
export const fetchSortByRank = (rankData) => (dispatch, getState) => {
    const data=rankData.sort((a, b) => b.rank - a.rank);
    try {
      console.log(rankData, getState());
      dispatch({
        type: SET_SORT_RANK,
        payload: {
            data
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  export const fetchSortByReleaseDate = (releaseData) => (dispatch, getState) => {
    const data=releaseData.sort((a, b) => a.releaseDate - b.releaseDate);
    try {
      console.log(releaseData, getState());
      dispatch({
        type: SET_SORT_RELEASEDATE,
        payload: {
            data
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
