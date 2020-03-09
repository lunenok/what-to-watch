import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  render() {
    return (
      <video ref={this._videoRef} muted width={280} height={175}/>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    this.setState({
      isPlaying: this.props.isPlaying
    });

    if (this.state.isPlaying) {
      video.play();
      return;
    }

    video.load();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {videoSrc, imgSrc} = this.props;
    video.src = videoSrc;
    video.poster = `img/` + imgSrc;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = null;
    video.poster = null;
  }
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
