import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGenre} from "../../reducer.js";

const GenresList = ({uniqueGenres, dispatch}) => {
  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre) => {
        return (
          <li key={genre} className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link" onClick={() => dispatch(changeGenre(genre))}>
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  uniqueGenres: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect()(GenresList);

