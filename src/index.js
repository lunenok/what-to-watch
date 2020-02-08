import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

export const FilmList = [
  `Battlefield Earth: A Saga of the Year 3000`,
  `Epic Movie`,
  `Santa Claus Conquers the Martians`,
  `United Passions`,
  `The Room`,
  `Howard the Duck`,
  `Showgirls`,
  `The Exorcist II: The Heretic`,
  `Jack and Jill`,
  `Movie 43`,
  `Cannibal Holocaust`,
  `The Human Centipede III`
];

const PromoFilm = {
  filmName: `The Grand Budapest Hotel`,
  filmGenre: `Drama`,
  filmYear: 2014
};

ReactDOM.render(
    <App promoFilm={PromoFilm} filmList={FilmList}/>,
    document.querySelector(`#root`)
);
