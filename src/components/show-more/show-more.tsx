type TShowMore = {
  handleShowMoreClick: () => void;
}

function ShowMore({handleShowMoreClick}: TShowMore): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" data-testid={'show more'} onClick={handleShowMoreClick}>
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
