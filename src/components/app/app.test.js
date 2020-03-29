import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
<<<<<<< HEAD
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

=======
>>>>>>> master
jest.mock(`../video-player/video-player`);
const movieTestList = [
  {
    id: 3,
    title: `Epic Movie`,
    genre: `Drama`,
    year: 2019,
    duration: 142,
    rating: 2.9,
    reviews: 55,
    director: `Nikita Mikhalkov`,
    starring: [`Edward Norton`, `Jude Law`],
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `shutter-island.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    textReviews: [
      {
        author: `Kate`,
        date: `2016-12-24`,
        text: `I didn't find it amusing`,
        reviewRating: 9
      },
      {
        author: `Roman`,
        date: `2014-06-20`,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly`,
        reviewRating: 3
      },
    ]
  },
  {
    id: 4,
    title: `Santa Claus Conquers the Martians`,
    genre: `Drama`,
    year: 2019,
    duration: 133,
    rating: 6.9,
    reviews: 65,
    director: `Nikita Mikhalkov`,
    starring: [`Edward Norton`, `Jude Law`],
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `mindhunter.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    textReviews: [
      {
        author: `Kate`,
        date: `2016-12-24`,
        text: `I didn't find it amusing`,
        reviewRating: 9
      },
      {
        author: `Roman`,
        date: `2014-06-20`,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly`,
        reviewRating: 3
      },
    ]
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};


it(`Render App`, () => {
  const store = mockStore({
    genre: `All genres`,
    currentMovie: null,
    movies: movieTestList
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            promoFilm={promoFilmTest}
            movieList={movieTestList}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


