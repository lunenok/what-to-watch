
import {reducer, ActionType} from "./reducer.js";

const DEFAULT_SHOW_NUBMER = 8;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const mockMovie = {
  name: `Seven Years in Tibet`,
  posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Seven_Years_in_Tibet.jpg`,
  previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
  backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Seven_Years_in_Tibet.jpg`,
  backgroundColor: `#C6CADF`,
  description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
  rating: 3.6,
  scoresCount: 112612,
  director: `Jean-Jacques Annaud`,
  starring: [`Brad Pitt`, `David Thewlis`, `BD Wong`],
  runTime: 136,
  genre: `Adventure`,
  released: 1997,
  id: 1,
  isFavorite: false,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const mockMovieList = [mockMovie, mockMovie];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
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
    isError: false,
    favoriteMovieList: []
  });
});

it(`Reducer should change genre correctly`, () => {
  expect(reducer({
    genre: `All genres`,
    shownCount: 8
  }, {
    type: ActionType.GENRE_CHANGED,
    payload: `comedy`
  })).toEqual({
    genre: `comedy`,
    shownCount: 8
  });
});

it(`Reducer should change currently movie correctly`, () => {
  expect(reducer({
    movieList: mockMovieList,
    currentMovie: null
  }, {
    type: ActionType.CURRENT_MOVIE_CHANGED,
    payload: mockMovie.id
  })).toEqual({
    movieList: mockMovieList,
    currentMovie: mockMovie
  });
});

it(`Reducer should change number of shown movie correctly`, () => {
  expect(reducer({
    shownCount: DEFAULT_SHOW_NUBMER
  }, {
    type: ActionType.SHOW_MORE,
    payload: 8
  })).toEqual({
    shownCount: 16
  });
});

it(`Reducer should play movie correctly`, () => {
  expect(reducer({
    isPlaying: false
  }, {
    type: ActionType.PLAY_MOVIE,
    payload: true
  })).toEqual({
    isPlaying: true
  });
});

it(`Reducer should stop movie correctly`, () => {
  expect(reducer({
    isPlaying: true
  }, {
    type: ActionType.PLAY_MOVIE,
    payload: false
  })).toEqual({
    isPlaying: false
  });
});
