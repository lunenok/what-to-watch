import React from "react";
import PropTypes from "prop-types";
import withFavoriteMovie from "../../hocs/with-favorite-movie/with-favorite-movie.jsx";

const FavoriteButton = (props) => {
  const {isFavorite, currentMovie, _onFavoriteButtonClick, addToFavorite, authorizationStatus} = props;

  if (!isFavorite) {
    return (
      <button className="btn btn--list movie-card__button" type="button" onClick={()=>{
        // if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        //   return (
        //     <ErrorWindow message={`Пожалуйста, зайдите в учетную запись`}/>
        //   );
        // }
        addToFavorite(currentMovie.id, 1);
        _onFavoriteButtonClick();
      }}>
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </button>
    );
  } else {
    return (
      <button className="btn btn--list movie-card__button" type="button" onClick={()=>{
        // if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        //   return (
        //     <ErrorWindow message={`Пожалуйста, зайдите в учетную запись`}/>
        //   );
        // }
        addToFavorite(currentMovie.id, 0);
        _onFavoriteButtonClick();
      }}>
        <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list" />
        </svg>
        <span>My list</span>
      </button>
    );
  }
};

FavoriteButton.propTypes = {
  children: PropTypes.element
};

export default withFavoriteMovie(FavoriteButton);
