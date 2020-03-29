import React from "react";
import renderer from "react-test-renderer";
import GenresList from "../genres-list/genres-list.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const uniqueGenres = [`Drama`, `TVshow`];

it(`Should movie card render correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    currentMovie: null,
    movies: null
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList uniqueGenres={uniqueGenres}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
