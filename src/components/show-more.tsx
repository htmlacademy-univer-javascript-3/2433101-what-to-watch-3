type TShowMore = {
  handleShowMoreClick: () => void;
}

export function ShowMore({handleShowMoreClick}: TShowMore): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreClick}>
        Show more
      </button>
    </div>
  );
}
