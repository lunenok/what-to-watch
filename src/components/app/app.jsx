import React, {PureComponent} from "react";
import MainPage from "./../main-screen/main-screen.jsx";
import PropTypes from "prop-types";

const movieTitleClickHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainPage
        promoFilm={this.props.promoFilm}
        movieList={this.props.movieList}
        onMovieTitleClick={movieTitleClickHandler}
      />
    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired,
  movieList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }))
};

export default App;
