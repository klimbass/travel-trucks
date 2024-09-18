import { useState } from 'react';
import css from './RadioButton.module.css';
import clsx from 'clsx';
import Icons from '../../img/Icons/Icons.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectorGetFormFilter } from '../../redux/selectors.js';
import { setNameFilter } from '../../redux/filtersSlice.js';

export default function RadioButton({ name, label }) {
  const setFilter = useSelector(selectorGetFormFilter);

  const classList = clsx(css.btn, { [css.active]: name === setFilter });
  const classListIcon = clsx(css.icon, { [css.active]: name === setFilter });
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setNameFilter({ form: name }));
  };

  return (
    <button className={classList} onClick={handleButtonClick}>
      <Icons iconName={`icon-${name}`} className={classListIcon} />
      {label}
    </button>
  );
}
