import { NavLink } from 'react-router-dom';
import css from './ModalMobile.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function ModalMobile({ handleChangeModal, isModalOpen }) {
  const classListWrap = clsx(css.modalWrap, { [css.modalOpen]: isModalOpen });
  const classList = clsx(css.modal, { [css.modalOpen]: isModalOpen });
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      console.log(document.body.style.overflow);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      console.log(document.body.style.overflow);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      console.log(document.body.style.overflow);
    };
  }, [isModalOpen]);

  return (
    <div className={classListWrap}>
      <div className={classList}>
        <h4>Menu</h4>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
          onClick={handleChangeModal}
        >
          <h3>Home</h3>
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
          onClick={handleChangeModal}
        >
          <h3>Catalog</h3>
        </NavLink>
        <button type="button" onClick={handleChangeModal} className={css.close}>
          <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
