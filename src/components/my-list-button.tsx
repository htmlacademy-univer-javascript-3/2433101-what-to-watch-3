import { NameSpace } from '../const';
import { postMyListFilmStatus } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from './hooks';


type TMyListButton = {
  id: string;
  isFavorite: boolean;
}

export default function MyListButton({id, isFavorite}: TMyListButton): JSX.Element {
  const dispatch = useAppDispatch();

  const handleMyFilmStatus = () => {
    dispatch(postMyListFilmStatus({id: id, status: Number(!isFavorite)}));
  };

  const myListLength = useAppSelector((state) => state[NameSpace.Data].myListLength);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyFilmStatus}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myListLength}</span>
    </button>
  );
}
