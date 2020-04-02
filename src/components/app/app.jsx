import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainPage from "./../main-screen/main-screen.jsx";
import MoviePage from "./../movie-page/movie-page.jsx";
import AuthScreen from "../sign-in/sign-in.jsx";
import {UserOperation} from "../../reducer/reducer.js";
import {AuthorizationStatus} from "../../reducer/reducer.js";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this._renderMovieScreen = this._renderMovieScreen.bind(this);
  }

  _renderMovieScreen() {
    const {movieList, currentMovie, promoFilm} = this.props;

    if (currentMovie) {
      return (
        <MoviePage
          currentMovie={currentMovie}
        />
      );
    }

    return (
      <MainPage
        promoFilm={promoFilm}
        movieList={movieList}
      />
    );
  }

  _renderSignIn() {
    const {movieList, authorizationStatus, promoFilm} = this.props;
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <AuthScreen
          onSubmit={this.props.login}
        />
      );
    }

    return (
      <MainPage
        promoFilm={promoFilm}
        movieList={movieList}
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
          <Route path="/movie/:id">
            <MoviePage/>
          </Route>
          <Route exact path="/dev">
            {this._renderSignIn()}
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
  currentMovie: PropTypes.shape({
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
  }),
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
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

const mapToState = (state) => ({
  movieList: state.movieList,
  promoFilm: state.promoFilm,
  authorizationStatus: state.authorizationStatus
});

export default connect(mapToState, mapDispatchToProps)(App);
