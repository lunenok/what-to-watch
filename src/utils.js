const DEFAULT_GENRE = `All genres`;

export const getUniqueGenres = (movies) => {
  let genres = [DEFAULT_GENRE];
  movies.map((movie) => {
    genres.push(movie.genre);
  });
  return Array.from(new Set(genres));
};

