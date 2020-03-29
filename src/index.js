import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {MovieList, PromoFilm} from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App promoFilm={PromoFilm} movieList={MovieList}/>
    </Provider>,
    document.querySelector(`#root`)
);

// module5-task22
