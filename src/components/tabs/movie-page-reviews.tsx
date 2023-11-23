import { TFilmsReviews } from '../../mocks/films';
import { Review } from './review';


type TMoviePageReviews = {

}

export function MoviePageReviews({}: TMoviePageReviews): JSX.Element {
  // const reviews = filmsReviews[activeFilm];

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {/* {reviews.map((review, index) => index < reviews.length / 2 && <Review key={review.id} description={review.description} author={review.author} date={review.date} rating={review.rating}/>)} */}
      </div>
      <div className="film-card__reviews-col">
        {/* {reviews.map((review, index) => index >= reviews.length / 2 && <Review key={review.id} description={review.description} author={review.author} date={review.date} rating={review.rating}/>)} */}
      </div>
    </div>
  );
}
