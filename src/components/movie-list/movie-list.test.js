import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

const movieTestList = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2019,
    img: `bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Drama`,
    year: 2019,
    img: `bohemian-rhapsody.jpg`
  }
];

it(`Should movie list render correctly`, () => {
  const tree = renderer
    .create(
        <MovieList
          movies={movieTestList}
          onMovieTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
