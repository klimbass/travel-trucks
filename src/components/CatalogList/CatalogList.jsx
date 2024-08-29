import TruckCard from '../TruckCard/TruckCard.jsx';
import css from './CatalogList.module.css';

export default function CatalogList({ items }) {
  return (
    <ul className={css.list}>
      {items.length > 0 &&
        items.map(item => {
          console.log(item);

          return (
            <li key={item.id}>
              <TruckCard item={item} />
            </li>
          );
        })}
    </ul>
  );
}
