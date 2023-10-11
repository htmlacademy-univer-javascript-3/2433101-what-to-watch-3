import { Link } from "react-router-dom";


function NotFoundScreen(): JSX.Element {
    return (
        <>
            <h1>Error 404</h1>
            <Link to="/">
                <span>Перейти на главную</span>
            </Link>
        </>
    );
}

export default NotFoundScreen;