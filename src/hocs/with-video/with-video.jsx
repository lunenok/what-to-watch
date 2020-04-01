import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: this.props.isPlaying,
      };
    }

    render() {
      return (
        <Component>
          <video
            ref={this._videoRef}
            muted
            width={280}
            height={175}
          />
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      this.setState({
        isPlaying: this.props.isPlaying
      }, () => {
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.load();
        }
      });
    }

    componentDidMount() {
      const video = this._videoRef.current;
      const {videoSrc, imgSrc} = this.props;
      video.src = videoSrc;
      video.poster = imgSrc;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = null;
      video.poster = null;
    }
  }

  WithVideo.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithVideo;
};

export default withVideo;
