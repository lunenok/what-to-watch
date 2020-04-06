import ErrorWindow from "./error-window.jsx";
import React from "react";
import renderer from "react-test-renderer";

it(`Should add review page render correctly`, () => {
  const defaultMessage = `Выполните вход`;

  const tree = renderer
    .create(
        // <Provider store={store}>
        <ErrorWindow message={defaultMessage}/>
        // </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
