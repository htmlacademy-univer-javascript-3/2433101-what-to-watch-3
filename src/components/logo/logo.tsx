import { Link } from 'react-router-dom';


export function LogoBottom() {
  return (
    <footer className="page-footer">
      <div className="logo" data-testid="logo-top">
        <Link to="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export function LogoTop() {
  return (
    <div className="logo" data-testid="logo-bottom">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
