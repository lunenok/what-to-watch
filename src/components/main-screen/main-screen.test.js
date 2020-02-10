import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-screen.jsx";
import {FilmListTest, PromoFilmTest} from "./main-screen.test.mock.js";

it(`Should main-screen render correctly`, () => {
  const tree = renderer
    .create(<MainPage promoFilm={PromoFilmTest} filmList={FilmListTest} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
