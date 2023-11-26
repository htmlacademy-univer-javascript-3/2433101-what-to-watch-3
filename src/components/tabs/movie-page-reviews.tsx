import { TComments } from "../types/films";
import { Review } from "./review";

type TMoviePageReviews = {
  comments: TComments[];
}

export function MoviePageReviews({comments}: TMoviePageReviews): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment, index) => index < comments.length / 2 && <Review key={comment.id} description={comment.comment} author={comment.user} date={comment.date} rating={comment.rating}/>)}
      </div>
      <div className="film-card__reviews-col">
        {comments.map((comment, index) => index >= comments.length / 2 && <Review key={comment.id} description={comment.comment} author={comment.user} date={comment.date} rating={comment.rating}/>)}
      </div>
    </div>
  );
}
