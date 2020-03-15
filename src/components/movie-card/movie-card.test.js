import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

jest.mock(`../video-player/video-player`);
const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  imgSrc: `bohemian-rhapsody.jpg`,
  videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Should movie card render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      key={testMovie.id}
      filmInfo={testMovie}
      onMovieClick={() => {}}
      onCardMouseHoverOn={() => {}}
      onCardMouseHoverOff={() => {}}
      isPlaying={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
