import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "./../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmInfo, onCardMouseHoverOn, onCardMouseHoverOff, isPlaying} = this.props;
    const {id, name, previewVideoLink, previewImage} = filmInfo;

    return (
      <article
        key={id}
        onMouseEnter={() => {
          onCardMouseHoverOn(filmInfo);
        }}
        onMouseLeave={onCardMouseHoverOff}
      >
        <div
          className="small-movie-card__image"
        >
          <VideoPlayer videoSrc={previewVideoLink} imgSrc={previewImage} isPlaying={isPlaying}/>
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link" href="#"
          >{name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }).isRequired,
  onCardMouseHoverOn: PropTypes.func.isRequired,
  onCardMouseHoverOff: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
