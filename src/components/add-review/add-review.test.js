import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import AddReview from "../add-review/add-review.jsx";
import {AuthorizationStatus} from "../../reducer/reducer.js";

const mockStore = configureStore([]);

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

it(`Should add review page render correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    currentMovie: mockMovie,
    movieList: [mockMovie, mockMovie],
    promoFilm: mockMovie,
    reviews: [],
    isPlaying: false,
    shownCount: 8,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    loadingStatus: false,
    avatarURL: null,
    isError: false,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <AddReview onSubmit={()=>{}}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
