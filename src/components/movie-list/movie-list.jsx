import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./../movie-card/movie-card.jsx";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getMoviesListByGenre} from "../../reducer/selectors.js";

const MovieList = ({movieList, shownCount, activeGenre}) => {
  const filtedFilms = getMoviesListByGenre(movieList, activeGenre);

  return (
    <div className="catalog__movies-list">
      {filtedFilms.slice(0, shownCount).map((movie) =>
        <NavLink key={movie.id} to={`/movie/${movie.id}`} className="small-movie-card catalog__movies-card" style={{color: `#c9b37e`}}>
          <MovieCard
            filmInfo={movie}
          />
        </NavLink>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    description: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })).isRequired,
  shownCount: PropTypes.number.isRequired,
  activeGenre: PropTypes.string.isRequired
};

const mapToState = (state) => ({
  movieList: state.movieList,
  activeGenre: state.genre,
  shownCount: state.shownCount
});

export default connect(mapToState)(MovieList);
