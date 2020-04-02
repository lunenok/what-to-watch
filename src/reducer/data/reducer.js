
import {adaptMovieList} from "./../../adapter.js";

const initialState = {
  movieList: []
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: adaptMovieList(movies)
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {...state, movieList: action.payload};
  }

  return state;
};

export {reducer, Operation, ActionType};
