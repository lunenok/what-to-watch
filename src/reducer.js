import {MovieList} from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  currentMovie: null,
  movies: MovieList
}

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GENRE_CHANGED: `GENRE_CHANGED`,
  CURRENT_MOVIE_CHANGED: `CURRENT_MOVIE_CHANGED`
}

const changeGenre = (genre) => ({
  type: ActionType.GENRE_CHANGED,
  payload: genre
})

const changeCurrentMovie = (id) => ({
  type: ActionType.CURRENT_MOVIE_CHANGED,
  payload: id
})

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return {...state, genre: action.payload};

    case ActionType.GET_FILTERED_MOVIE_LIST:
      return {state, movies: action.payload};

    case ActionType.GENRE_CHANGED:
      if (action.payload === `All genres`) {
        return {...state, movies: MovieList}
      }

      return {...state, movies: MovieList.filter((movie) =>
        movie.genre === action.payload
      )};

    case ActionType.CURRENT_MOVIE_CHANGED:
      const m = MovieList.find(movie =>
        movie.id == action.payload
      )
      const movieList = MovieList.filter(movie =>
        movie.genre == m.genre
      )
      return {...state, currentMovie: m, movies: movieList}
  }

  return state
}

export {reducer, ActionType, changeGenre, changeCurrentMovie};
