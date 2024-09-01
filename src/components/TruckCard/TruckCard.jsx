import { Link } from 'react-router-dom';
import css from './TruckCard.module.css';
import Icons from '../../img/Icons/Icons.jsx';
import { useState } from 'react';
import clsx from 'clsx';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import { Button } from '@mui/material';

export default function TruckCard({ item }) {
  const [isFavour, setIsFavour] = useState(false);

  const setFavourHandle = ev => {
    setIsFavour(isFavour => !isFavour);
  };

  const className = clsx({ [css.iconFav]: isFavour });

  const features = Object.keys(item).filter(key => item[key] === true);
  const [country, city] = item.location.split(', ');
  const location = `${city}, ${country}`;

  const formattedNumber = item => {
    return new Intl.NumberFormat('uk-UA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(item.price);
  };

  return (
    <div className={css.card}>
      <img
        className={css.truckImg}
        src={item.gallery[0].thumb}
        alt={`Travel truck ${item.name}`}
        width={292}
        height={320}
      />
      <div className={css.desc}>
        <div>
          <h2 className={css.title}>{item.name}</h2>
          <div className={css.boxRatMap}>
            <div className={css.rating}>
              <Icons iconName="icon-star" className={css.colorStar} />
              <p>{`${item.rating}/(${item.reviews.length} Reviews)`}</p>
            </div>
            <div className={css.rating}>
              <Icons iconName="icon-map" />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className={css.topic}>
          <h2>€{formattedNumber(item)}</h2>
          <button className={css.heart} type="button" onClick={setFavourHandle}>
            <Icons
              iconName="icon-heart"
              width="24"
              height="21"
              className={className}
            />
          </button>
        </div>
        <div className={css.description}>{item.description}</div>
        <FeaturesList features={features} item={item} />
        <Link to={`/catalog/${item.id}/features`}>
          <Button variant="prima">Show more</Button>
        </Link>
      </div>
    </div>
  );
}
