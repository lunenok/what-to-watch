import React from "react";
import PropTypes from "prop-types";

const MovieLike = ({movieLikeThis, onMovieClick}) => {

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">

        {movieLikeThis.map((movie) => {
          return (
            <article key={movie.id} className="small-movie-card catalog__movies-card">
              <div
                className="small-movie-card__image"
                onClick={() => {
                  onMovieClick(movie);
                }}
              >
                <img src={`/img/` + movie.imgSrc} alt={movie.title} width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a
                  className="small-movie-card__link"
                  href="movie-page.html"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onMovieClick(movie);
                  }}
                >
                  {movie.title}
                </a>
              </h3>
            </article>
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
  onMovieClick: PropTypes.func.isRequired
};

export default MovieLike;
