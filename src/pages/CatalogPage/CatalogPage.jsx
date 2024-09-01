import { useSelector } from 'react-redux';
import { getTrucks } from '../../redux/selectors.js';
import { useEffect, useState } from 'react';
import css from './CatalogPage.module.css';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import AsidePanel from '../../components/AsidePanel/AsidePanel.jsx';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

export default function Catalog() {
  const { items, isLoading, error } = useSelector(getTrucks);

  const [perPage, setPerPage] = useState(4);
  const paginationItems = items.slice(0, perPage);
  const loadMore = paginationItems.length < items.length;
  const handleClick = () => {
    setPerPage(perPage => perPage + perPage);
  };
  useEffect(() => {
    if (error) {
      toast.error('We have not this set');
    }
  }, [error]);

  return (
    <div className={css.wrap}>
      {isLoading && !error && <CircularProgress color="primary" />}
      <AsidePanel items={items} />
      <CatalogList
        pItems={paginationItems}
        loadMore={loadMore}
        handleClick={handleClick}
      />
    </div>
  );
}
