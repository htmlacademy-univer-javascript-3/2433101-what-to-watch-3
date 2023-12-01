import { FilmList } from '../../components/film-list';
import { useAppSelector } from '../../components/hooks';
import { LogoTop, LogoBottom } from '../../components/logo';
import UserBlock from '../../components/user-block';
import { NameSpace } from '../../const';


function MyList(): JSX.Element {
  const filmListByGenreData = useAppSelector((state) => state[NameSpace.Data].filmListByGenreData);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoTop />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">test</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmList filmListData={filmListByGenreData}/>
        </div>
      </section>
      <LogoBottom />
    </div>
  );
}

export default MyList;
