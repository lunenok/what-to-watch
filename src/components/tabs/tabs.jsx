import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TabNames = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: TabNames.OVERVIEW
    };
  }

  getActiveClass(tabName) {
    return this.state.selectedTab === tabName ? `movie-nav__item--active` : ``;
  }

  // Переписать и использовать
  // getDuration(duration) {
  //   const hours = Math.floor(duration / 60);
  //   const minutes = duration % 60;
  //   const time = {hours: hours, minutes: minutes};
  //   return time;
  // }

  render() {
    const {genre, rating, reviews, director, starring, description, textReviews, duration, year} = this.props.currentMovie;
    const formatedRating = rating.toString().replace(`.`, `,`);
    const {selectedTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.getActiveClass(TabNames.OVERVIEW)}`}>
              <a
                // href="#"
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabNames.OVERVIEW})}
              >
                Overview
              </a>
            </li>
            <li className={`movie-nav__item ${this.getActiveClass(TabNames.DETAILS)}`}>
              <a
                // href="#"
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabNames.DETAILS})}
              >
                Details
              </a>
            </li>
            <li className={`movie-nav__item ${this.getActiveClass(TabNames.REVIEWS)}`}>
              <a
                // href="#"
                className="movie-nav__link"
                onClick={() => this.setState({selectedTab: TabNames.REVIEWS})}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        {selectedTab === TabNames.OVERVIEW && (
          <React.Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{formatedRating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">{reviews} ratings</span>
              </p>
            </div>
            <div className="movie-card__text">
              <p>{description}</p>
              {/* <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}
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

        {selectedTab === TabNames.DETAILS && (
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
                  <span className="movie-card__details-value">{duration}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">{genre}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">{year}</span>
                </p>
              </div>
            </div>;
          </React.Fragment>
        )}

        {selectedTab === TabNames.REVIEWS && (
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
                      <div className="review__rating">{reviewRating}</div>
                    </div>
                  );
                })}
              </div>
              <div className="movie-card__reviews-col">
                {/* Здесь будето вторая колонка с отзывами */}
              </div>
            </div>;
          </React.Fragment>
        )}

      </div>
    );
  }

}

Tabs.propTypes = {
  currentMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    textReviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      reviewRating: PropTypes.number.isRequired
    })),
    duration: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default Tabs;
