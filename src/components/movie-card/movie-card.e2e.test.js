import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  img: `bohemian-rhapsody.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title button be pressed`, () => {
  const e = {preventDefault: ()=>{}};
  const onCardClick = jest.fn();
  const movieCards = shallow(
      <MovieCard
        key={testMovie.id}
        filmInfo={testMovie}
        onMovieClick={onCardClick}
        onCardMouseHoverOn={() => {}}
        onCardMouseHoverOff={() => {}}
      />
  );
  const movieTitleLink = movieCards.find(`.small-movie-card__link`);
  movieTitleLink.forEach((it) => {
    it.props().onClick(e);
  });
  expect(onCardClick.mock.calls.length).toBe(1);
});

it(`Handler mouse get data`, () => {
  const onCardMouseHover = jest.fn();
  const movieCards = shallow(
      <MovieCard
        key={testMovie.id}
        filmInfo={testMovie}
        onMovieClick={() => {}}
        onCardMouseHoverOn={onCardMouseHover}
        onCardMouseHoverOff={() => {}}
      />
  );
  const movieCard = movieCards.find(`article`);
  movieCard.simulate(`mouseEnter`);
  expect(onCardMouseHover.mock.calls.length).toBe(1);
  expect(onCardMouseHover.mock.calls[0][0]).toMatchObject(testMovie);
});
