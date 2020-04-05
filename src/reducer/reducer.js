import {adaptMovieList, adaptPromoMovie, adaptReview} from "../adapter.js";

const DEFAULT_SHOW_NUBMER = 8;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  genre: `All genres`,
  movieList: [],
  promoFilm: {},
  currentMovie: null,
  reviews: [],
  isPlaying: false,
  shownCount: DEFAULT_SHOW_NUBMER,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  loadingStatus: false,
  avatarURL: null,
};

const ActionType = {
  GENRE_CHANGED: `GENRE_CHANGED`,
  CURRENT_MOVIE_CHANGED: `CURRENT_MOVIE_CHANGED`,
  RESET_STORE: `RESET_STORE`,
  SHOW_MORE: `SHOW_MORE`,
  PLAY_MOVIE: `PLAY_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  LOADING_START: `LOADING_START`,
  LOADING_END: `LOADING_END`,
  LOAD_AVATAR: `LOAD_AVATAR`,
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

  loadFavoriteMovies: (movies) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: adaptMovieList(movies)
    };
  },

  loadPromoMovie: (movie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: adaptPromoMovie(movie)
    };
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: adaptReview(reviews)
    };
  },

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  startLoading: () => {
    return {
      type: ActionType.LOADING_START,
    };
  },

  endLoading: () => {
    return {
      type: ActionType.LOADING_END
    };
  },

  loadAvatar: (link) => {
    return {
      type: ActionType.LOAD_AVATAR,
      payload: link.data.avatar_url
    };
  }
};

const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteMovies(response.data));
      });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },

  addFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`);
  },
};

const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((data) => {
        dispatch(ActionCreator.loadAvatar(data));
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
      .then((data) => {
        dispatch(ActionCreator.loadAvatar(data));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

const reviewOperation = {
  postReview: (review, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.startLoading());
    return api.post(`/comments/${id}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(ActionCreator.endLoading());
    });
  }
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

    case ActionType.LOAD_FAVORITE_MOVIES:
      return {...state, favoriteMovieList: action.payload};

    case ActionType.LOAD_PROMO_MOVIE:
      return {...state, promoFilm: action.payload};

    case ActionType.LOAD_REVIEWS:
      return {...state, reviews: action.payload};

    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload}; // user

    case ActionType.RESET_STORE:
      return {...state, genre: `All genres`, currentMovie: null, shownCount: DEFAULT_SHOW_NUBMER};

    case ActionType.LOADING_START:
      return {...state, loadingStatus: true};

    case ActionType.LOADING_END:
      return {...state, loadingStatus: false};

    case ActionType.LOAD_AVATAR:
      return {...state, avatarURL: action.payload};
  }

  return state;
};

export {reducer, DataOperation, UserOperation, reviewOperation, AuthorizationStatus, ActionCreator, ActionType, changeGenre, changeCurrentMovie, changeFilmsCount, playPauseMovie, resetStore};
