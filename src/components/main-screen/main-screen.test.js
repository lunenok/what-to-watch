import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-screen.jsx";

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

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};


it(`Should main-screen render correctly`, () => {
  const tree = renderer
    .create(
        <MainPage
          promoFilm={promoFilmTest}
          movieList={movieTestList}
          onMovieClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
