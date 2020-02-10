import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FilmListTest = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`
];

const PromoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App promoFilm={PromoFilmTest} filmList={FilmListTest} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
