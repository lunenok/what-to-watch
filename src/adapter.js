export const adaptMovieList = (movieList) => {
  return (
    movieList.map((movie) => {
      return {
        name: movie.name,
        posterImage: movie.poster_image,
        previewImage: movie.preview_image,
        backgroundImage: movie.background_image,
        backgroundColor: movie.background_color,
        description: movie.description,
        rating: movie.rating,
        scoresCount: movie.scores_count,
        director: movie.director,
        starring: movie.starring,
        runTime: movie.run_time,
        genre: movie.genre,
        released: movie.released,
        id: movie.id,
        isFavorite: movie.is_favorite,
        videoLink: movie.video_link,
        previewVideoLink: movie.preview_video_link
      };
    })
  );
};

export const adaptPromoMovie = (movie) => {
  return {
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    genre: movie.genre,
    released: movie.released,
    id: movie.id,
    isFavorite: movie.is_favorite,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link
  };
};

export const adaptReview = (reviews) => {
  return (
    reviews.map((review) => {
      return {
        reviewId: review.id,
        reviewRating: review.rating,
        reviewComment: review.comment,
        reviewDate: review.date,
        reviewUserId: review.user.id,
        reviewUserName: review.user.name
      };
    })
  );
};
