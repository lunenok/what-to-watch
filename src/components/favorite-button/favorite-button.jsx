import React from "react";
import PropTypes from "prop-types";
import withFavoriteMovie from "../../hocs/with-favorite-movie/with-favorite-movie.jsx";

const FavoriteButton = ({children}) => {

  return (
    <>
      {children}
    </>
  );

};

FavoriteButton.propTypes = {
  children: PropTypes.element
};

export default withFavoriteMovie(FavoriteButton);
