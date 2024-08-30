import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getTruckDetails, getTrucks } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';
import css from './ItemDetailsPage.module.css';
import TruckDetails from '../../components/TruckDetails/TruckDetails.jsx';
import Features from '../../components/Features/Features.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';

export default function ItemDetails() {
  const { items, isLoading, error } = useSelector(getTrucks);
  const { id } = useParams();

  const item = items?.find(item => item.id === id);

  return (
    <div className={css.boxPage}>
      {isLoading && <b>Loading trucks...</b>}
      {error && <p>{error}</p>}
      {!isLoading && !error && !item && <p>Item not found</p>}
      {!isLoading && !error && item && (
        <>
          <TruckDetails item={item} />
          <Link to="features">Features</Link>
          <Link to="reviews">Reviews</Link>
          <div className={css.footer}>
            <div>
              <Outlet />
            </div>
            <div>
              <BookingForm />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
