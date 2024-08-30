import Icons from '../../img/Icons/Icons.jsx';
import css from './TruckDetails.module.css';

export default function TruckDetails({ item }) {
  const [country, city] = item?.location?.split(', ') || [];
  const location = city && country ? `${city}, ${country}` : '';
  return (
    <div className={css.wrapDetails}>
      <div>
        <h2 className={css.title}>{item.name}</h2>
        <div className={css.boxRatMap}>
          <div className={css.rating}>
            <Icons iconName="icon-star" />
            <p>{`${item.rating}/(${item.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.rating}>
            <Icons iconName="icon-map" />
            <p>{location}</p>
          </div>
        </div>
        <h2>€8000,00</h2>
      </div>
      <ul className={css.imgList}>
        {item.gallery.map(gal => (
          <li key={gal.thumb}>
            <img
              className={css.imgThumb}
              src={gal.thumb}
              alt={item.name}
              width={350}
            />
          </li>
        ))}
      </ul>
      <div className={css.description}>{item.description}</div>
    </div>
  );
}
