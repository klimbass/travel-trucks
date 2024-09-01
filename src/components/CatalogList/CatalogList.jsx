import TruckCard from '../TruckCard/TruckCard.jsx';
import css from './CatalogList.module.css';
import { Button } from '@mui/material';

export default function CatalogList({ pItems, loadMore, handleClick }) {
  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        {pItems.length > 0 &&
          pItems.map(item => {
            // console.log(item);

            return (
              <li key={item.id}>
                <TruckCard item={item} />
              </li>
            );
          })}
      </ul>
      {loadMore && (
        <Button
          variant="secondary"
          sx={{ margin: '0 auto' }}
          onClick={handleClick}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
