import MainPage from "../Pages/MainPage/main-page";


type AppProps = {
    filmGenrePromo: string;
    filmNamePromo: string;
    filmDatePromo: string;
}

function App({filmGenrePromo, filmNamePromo, filmDatePromo}: AppProps): JSX.Element {
    return (
        <>
            <MainPage 
                filmGenrePromo = {filmGenrePromo} 
                filmNamePromo = {filmNamePromo} 
                filmDatePromo = {filmDatePromo}
            />
        </>
    );
}

export default App;