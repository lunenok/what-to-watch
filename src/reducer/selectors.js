const MOVIE_LIKE_THIS_COUNT = 4;

export const getMoviesListByGenre = (movieList, genre) => {
  if (genre === `All genres`) {
    return movieList;
  }
  return movieList.filter((movie) => movie.genre === genre);
};

export const getMoviesLikeThis = (movieList, currentMovie, count = MOVIE_LIKE_THIS_COUNT) => {
  return movieList.filter((movie) => movie.genre === currentMovie.genre).slice(0, count);
};

export const getMoviesListLenghtByGenre = (moviesList, genre) => {
  const thisGenreMovieList = getMoviesListByGenre(moviesList, genre);
  return thisGenreMovieList.length;
};

export const getFavoriteMovies = (movieList) => {
  return movieList.filter((movie) => movie.isFavorite === true);
};
