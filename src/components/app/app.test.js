import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

jest.mock(`../video-player/video-player`);
const movieTestList = [
  {
    id: 3,
    title: `Epic Movie`,
    genre: `Drama`,
    year: 2019,
    rating: 2.9,
    reviews: 55,
    director: `Nikita Mikhalkov`,
    starring: `Edward Norton, Jude Law`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `war-of-the-worlds.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 4,
    title: `Santa Claus Conquers the Martians`,
    genre: `Drama`,
    year: 2019,
    rating: 6.9,
    reviews: 65,
    director: `Nikita Mikhalkov`,
    starring: `Edward Norton, Jude Law`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `war-of-the-worlds.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};


it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          promoFilm={promoFilmTest}
          movieList={movieTestList}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


