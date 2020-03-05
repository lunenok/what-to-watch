import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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
    img: `bohemian-rhapsody.jpg`
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
    img: `bohemian-rhapsody.jpg`
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


