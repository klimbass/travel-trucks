import { useEffect, useState } from 'react';
import css from './ToggleButton.module.css';
import clsx from 'clsx';
import Icons from '../../img/Icons/Icons.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../redux/filtersSlice.js';

export default function ToggleButton({ name }) {
  const isActive = useSelector(state => state.filters.status[name]);
  const dispatch = useDispatch();

  const classList = clsx(css.btn, { [css.active]: isActive });
  const classListIcon = clsx(css.icon, { [css.active]: isActive });
  const handleToggle = () => {
    dispatch(toggleFilter(name));
  };

  return (
    <button className={classList} onClick={handleToggle}>
      <Icons
        iconName={`icon-${name}`}
        className={classListIcon}
        width={32}
        height={32}
      />
      {name}
    </button>
  );
}
