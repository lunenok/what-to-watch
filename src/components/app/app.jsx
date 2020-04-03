import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainPage from "./../main-screen/main-screen.jsx";
import MoviePage from "./../movie-page/movie-page.jsx";
import AuthScreen from "../sign-in/sign-in.jsx";
import {DataOperation, UserOperation, reviewOperation} from "../../reducer/reducer.js";
import {AuthorizationStatus} from "../../reducer/reducer.js";
import AddReview from "../add-review/add-review.jsx";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this._renderMovieScreen = this._renderMovieScreen.bind(this);
  }

  componentDidMount() {
    this.props.loadPromoMovie();
    this.props.loadMovies();
    this.props.checkAuth();
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
    if (this.props.movieList === null || this.props.promoFilm === null) {
      return (
        <div>loading...</div>
      );
    }

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
          <Route exact path="/dev-review">
            <AddReview
              onSubmit={this.props.comment}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.shape({
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
  }).isRequired,
  currentMovie: PropTypes.shape({
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
  }),
  movieList: PropTypes.arrayOf(PropTypes.shape({
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
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  comment: PropTypes.func.isRequired,
  loadPromoMovie: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  checkAuth() {
    dispatch(UserOperation.checkAuth());
  },

  comment(review) {
    dispatch(reviewOperation.postReview(review));
  },

  loadMovies() {
    dispatch(DataOperation.loadMovies());
  },

  loadPromoMovie() {
    dispatch(DataOperation.loadPromoMovie());
  },
});

const mapToState = (state) => ({
  movieList: state.movieList,
  promoFilm: state.promoFilm,
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapToState, mapDispatchToProps)(App);
