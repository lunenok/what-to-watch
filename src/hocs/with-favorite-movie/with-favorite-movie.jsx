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

    _onFavoriteButtonClick() {
      this.setState({
        isFavorite: !this.state.isFavorite
      });
    }

    render() {
      const {currentMovie} = this.props;

      if (!this.state.isFavorite) {
        return (
          // <Component>
          <button className="btn btn--list movie-card__button" type="button" onClick={()=>{
            this.addToFavorite(currentMovie.id, 1);
            this._onFavoriteButtonClick();
          }}>
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
            <span>My list</span>
          </button>
          // </Component>
        );
      } else {
        return (
          // <Component>
          <button className="btn btn--list movie-card__button" type="button" onClick={()=>{
            this.addToFavorite(currentMovie.id, 0);
            this._onFavoriteButtonClick();
          }}>
            <svg viewBox="0 0 18 14" width={18} height={14}>
              <use xlinkHref="#in-list" />
            </svg>
            <span>My list</span>
          </button>
          // </Component>
        );
      }
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
    addToFavorite: PropTypes.func.isRequired
  };


  const mapDispatchToProps = (dispatch) => ({
    addToFavorite(id, status) {
      dispatch(DataOperation.addFavorite(id, status));
    },
    dispatch
  });

  const mapToState = () => ({
  });

  return connect(mapToState, mapDispatchToProps)(WithFavoriteMovie);

};


export default withFavoriteMovie;
