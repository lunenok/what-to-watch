import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {playPauseMovie} from "../../reducer/reducer.js";

const VideoPlayerFull = (props) => {
  const {playerRef, isPlaying, onPlayButtonClick, onFullScreenButtonClick, onLoadedMetadata, onTimeUpdate, remainingTime, progress, currentMovie, dispatch} = props;
  const {name, videoLink, previewImage} = currentMovie;
  return (
    <div className="player">
      <video src={videoLink} ref ={playerRef} className="player__video" autoPlay poster={`../img/${previewImage}`} onLoadedMetadata={onLoadedMetadata} onTimeUpdate={onTimeUpdate}/>
      <button type="button" className="player__exit" onClick={() => dispatch(playPauseMovie(false))}>Exit</button>
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

const mapToState = (state) => ({
  currentMovie: state.currentMovie
});

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

export default connect(mapToState)(VideoPlayerFull);
