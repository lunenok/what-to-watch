import React from "react";
import MainPage from "./../main-screen/main-screen.jsx";
import PropTypes from "prop-types";

const App = ({promoFilm, filmList}) => {
  return (
    <MainPage promoFilm={promoFilm} filmList={filmList}/>
  );
};

App.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.string).isRequired,
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired
};

export default App;
