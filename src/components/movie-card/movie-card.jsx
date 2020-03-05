import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmInfo, onMovieTitleClick, onCardMouseHoverOn, onCardMouseHoverOff} = this.props;
    const {id, title} = filmInfo;

    return (
      <article
        key={id}
        onMouseEnter={() => {
          onCardMouseHoverOn(filmInfo);
        }}
        onMouseLeave={onCardMouseHoverOff}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <img src="img/pulp-fiction.jpg" alt={title} width={280} height={175} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#" onClick={onMovieTitleClick}>{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardMouseHoverOn: PropTypes.func.isRequired,
  onCardMouseHoverOff: PropTypes.func.isRequired
};

export default MovieCard;
