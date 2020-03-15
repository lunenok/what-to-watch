import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "./movie-list.jsx";

const testMovies = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2019,
    duration: 120,
    rating: 8.9,
    reviews: 200,
    director: `Nikita Mikhalkov`,
    starring: [`Edward Norton`, `Jude Law`],
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `bohemian-rhapsody.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    textReviews: [
      {
        author: `Kate`,
        date: `2016-12-24`,
        text: `I didn't find it amusing`,
        rating: 9
      },
      {
        author: `Roman`,
        date: `2014-06-20`,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly`,
        rating: 3
      },
    ]
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Drama`,
    year: 2019,
    duration: 44,
    rating: 3.9,
    reviews: 100,
    director: `Nikita Mikhalkov`,
    starring: [`Edward Norton`, `Jude Law`],
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    imgSrc: `dardjeeling-limited.jpg`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    textReviews: [
      {
        author: `Kate`,
        date: `2016-12-24`,
        text: `I didn't find it amusing`,
        rating: 9
      },
      {
        author: `Roman`,
        date: `2014-06-20`,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly`,
        rating: 3
      },
    ]
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

jest.useFakeTimers();

it(`Should movie start correctly in time`, () => {
  const movieList = mount(
      <MovieList
        movies={testMovies}
        onMovieClick={()=>{}}
      />
  );

  const movieCard = movieList.find(`MovieCard`).at(0);
  movieCard.simulate(`mouseEnter`);
  expect(movieList.state(`activeCard`)).toBeNull();

  jest.advanceTimersByTime(400000);
  movieList.update();
  expect(movieList.state(`activeCard`)).toBeTruthy();
});

it(`Should movie end correctly in time`, () => {
  const movieList = mount(
      <MovieList
        movies={testMovies}
        onMovieClick={()=>{}}
      />
  );
  const movieCard = movieList.find(`MovieCard`).at(0);
  movieCard.simulate(`mouseEnter`);
  expect(movieList.state(`activeCard`)).toBeNull();

  movieCard.simulate(`mouseLeave`);
  jest.advanceTimersByTime(40000);
  movieList.update();
  expect(movieList.state(`activeCard`)).toBeNull();
});
