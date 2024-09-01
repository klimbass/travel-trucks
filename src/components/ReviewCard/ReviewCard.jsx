import { nanoid } from '@reduxjs/toolkit';
import Icons from '../../img/Icons/Icons.jsx';
import css from './ReviewCard.module.css';
import clsx from 'clsx';

export default function ReviewCard({ item }) {
  const firstLetter = item.reviewer_name.slice(0, 1);
  const rating = item.reviewer_rating;
  const countStar = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={css.nameBox}>
        <h2 className={css.firstLetter}>{firstLetter}</h2>
        <div className={css.name}>
          {item.reviewer_name}
          <ul className={css.starList}>
            {countStar.map(i => {
              return (
                <li key={nanoid()}>
                  <Icons
                    iconName={'icon-star'}
                    className={clsx(
                      i <= rating ? `${css.starGold}` : `${css.starGrey}`
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className={css.comment}>{item.comment}</p>
    </>
  );
}
