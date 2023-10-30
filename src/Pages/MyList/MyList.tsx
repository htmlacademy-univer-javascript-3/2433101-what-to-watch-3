import { FilmList } from '../../components/film-list';
import { LogoTop, LogoBottom } from '../../components/logo';
import { MyFilmListData } from '../../mocks/film-list';

type TMyList = {
  myFilmListData: {[key: string]: string}[];
  chooseActiveFilm: (filmId: string) => void;
}

function MyList({myFilmListData, chooseActiveFilm}: TMyList): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoTop />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{myFilmListData.length}</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmList filmListData={MyFilmListData} chooseActiveFilm={chooseActiveFilm}/>
        </div>
      </section>
      <LogoBottom />
    </div>
  );
}

export default MyList;
