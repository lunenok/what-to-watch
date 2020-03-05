import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "./../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._onCardMouseHoverOn = this._onCardMouseHoverOn.bind(this);
    this._onCardMouseHoverOff = this._onCardMouseHoverOff.bind(this);
  }

  _onCardMouseHoverOn(movie) {
    this.setState({
      activeCard: movie
    });
  }

  _onCardMouseHoverOff() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCard
            key={movie.id}
            filmInfo={movie}
            onMovieTitleClick={onMovieTitleClick}
            onCardMouseHoverOn={this._onCardMouseHoverOn}
            onCardMouseHoverOff={this._onCardMouseHoverOff}
          />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieList;
