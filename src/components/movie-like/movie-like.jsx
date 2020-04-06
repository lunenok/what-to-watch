import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import withActiveCard from "../../hocs/with-active-card/with-active-card.jsx";
import MovieCard from "./../movie-card/movie-card.jsx";

const MovieLike = ({movieLikeThis, onMouseEnter, onMouseLeave}) => {


  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">

        {movieLikeThis.map((movie) => {
          return (
            <NavLink key={movie.id} to={`/movie/${movie.id}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="small-movie-card catalog__movies-card" style={{color: `#c9b37e`}}>
              <MovieCard
                filmInfo={movie}
              />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

MovieLike.propTypes = {
  movieLikeThis: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default withActiveCard(MovieLike);
