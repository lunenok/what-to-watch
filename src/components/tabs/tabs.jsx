import React from "react";
import PropTypes from "prop-types";
import {getDuration, formatRating, getTextRating} from "../../utils.js";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.jsx";

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const Tabs = (props) => {
  const {currentMovie, currentTab, onTabClick} = props;
  const {genre, rating, director, starring, description, scoresCount, runTime, released, textReviews} = currentMovie;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className={`movie-nav__list`}>
          {Object.values(TabNames).map((tabName) => {
            return (
              <li key={tabName} className={`movie-nav__item ${currentTab === tabName ? `movie-nav__item--active` : ``}`}>
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => onTabClick(evt, tabName)}
                >
                  {tabName}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {currentTab === TabNames.OVERVIEW && (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{formatRating(rating)}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{getTextRating(rating)}</span>
              <span className="movie-rating__count">{scoresCount} ratings</span>
            </p>
          </div>
          <div className="movie-card__text">
            <p>{description}</p>
            <p className="movie-card__director"><strong>Director: {director}</strong></p>
            <p className="movie-card__starring">
              <strong>
                Starring:
                {starring.map((actor) => {
                  return actor;
                })
                .join(`, `)}
              </strong>
            </p>
          </div>
        </React.Fragment>
      )}

      {currentTab === TabNames.DETAILS && (
        <React.Fragment>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">Wes Andreson</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.map((actor) => {
                    return actor;
                  }).
                  join(`, \n`)}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{getDuration(runTime)}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{released}</span>
              </p>
            </div>
          </div>;
        </React.Fragment>
      )}

      {currentTab === TabNames.REVIEWS && (
        <React.Fragment>
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">

              {textReviews.map((review) => {
                const {author, date, text, reviewRating} = review;
                return (
                  <div key={author} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        {text}
                      </p>
                      <footer className="review__details">
                        <cite className="review__author">{author}</cite>
                        <time className="review__date" dateTime={date}>
                          {date}
                        </time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{formatRating(reviewRating)}</div>
                  </div>
                );
              })}
            </div>
            <div className="movie-card__reviews-col">
            </div>
          </div>;
        </React.Fragment>
      )}

    </div>
  );
};

Tabs.propTypes = {
  currentMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    textReviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      reviewRating: PropTypes.number.isRequired
    })).isRequired
  }),
  onTabClick: PropTypes.number.isRequired,
  currentTab: PropTypes.object.isRequired
};

export default withActiveTab(Tabs);
