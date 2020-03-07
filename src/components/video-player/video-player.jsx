import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        autoPlay
        controls
        muted
        width={280}
        height={175}
      />
    );
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {videoSrc, imgSrc} = this.props;
    video.src = videoSrc;
    video.poster = `img/` + imgSrc;

    this.setState({
      isPlaying: true
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = null;

    this.setState({
      isPlaying: false
    });
  }
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default VideoPlayer;
