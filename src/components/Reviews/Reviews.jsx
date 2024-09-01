import { useSelector } from 'react-redux';
import { getTrucks } from '../../redux/selectors.js';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import ReviewCard from '../ReviewCard/ReviewCard.jsx';
import css from './Reviews.module.css';

export default function Reviews() {
  const { items, isLoading, error } = useSelector(getTrucks);
  const { id } = useParams();
  const item = items?.find(item => item.id === id);
  const reviews = item.reviews;

  return (
    <div>
      {isLoading && !error && <CircularProgress color="primary" />}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <ul className={css.reviewList}>
          {reviews.map(item => {
            return (
              <li key={nanoid()}>
                <ReviewCard item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
