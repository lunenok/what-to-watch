import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "./../video-player/video-player.jsx";
import withActiveCard from "../../hocs/with-active-card/with-active-card.jsx";
// import {Link, Router} from "react-router-dom";
// import history from "../../history.js";

const MovieCard = (props) => {
  const {name, previewVideoLink, previewImage} = props.filmInfo;
  const {onMouseEnter, onMouseLeave, isPlaying} = props;

  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer previewVideoLink={previewVideoLink} previewImage={previewImage} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-movie-card__title">
        <p className="small-movie-card__link" href="#">{name}</p>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default withActiveCard(MovieCard);
