import { createSlice } from '@reduxjs/toolkit/dist/createSlice';
import { NameSpace } from '../../const';
import { TDataProcess } from '../../components/types/state';
import { TFilmPromo, TFilmsFilmId } from '../../components/types/films';


const initialState: TDataProcess = {
  isFilmDataLoadingStatus: false,
  filmListData: [],
  filmListByGenreData: [],
  similarFilms: [],
  filmPromo: {} as TFilmPromo,
  filmsFilmId: {} as TFilmsFilmId,
  comments: [],
};

export const dataProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase()
  } 
});