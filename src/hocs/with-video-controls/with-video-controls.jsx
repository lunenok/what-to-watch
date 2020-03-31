import React, {createRef, PureComponent} from "react";
import VideoPlayerFull from "../../components/video-player-full/video-player-full.jsx";
import {getProgress, getRemainingTime} from "../../utils.js";

const withVideoControls = (Component) => {
  class WithVideoControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        duration: 0,
        isPlaying: true
      };

      this._playerRef = createRef();

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
      this._handleLoadMetadata = this._handleLoadMetadata.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    _handleVideoPlay() {
      const player = this._playerRef.current;

      if (player.paused) {
        player.play();
        this.setState({
          isPlaying: true,
        });
      } else {
        player.pause();
        this.setState({
          isPlaying: false,
        });
      }
    }

    _handleLoadMetadata(evt) {
      this.setState({
        duration: Math.floor(evt.target.duration),
      });
    }

    _handleTimeUpdate(evt) {
      this.setState({
        progress: Math.floor(evt.target.currentTime),
      });
    }

    _handleFullScreen() {
      const player = this._playerRef.current;
      player.requestFullscreen();
    }

    render() {

      return (
        <Component
          {...this.props}
          playerRef={this._playerRef}
          onFullScreenButtonClick={this._handleFullScreen}
          onTimeUpdate={this._handleTimeUpdate}
          onLoadedMetadata={this._handleLoadMetadata}
          onPlayButtonClick={this._handleVideoPlay}
          isPlaying={this.state.isPlaying}
          remainingTime={getRemainingTime(this.state.duration, this.state.progress)}
          progress={getProgress(this.state.duration, this.state.progress)}
        />
      );
    }
  }

  return WithVideoControls;
};

export default withVideoControls(VideoPlayerFull);
