import {MovieList} from "./mocks/films.js";

const DEFAULT_SHOW_NUBMER = 8;
const totalMovieListLenght = MovieList.length;

const initialState = {
  genre: `All genres`,
  currentMovie: null,
  movies: MovieList,
  currentGenreCount: totalMovieListLenght,
  shownCount: DEFAULT_SHOW_NUBMER,
}

const ActionType = {
  GENRE_CHANGED: `GENRE_CHANGED`,
  CURRENT_MOVIE_CHANGED: `CURRENT_MOVIE_CHANGED`,
  RESET_STORE: `RESET_STORE`,
  SHOW_MORE: `SHOW_MORE`
}

const changeGenre = (genre) => ({
  type: ActionType.GENRE_CHANGED,
  payload: genre
})

const changeCurrentMovie = (id) => ({
  type: ActionType.CURRENT_MOVIE_CHANGED,
  payload: id
})

const changeFilmsCount = (count) => ({
  type: ActionType.SHOW_MORE,
  payload: count
})

const resetStore = () => ({
  type: ActionType.RESET_STORE
})

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.GENRE_CHANGED:
      if (action.payload === `All genres`) {
        return {...state, movies: MovieList, genre: `All genres`, shownCount: DEFAULT_SHOW_NUBMER, currentGenreCount: totalMovieListLenght}
      }

      const genreMovieList = MovieList.filter((movie) =>
        movie.genre === action.payload
      )

      return {...state, movies: genreMovieList, genre: action.payload, currentGenreCount: genreMovieList.length, shownCount: DEFAULT_SHOW_NUBMER};

    case ActionType.CURRENT_MOVIE_CHANGED:
      const currentMovie = MovieList.find(movie =>
        movie.id == action.payload
      )
      const movieList = MovieList.filter(movie =>
        movie.genre == currentMovie.genre
      )
      return {...state, currentMovie: currentMovie, movies: movieList}

    case ActionType.SHOW_MORE:
      return {...state, shownCount: state.shownCount + action.payload}

    case ActionType.RESET_STORE:
      return {...state, genre: `All genres`, currentMovie: null, movies: MovieList, shownCount: DEFAULT_SHOW_NUBMER}
  }

  return state
}

export {reducer, ActionType, changeGenre, changeCurrentMovie, changeFilmsCount, resetStore};
