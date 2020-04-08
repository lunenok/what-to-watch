import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {DataOperation} from "../../reducer/reducer.js";

const withFavoriteMovie = (Component) => {
  class WithFavoriteMovie extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.currentMovie.isFavorite
      };

      this.currentMovie = this.props.currentMovie;
      this._onFavoriteButtonClick = this._onFavoriteButtonClick.bind(this);
      this.addToFavorite = this.props.addToFavorite.bind(this);
    }

    componentDidMount() {

    }

    _onFavoriteButtonClick() {
      this.setState({
        isFavorite: !this.state.isFavorite
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isFavorite={this.state.isFavorite}
          currentMovie={this.currentMovie}
          onFavoriteButtonClick={this._onFavoriteButtonClick}
          addFavorite={this.addFavorite}>
        </Component>
      );
    }
  }

  WithFavoriteMovie.propTypes = {
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
    }).isRequired,
    addToFavorite: PropTypes.func.isRequired,
    authorizationStatus: PropTypes.string.isRequired
  };


  const mapDispatchToProps = (dispatch) => ({
    addToFavorite(id, status) {
      dispatch(DataOperation.addFavorite(id, status));
    },
    dispatch
  });

  const mapToState = (state) => ({
    authorizationStatus: state.authorizationStatus,
  });

  return connect(mapToState, mapDispatchToProps)(WithFavoriteMovie);

};

export default withFavoriteMovie;
