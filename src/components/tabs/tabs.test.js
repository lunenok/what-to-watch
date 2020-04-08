import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const testMovie = {
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
  textReviews: [
    {
      author: `Kate`,
      date: `2020-04-02T16:42:52.258Z`,
      text: `I didn't find it amusing`,
      reviewRating: 9
    },
    {
      author: `Roman`,
      date: `2020-04-02T16:42:52.258Z`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly`,
      reviewRating: 3
    },
  ]
};

it(`Should tabs page render correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    currentMovie: testMovie,
    movieList: []
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Tabs
            currentMovie={testMovie}
            loadReviews={()=>{}}
            onTabClick={()=>{}}
            currentTab={`Overview`}
            textReviews={testMovie.textReviews}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
