import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./sign-in.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

jest.mock(`../video-player/video-player`);

it(`Should movie list render correctly`, () => {

  const store = mockStore({
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <AuthScreen onSubmit={()=>{}}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
