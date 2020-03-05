import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "./../main-screen/main-screen.jsx";
import MoviePage from "./../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {curentMovie: null};
    this._renderMovieScreen = this._renderMovieScreen.bind(this);
    this._setMovie = this._setMovie.bind(this);
  }

  _setMovie(movie) {
    this.setState({
      curentMovie: movie
    });
  }

  _renderMovieScreen() {
    const clickedMovie = this.state;

    if (clickedMovie.curentMovie) {
      return (
        <MoviePage
          curentMovie={clickedMovie.curentMovie}
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
          </Route>
          <Route exact path="/movie-page">
            <MoviePage
              curentMovie={this.props.movieList[2]}
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
    img: PropTypes.string.isRequired
  }))
};

export default App;
