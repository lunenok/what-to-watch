export const findListOfFilmsLikeThis = (filmList, genre) => {
  return filmList
    .filter((film) => (film.genre === genre));
};
