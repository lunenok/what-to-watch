import React from "react";
import PropTypes from "prop-types";

const ErrorWindow = ({message}) => {
  return (
    <div style={{zIndex: 100, width: `100px`, height: `300px`, margin: `0 auto`, top: 0, textAlign: `center`, backgroundColor: `red`, position: `absolute`, left: 0, right: 0, fontSize: `30px`}}>
      {message}
    </div>
  );
};

ErrorWindow.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorWindow;
