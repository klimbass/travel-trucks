import { Link, useLocation } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import logo from '../../img/Logo.svg';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ModalMobile from '../ModalMobile/ModalMobile.jsx';

export default function AppBar() {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:576px)');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChangeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className={css.boxBar}>
        {/* {isModalOpen && (
          <ModalMobile
            handleChangeModal={handleChangeModal}
            isModalOpen={isModalOpen}
          />
        )} */}

        <div className={css.logo}>
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              type="button"
              onClick={handleChangeModal}
              className={clsx(css.burger, { [css.burgerActive]: isModalOpen })}
            >
              <MenuOutlinedIcon />
            </button>
            <ModalMobile
              handleChangeModal={handleChangeModal}
              isModalOpen={isModalOpen}
            />
          </>
        ) : (
          <>
            <Link
              className={clsx(
                css.link,
                location.pathname === '/' && css.active
              )}
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
          </>
        )}
      </nav>
    </>
  );
}
