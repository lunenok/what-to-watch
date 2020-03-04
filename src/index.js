import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {MovieList, PromoFilm} from "./mocks/films.js";

ReactDOM.render(
    <App promoFilm={PromoFilm} movieList={MovieList}/>,
    document.querySelector(`#root`)
);
