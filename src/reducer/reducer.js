import {PromoFilm} from "../mocks/films.js";
import {adaptMovieList} from "../adapter.js";

const DEFAULT_SHOW_NUBMER = 8;

const initialState = {
  genre: `All genres`,
  movieList: [],
  promoFilm: PromoFilm,
  currentMovie: null,
  isPlaying: false,
  shownCount: DEFAULT_SHOW_NUBMER,
};

const ActionType = {
  GENRE_CHANGED: `GENRE_CHANGED`,
  CURRENT_MOVIE_CHANGED: `CURRENT_MOVIE_CHANGED`,
  RESET_STORE: `RESET_STORE`,
  SHOW_MORE: `SHOW_MORE`,
  PLAY_MOVIE: `PLAY_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`
};

const changeGenre = (genre) => ({
  type: ActionType.GENRE_CHANGED,
  payload: genre
});

const changeCurrentMovie = (id) => ({
  type: ActionType.CURRENT_MOVIE_CHANGED,
  payload: id
});

const changeFilmsCount = () => ({
  type: ActionType.SHOW_MORE,
  payload: DEFAULT_SHOW_NUBMER
});

const playPauseMovie = (boolean) => ({
  type: ActionType.PLAY_MOVIE,
  payload: boolean
});

const resetStore = () => ({
  type: ActionType.RESET_STORE
});

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
    case ActionType.GENRE_CHANGED:
      return {...state, genre: action.payload, shownCount: DEFAULT_SHOW_NUBMER};

    case ActionType.CURRENT_MOVIE_CHANGED:
      const currentMovie = state.movieList.find((movie) =>
        parseInt(movie.id, 10) === parseInt(action.payload, 10)
      );
      return {...state, currentMovie};

    case ActionType.SHOW_MORE:
      return {...state, shownCount: state.shownCount + action.payload};

    case ActionType.PLAY_MOVIE:
      return {...state, isPlaying: action.payload};

    case ActionType.LOAD_MOVIES:
      return {...state, movieList: action.payload};

    case ActionType.RESET_STORE:
      return {...state, genre: `All genres`, currentMovie: null, shownCount: DEFAULT_SHOW_NUBMER};
  }

  return state;
};

export {reducer, Operation, ActionType, changeGenre, changeCurrentMovie, changeFilmsCount, playPauseMovie, resetStore};
