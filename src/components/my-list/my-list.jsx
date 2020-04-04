import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Mylist = ({favoriteMovieList, avatarURL}) => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">My list</h1>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src={`https://htmlacademy-react-3.appspot.com/${avatarURL}`} alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {favoriteMovieList.map((movie) => {
            return (
              <article key ={movie.id} className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src={movie.previewImage} alt={name.movie} width={280} height={175} />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
                </h3>
              </article>
            );
          })}
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

Mylist.propTypes = {
  favoriteMovieList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  })).isRequired,
  avatarURL: PropTypes.string.isRequired,
};

const mapToState = (state) => ({
  favoriteMovieList: state.favoriteMovieList,
  avatarURL: state.avatarURL,
});

export default connect(mapToState)(Mylist);
