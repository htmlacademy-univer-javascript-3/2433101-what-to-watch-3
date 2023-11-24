import { useAppSelector } from "../hooks";
import { Review } from "./review";

export function MoviePageReviews(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

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
