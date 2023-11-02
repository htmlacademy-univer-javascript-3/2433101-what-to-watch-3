import { TFilmsReviews } from '../../mocks/films';
import { Review } from './review';


type TMoviePageReviews = {
  filmsReviews: {[key: string]: TFilmsReviews[]};
  activeFilm: string;
}

export function MoviePageReviews({filmsReviews, activeFilm}: TMoviePageReviews): JSX.Element {
  const reviews = filmsReviews[activeFilm];

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} description={review.description} author={review.author} date={review.date} rating={review.rating}/>)}
      </div>
    </div>
  );
}
