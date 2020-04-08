import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link, Router} from "react-router-dom";
import history from "../../history.js";
import {DataOperation} from "../../reducer/reducer.js";

export class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(DataOperation.loadFavoriteMovies());
  }

  render() {
    const {favoriteMovieList, avatarURL} = this.props;

    return (
      <Router history={history}>
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
                  <Link to={`/movie/${movie.id}`} style={{color: `#c9b37e`}} key ={movie.id} className="small-movie-card catalog__movies-card">
                    <div className="small-movie-card__image">
                      <img src={movie.previewImage} alt={name.movie} width={280} height={175} />
                    </div>
                    <h3 className="small-movie-card__title">
                      <p className="small-movie-card__link" href="movie-page.html">{movie.name}</p>
                    </h3>
                  </Link>
                );
              })}
            </div>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light" onClick={()=>{
                history.goBack();
              }}>
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
      </Router>

    );
  }
}

MyList.propTypes = {
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
  avatarURL: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapToState = (state) => ({
  favoriteMovieList: state.favoriteMovieList,
  avatarURL: state.avatarURL,
});

export default connect(mapToState)(MyList);
