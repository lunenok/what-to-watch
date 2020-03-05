import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  img: `bohemian-rhapsody.jpg`
};

it(`Should movie card render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      key={testMovie.id}
      filmInfo={testMovie}
      onMovieTitleClick={() => {}}
      onCardMouseHoverOn={() => {}}
      onCardMouseHoverOff={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
