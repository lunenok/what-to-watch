import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const testMovie = {
  id: 4,
  title: `Snatch`,
  genre: `Comedy`,
  year: 1999,
  rating: 2.9,
  reviews: 45,
  director: `Nikita Mikhalkov`,
  starring: [`Jude Law`],
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort.`
};

it(`Should movie card render correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      currentMovie={testMovie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
