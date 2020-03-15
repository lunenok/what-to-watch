const DEFAULT_GENRE = `All genres`;

export const findListOfFilmsByGenre = (filmList, genre, count = 4) => {
  return filmList
    .filter((film) => (film.genre === genre))
    .slice(0, count);
};

export const getUniqueGenres = (movies) => {
  let genres = [DEFAULT_GENRE];
  movies.map((movie) => {
    genres.push(movie.genre)
  });
  return Array.from(new Set(genres))
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
