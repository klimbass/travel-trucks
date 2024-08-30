import { useDispatch, useSelector } from 'react-redux';
import { getTrucks } from '../../redux/selectors.js';
import { useEffect } from 'react';
import { fetchTrucks } from '../../redux/operations.js';
import css from './CatalogPage.module.css';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import AsidePanel from '../../components/AsidePanel/AsidePanel.jsx';

export default function Catalog() {
  const { items, isLoading, error } = useSelector(getTrucks);

  return (
    <div className={css.wrap}>
      {isLoading && !error && <b>Loading trucks...</b>}
      {error && <p>{error}</p>}
      <AsidePanel />
      <CatalogList items={items} />
    </div>
  );
}
