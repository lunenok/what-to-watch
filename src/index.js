import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoFilm = {
  filmName: `The Grand Budapest Hotel`,
  filmGenre: `Drama`,
  filmYear: 2014
};

ReactDOM.render(
    <App film={PromoFilm}/>,
    document.querySelector(`#root`)
);
