import {MONTHS, DEFAULT_GENRE} from "./constants.js";

export const getUniqueGenres = (movies) => {
  let genres = [DEFAULT_GENRE];
  movies.map((movie) => {
    genres.push(movie.genre);
  });
  return Array.from(new Set(genres));
};

export const getDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours < 1) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};

export const formatRating = (rating) => {
  return rating.toString().replace(`.`, `,`);
};

export const formatDateForReview = (date) => {
  const _date = new Date(date);
  const day = _date.getDate();
  const month = MONTHS[_date.getMonth()];
  const year = _date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const getTextRating = (rating) => {
  switch (true) {
    case (rating < 3):
      return `Bad`;
    case (rating < 5):
      return `Normal`;
    case (rating < 8):
      return `Good`;
    case (rating < 10):
      return `Very good`;
    case rating = 10:
      return `Awesome`;
    default:
      break;
  }
  return null;
};

export const getProgress = (maxValue, currentValue) => {
  return String((currentValue / maxValue) * 100);
};

export const getRemainingTime = (duration, currentTime) => {
  const difference = duration - currentTime;
  const hours = `${Math.floor(difference / 3600)}`;
  const minutes = `${Math.floor(difference / 60)}`;
  const sec = `${Math.floor(difference % 60)}`;

  const hoursStr = hours.length === 2 ? hours : `0${hours}`;
  const minutesStr = minutes.length === 2 ? minutes : `0${minutes}`;
  const secStr = sec.length === 2 ? sec : `0${sec}`;

  return `${hoursStr}:${minutesStr}:${secStr}`;
};
