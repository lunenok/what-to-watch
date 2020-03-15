import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "./../movie-card/movie-card.jsx";

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
    const {movies, onMovieClick} = this.props;
    const {activeCard} = this.state;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCard
            key={movie.id}
            filmInfo={movie}
            onMovieClick={onMovieClick}
            onCardMouseHoverOn={this._onCardMouseHoverOn}
            onCardMouseHoverOff={this._onCardMouseHoverOff}
            isPlaying={activeCard === movie}
          />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired
  })).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieList;
