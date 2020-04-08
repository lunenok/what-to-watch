import React from "react";
import PropTypes from "prop-types";

const ErrorWindow = ({message = `Выполните вход`}) => {
  return (
    <div style={{zIndex: 100, top: 0, margin: `0 auto`, textAlign: `center`, backgroundColor: `red`, position: `absolute`, left: 0, right: 0, fontSize: `30px`}}>
      {message}
    </div>
  );
};

ErrorWindow.propTypes = {
  message: PropTypes.string,
};

export default ErrorWindow;
