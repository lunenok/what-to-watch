import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  duration: 120,
  rating: 8.9,
  reviews: 200,
  director: `Nikita Mikhalkov`,
  starring: [`Edward Norton`, `Jude Law`],
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  imgSrc: `bohemian-rhapsody.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  textReviews: [
    {
      author: `Kate`,
      date: `2016-12-24`,
      text: `I didn't find it amusing`,
      reviewRating: 9
    },
    {
      author: `Roman`,
      date: `2014-06-20`,
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
          <Tabs currentMovie={testMovie} loadReviews={()=>{}}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
