import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

jest.mock(`../video-player/video-player`);
const movieTestList = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2019,
    imgSrc: `war-of-the-worlds.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Drama`,
    year: 2019,
    imgSrc: `war-of-the-worlds.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

it(`Should movie list render correctly`, () => {
  const tree = renderer
    .create(
        <MovieList
          movies={movieTestList}
          onMovieClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
