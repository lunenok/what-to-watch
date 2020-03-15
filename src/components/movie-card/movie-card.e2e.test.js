import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  imgSrc: `bohemian-rhapsody.jpg`,
  videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title button be pressed`, () => {
  const e = {preventDefault: ()=>{}};
  const onCardClick = jest.fn();
  const movieCards = mount(
      <MovieCard
        key={testMovie.id}
        filmInfo={testMovie}
        onMovieClick={onCardClick}
        onCardMouseHoverOn={() => {}}
        onCardMouseHoverOff={() => {}}
        isPlaying={false}
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
  const movieCards = mount(
      <MovieCard
        key={testMovie.id}
        filmInfo={testMovie}
        onMovieClick={() => {}}
        onCardMouseHoverOn={onCardMouseHover}
        onCardMouseHoverOff={() => {}}
        isPlaying={false}
      />
  );
  const movieCard = movieCards.find(`article`);
  movieCard.simulate(`mouseEnter`);
  expect(onCardMouseHover.mock.calls.length).toBe(1);
  expect(onCardMouseHover.mock.calls[0][0]).toMatchObject(testMovie);
});
