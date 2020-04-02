import {PromoFilm} from "../mocks/films.js";
import {adaptMovieList} from "../adapter.js";

const DEFAULT_SHOW_NUBMER = 8;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  genre: `All genres`,
  movieList: [],
  promoFilm: PromoFilm,
  currentMovie: null,
  isPlaying: false,
  shownCount: DEFAULT_SHOW_NUBMER,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const ActionType = {
  GENRE_CHANGED: `GENRE_CHANGED`,
  CURRENT_MOVIE_CHANGED: `CURRENT_MOVIE_CHANGED`,
  RESET_STORE: `RESET_STORE`,
  SHOW_MORE: `SHOW_MORE`,
  PLAY_MOVIE: `PLAY_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION` // user
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
  },

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  }, // user
};

const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  },
};

const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload}; // user

    case ActionType.RESET_STORE:
      return {...state, genre: `All genres`, currentMovie: null, shownCount: DEFAULT_SHOW_NUBMER};
  }

  return state;
};

export {reducer, DataOperation, UserOperation, AuthorizationStatus, ActionCreator, ActionType, changeGenre, changeCurrentMovie, changeFilmsCount, playPauseMovie, resetStore};
