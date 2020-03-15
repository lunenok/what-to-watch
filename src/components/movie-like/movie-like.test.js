import React from "react";
import renderer from "react-test-renderer";
import MovieLike from "./movie-like.jsx";

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

it(`Should movie like-list render correctly`, () => {
  const tree = renderer
    .create(
        <MovieLike
          movieLikeThis={movieTestList}
          onMovieClick={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
