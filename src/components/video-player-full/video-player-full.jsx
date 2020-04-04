import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {playPauseMovie} from "../../reducer/reducer.js";
import history from "../../history.js";

const VideoPlayerFull = (props) => {
  const {playerRef, isPlaying, onPlayButtonClick, onFullScreenButtonClick, onLoadedMetadata, onTimeUpdate, remainingTime, progress, promoFilm, currentMovie, dispatch} = props;

  const getMovieForPlaying = () => {
    if (!currentMovie) {
      return promoFilm;
    } else {
      return currentMovie;
    }
  };

  const movieForPlaying = getMovieForPlaying();

  const {name, videoLink, previewImage} = movieForPlaying;

  const onExitClick = () => {
    dispatch(playPauseMovie(false));
    history.push(`../`);
  };

  return (
    <div className="player">
      <video src={videoLink} ref ={playerRef} className="player__video" autoPlay poster={`../img/${previewImage}`} onLoadedMetadata={onLoadedMetadata} onTimeUpdate={onTimeUpdate}/>
      <button type="button" className="player__exit" onClick={() => onExitClick()}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={100} />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{remainingTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>

            {isPlaying ? (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
            )
            }

          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayerFull.propTypes = {
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
    videoLink: PropTypes.string.isRequired,
  }),
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
  playerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  remainingTime: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapToState = (state) => ({
  currentMovie: state.currentMovie,
  promoFilm: state.promoFilm
});

export default connect(mapToState)(VideoPlayerFull);
