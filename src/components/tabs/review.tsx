type TReview = {
  description: string;
  author: string;
  date: string;
  rating: number;
};

export function Review({description, author, date, rating}: TReview): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{description}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}
