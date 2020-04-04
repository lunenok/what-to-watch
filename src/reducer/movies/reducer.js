const DEFAULT_SHOW_NUBMER = 8;

const initialState = {
  genre: `All genres`,
  isPlaying: false,
  shownCount: DEFAULT_SHOW_NUBMER,
};

const ActionType = {
  GENRE_CHANGED: `GENRE_CHANGED`,
  SHOW_MORE: `SHOW_MORE`,
  PLAY_MOVIE: `PLAY_MOVIE`,
};

const changeGenre = (genre) => ({
  type: ActionType.GENRE_CHANGED,
  payload: genre
});

const changeFilmsCount = () => ({
  type: ActionType.SHOW_MORE,
  payload: DEFAULT_SHOW_NUBMER
});

const playPauseMovie = (boolean) => ({
  type: ActionType.PLAY_MOVIE,
  payload: boolean
});

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.GENRE_CHANGED:
      return {...state, genre: action.payload, shownCount: DEFAULT_SHOW_NUBMER};

    case ActionType.SHOW_MORE:
      return {...state, shownCount: state.shownCount + action.payload};

    case ActionType.PLAY_MOVIE:
      return {...state, isPlaying: action.payload};
  }

  return state;
};

export {reducer, changeGenre, changeFilmsCount, playPauseMovie};
