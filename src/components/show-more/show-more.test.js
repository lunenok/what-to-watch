import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "../show-more/show-more.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`Should movie card render correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    currentMovie: null,
    movies: null
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <ShowMore/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
