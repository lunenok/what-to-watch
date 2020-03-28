import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const MovieLike = ({movieLikeThis}) => {

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">

        {movieLikeThis.map((movie) => {
          return (
            <NavLink key={movie.id} to={`/movie/${movie.id}`} className="small-movie-card catalog__movies-card" style={{color: `#c9b37e`}}>
              <div className="small-movie-card__image">
                <img src={`/img/` + movie.imgSrc} alt={movie.title} width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="#">{movie.title}</a>
              </h3>
            </NavLink>
          );
        })};
      </div>
    </section>
  );
};

MovieLike.propTypes = {
  movieLikeThis: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default MovieLike;
