import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getTruckDetails, getTrucks } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';
import css from './ItemDetailsPage.module.css';
import TruckDetails from '../../components/TruckDetails/TruckDetails.jsx';
import Features from '../../components/Features/Features.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import { CircularProgress } from '@mui/material';

export default function ItemDetails() {
  const { items, isLoading, error } = useSelector(getTrucks);
  const { id } = useParams();

  const item = items?.find(item => item.id === id);

  return (
    <div className={css.boxPage}>
      {isLoading && !error && <CircularProgress color="primary" />}
      {error && <p>{error}</p>}
      {!isLoading && !error && !item && <p>Item not found</p>}
      {!isLoading && !error && item && (
        <>
          <TruckDetails item={item} />
          <div className={css.tabBox}>
            <NavLink
              to="features"
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.activeLink}` : css.link
              }
            >
              <h3 className={css.text}>Features</h3>
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.activeLink}` : css.link
              }
            >
              <h3 className={css.text}>Reviews</h3>
            </NavLink>
          </div>
          <div className={css.footer}>
            <Outlet />
            <BookingForm />
          </div>
        </>
      )}
    </div>
  );
}
