import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "./../movie-card/movie-card.jsx";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this._onCardMouseHoverOn = this._onCardMouseHoverOn.bind(this);
    this._onCardMouseHoverOff = this._onCardMouseHoverOff.bind(this);

    this.timerId = null;
  }

  _onCardMouseHoverOn(movie) {
    this.timerId = setTimeout(() => {
      this.setState({
        activeCard: movie
      });
    }, 1000);
  }

  _onCardMouseHoverOff() {
    this.setState({
      activeCard: null
    });
    clearTimeout(this.timerId);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const {movieList, shownCount} = this.props;
    const {activeCard} = this.state;


    return (
      <div className="catalog__movies-list">
        {movieList.slice(0, shownCount).map((movie) =>
          <NavLink key={movie.id} to={`/movie/${movie.id}`} className="small-movie-card catalog__movies-card" style={{color: `#c9b37e`}}>
            <MovieCard
              filmInfo={movie}
              onCardMouseHoverOn={this._onCardMouseHoverOn}
              onCardMouseHoverOff={this._onCardMouseHoverOff}
              isPlaying={activeCard === movie}
            />
          </NavLink>
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
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
  shownCount: PropTypes.number.isRequired
};

const mapToState = (state) => ({
  movieList: state.movies,
  shownCount: state.shownCount
});

export default connect(mapToState)(MovieList);
