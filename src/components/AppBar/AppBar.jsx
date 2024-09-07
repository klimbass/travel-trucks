import { Link, useLocation } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import logo from '../../img/Logo.svg';

export default function AppBar() {
  const location = useLocation();

  return (
    <>
      <nav className={css.boxBar}>
        <div className={css.logo}>
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Link
          className={clsx(css.link, location.pathname === '/' && css.active)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={clsx(
            css.link,
            location.pathname === '/catalog' && css.active
          )}
          to="/catalog"
        >
          Catalog
        </Link>
      </nav>
    </>
  );
}
