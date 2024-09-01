import { useState } from 'react';
import css from '../ToggleButton/ToggleButton.module.css';
import clsx from 'clsx';
import Icons from '../../img/Icons/Icons.jsx';

export default function RadioButton({
  name,
  setNameActiveBtn,
  isActive,
  onClick,
}) {
  //   const [isActive, setIsActive] = useState(false);
  const classList = clsx(css.btn, { [css.active]: isActive });

  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //     setNameActiveBtn({ [name]: !isActive });
  //   };

  return (
    <button className={classList} onClick={onClick}>
      <Icons iconName={`icon-${name}`} width={32} height={32} />
      {name}
    </button>
  );
}
