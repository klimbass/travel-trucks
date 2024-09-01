import { useState } from 'react';
import css from './ToggleButton.module.css';
import clsx from 'clsx';
import Icons from '../../img/Icons/Icons.jsx';

export default function ToggleButton({ name, setNameActiveBtn }) {
  const [isActive, setIsActive] = useState(false);
  const classList = clsx(css.btn, { [css.active]: isActive });

  const handleClick = () => {
    setIsActive(!isActive);
    setNameActiveBtn({ [name]: !isActive });
  };

  return (
    <button className={classList} onClick={handleClick}>
      <Icons iconName={`icon-${name}`} width={32} height={32} />
      {name}
    </button>
  );
}
