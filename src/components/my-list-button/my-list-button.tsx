import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { postMyListFilmStatus } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';


type TMyListButton = {
  id: string;
}

export default function MyListButton({id}: TMyListButton): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myListFilms = useAppSelector((state) => state[NameSpace.Data].myList);
  const isFavorite = myListFilms.some((film) => film.id === id);
  const myListLength = useAppSelector((state) => state[NameSpace.Data].myListLength);
  const authState = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  const handleMyFilmStatus = () => {
    dispatch(postMyListFilmStatus({id: id, status: Number(!isFavorite)}));
    if (authState === AuthorizationStatus.NoAuth || authState === AuthorizationStatus.Unknown) {
      navigate(AppRoute.SignIn);
    }
  };


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
