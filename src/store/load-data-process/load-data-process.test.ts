import { TFilmPromo, TFilmsFilmId } from '../../components/types/films';
import { makeFakeComments, makeFakeFavoriteFilm, makeFakeFilmListByGenreData, makeFakeFilmPromo, makeFakeFilmsFilmId, makeFakeMyListFilmStatus, makeFakeSimilarFilms } from '../../utils/mocks';
import { fetchCommentsAction, fetchFilmPromoAction, fetchFilmsAction, fetchFilmsFilmIdAction, fetchMyList, fetchSimilarFilmsAction, postMyListFilmStatus } from '../api-actions';
import { changeGenreAction, loadDataProcess } from './load-data-process';


describe('LoadDataProcess Slice', () => {
  const defaultState = {
    genre: 'All genres',
    filmListByGenreData: [],
    filmPromo: {} as TFilmPromo,
    similarFilms: [],
    filmsFilmId: {} as TFilmsFilmId,
    myList: [],
    myListLength: 0,
    comments: [],
    isFilmDataLoadingStatus: false,
  };

  it('Return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = loadDataProcess.reducer(defaultState, emptyAction);
    expect(result).toEqual(defaultState);
  });

  it('Return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = loadDataProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(defaultState);
  });

  it('set "isFilmDataLoadingStatus" to "true" with "fetchFilmsAction.pending" action', () => {
    const expectState = {
      ...defaultState,
      isFilmDataLoadingStatus: true,
    };
    const result = loadDataProcess.reducer(undefined, fetchFilmsAction.pending);
    expect(result).toEqual(expectState);
  });

  it('set "isFilmDataLoadingStatus" to "false", "filmListByGenreData" to NoEmpty with "fetchFilmsAction.fulfilled" action', () => {
    const filmListByGenreData = makeFakeFilmListByGenreData();
    const initialState = {...defaultState, isFilmDataLoadingStatus: true};
    const expectedState = {
      ...defaultState,
      filmListByGenreData: [filmListByGenreData],
      isFilmDataLoadingStatus: false,
    };
    const result = loadDataProcess.reducer(initialState, fetchFilmsAction.fulfilled([filmListByGenreData], '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('set "isFilmDataLoadingStatus" to "true" with "fetchFilmPromoAction.pending" action', () => {
    const expectState = {
      ...defaultState,
      isFilmDataLoadingStatus: true,
    };
    const result = loadDataProcess.reducer(undefined, fetchFilmPromoAction.pending);
    expect(result).toEqual(expectState);
  });

  it('set "isFilmDataLoadingStatus" to "false", "filmListByGenreData" to NoEmpty with "fetchFilmPromoAction.fulfilled" action', () => {
    const filmPromo = makeFakeFilmPromo();
    const initialState = {...defaultState, isFilmDataLoadingStatus: true};
    const expectedState = {
      ...defaultState,
      filmPromo: filmPromo,
      isFilmDataLoadingStatus: false,
    };
    const result = loadDataProcess.reducer(initialState, fetchFilmPromoAction.fulfilled(filmPromo, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('set "similarFilms" to NoEmpty with "fetchSimilarFilmsAction.fulfilled" action', () => {
    const similarFilms = makeFakeSimilarFilms();
    const expectedState = {
      ...defaultState,
      similarFilms: [similarFilms],
    };
    const result = loadDataProcess.reducer(defaultState, fetchSimilarFilmsAction.fulfilled([similarFilms], '', ''));
    expect(result).toEqual(expectedState);
  });

  it('set "filmsFilmId" to NoEmpty with "fetchFilmsFilmIdAction.fulfilled" action', () => {
    const filmsFilmId = makeFakeFilmsFilmId();
    const expectedState = {
      ...defaultState,
      filmsFilmId: filmsFilmId,
    };
    const result = loadDataProcess.reducer(defaultState, fetchFilmsFilmIdAction.fulfilled(filmsFilmId, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('set "comments" to NoEmpty with "fetchCommentsAction.fulfilled" action', () => {
    const comments = makeFakeComments();
    const expectedState = {
      ...defaultState,
      comments: [comments],
    };
    const result = loadDataProcess.reducer(defaultState, fetchCommentsAction.fulfilled([comments], '', ''));
    expect(result).toEqual(expectedState);
  });

  it('set "myList" to NoEmpty, myListLength to NoEmpty with "fetchMyList.fulfilled" action', () => {
    const myList = makeFakeFilmListByGenreData();
    const expectedState = {
      ...defaultState,
      myList: [myList],
      myListLength: 1,
    };
    const result = loadDataProcess.reducer(defaultState, fetchMyList.fulfilled([myList], '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('set "MyList" to NoEmpty, myListLength to NoEmpty with "postMyListFilmStatus.fulfilled" action', () => {
    const favoriteFilm = makeFakeFavoriteFilm();
    const isFavoriteFilm = { ...favoriteFilm, isFavorite: true };
    const expectedState = {
      ...defaultState,
      myList: [isFavoriteFilm],
      myListLength: 1,
    };
    const myListFilmStatus = makeFakeMyListFilmStatus();
    const result = loadDataProcess.reducer(
      defaultState,
      postMyListFilmStatus.fulfilled(isFavoriteFilm, '', myListFilmStatus),
    );
    expect(result).toEqual(expectedState);
  });

  it('remove of "MyList" noFavorite film, change myListLength with "postMyListFilmStatus.fulfilled" action', () => {
    const favoriteFilm = makeFakeFavoriteFilm();
    const isNofavoriteMovie = { ...favoriteFilm, isFavorite: false };
    const initialState = {
      ...defaultState,
      myList: [isNofavoriteMovie],
      myListLength: 1,
    };
    const myListFilmStatusActive = makeFakeMyListFilmStatus();
    const myListFilmStatusNoActive = {...myListFilmStatusActive, status: 0};

    const result = loadDataProcess.reducer(
      initialState,
      postMyListFilmStatus.fulfilled(isNofavoriteMovie, '', myListFilmStatusNoActive)
    );

    expect(result).toEqual(defaultState);
  });

  describe('Genre genre process', () => {
    it('changes genre with "changeGenreAction" action', () => {
      const expectedGenre = {...defaultState, genre: 'Drama'};
      const result = loadDataProcess.reducer(
        defaultState,
        changeGenreAction('Drama')
      );
      expect(result).toEqual(expectedGenre);
    });
  });
});
