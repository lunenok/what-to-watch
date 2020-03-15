import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "./../main-screen/main-screen.jsx";
import MoviePage from "./../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentMovie: null};
    this._renderMovieScreen = this._renderMovieScreen.bind(this);
    this._setMovie = this._setMovie.bind(this);
  }

  _setMovie(movie) {
    this.setState({
      currentMovie: movie
    });
  }

  _renderMovieScreen() {
    const {currentMovie} = this.state;

    if (currentMovie) {
      return (
        <MoviePage
          currentMovie={currentMovie}
          movieList={this.props.movieList}
          onMovieClick={this._setMovie}
        />
      );
    }

    return (
      <MainPage
        promoFilm={this.props.promoFilm}
        movieList={this.props.movieList}
        onMovieClick={this._setMovie}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMovieScreen()}
            {/* Тут сделать навлинки */}
          </Route>
          <Route path="/movie-page/">
            <MoviePage
              currentMovie={this.state.currentMovie}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired,
  movieList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired
  }))
};

export default App;
