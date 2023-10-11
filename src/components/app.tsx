import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/main-page";
import { AppRoute, AuthorizationStatus } from "../const";
import SignIn from "../Pages/SignIn/SignIn";
import NotFoundScreen from "../Pages/NotFoundScreen/NotFoundScreen";
import MyList from "../Pages/MyList/MyList";
import Film from "../Pages/Film/Film";
import AddReview from "../Pages/AddReview/AddReview";
import Player from "../Pages/Player/Player";
import PrivateRoute from "./private-route";


type AppProps = {
    filmGenrePromo: string;
    filmNamePromo: string;
    filmDatePromo: string;
}

function App({filmGenrePromo, filmNamePromo, filmDatePromo}: AppProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path={AppRoute.Main}
                    element={<MainPage filmGenrePromo={filmGenrePromo} filmNamePromo={filmNamePromo} filmDatePromo={filmDatePromo} />}
                />
                <Route 
                    path={AppRoute.SignIn}
                    element={<SignIn />}
                />
                <Route 
                    path={AppRoute.MyList}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                            <MyList />
                        </PrivateRoute>
                    }
                />
                <Route path="/films">
                    <Route path="/films/:id" element={<Film/>}>
                        <Route path="/films/:id/review" element={<AddReview/>}></Route> 
                    </Route>
                </Route>
                <Route 
                    path={AppRoute.Player}
                    element={<Player />}
                />
                <Route
                    path={AppRoute.NotFoundScreen}
                    element={<NotFoundScreen />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;