import React from "react";
import PropTypes from "prop-types";

const ErrorWindow = ({errorMessage}) => {
  // const errorStyle = {
  //   zIndex: 100,
  //   margin: 0,
  //   marginLeft: `auto`,
  //   marginRight: `auto`,
  //   textAlign: `center`,
  //   backgroundColor: `red`,
  //   position: `absolute`,
  //   left: 0,
  //   right: 0,
  //   fontSize: `30px`
  // };

  return (
    <div style={{zIndex: 100, margin: `0 auto`, textAlign: `center`, backgroundColor: `red`, position: `absolute`, left: 0, right: 0, fontSize: `30px`}}>
      {errorMessage}
    </div>
  );
};

ErrorWindow.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default ErrorWindow;
