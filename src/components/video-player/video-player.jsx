import React from "react";
import withVideo from "../../hocs/with-video.jsx";
import PropTypes from "prop-types";

const VideoPlayer = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.element
};

export default withVideo(VideoPlayer);
