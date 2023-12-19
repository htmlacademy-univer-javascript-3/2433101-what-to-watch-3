import { useEffect } from 'react';
import { FilmList } from '../../components/film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { LogoTop, LogoBottom } from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { NameSpace } from '../../const';
import { fetchMyList } from '../../store/api-actions';


function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMyList());
  }, [dispatch]);

  const myList = useAppSelector((state) => state[NameSpace.Data].myList);
  const myListLength = useAppSelector((state) => state[NameSpace.Data].myListLength);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoTop />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{myListLength}</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmList filmListData={myList}/>
        </div>
      </section>
      <LogoBottom />
    </div>
  );
}

export default MyList;
