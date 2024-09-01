import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className={css.boxHomePage}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.disc}>
          You can find everything you want in our catalog
        </h2>

        <Link to="/catalog">
          <Button variant="prima" sx={{ padding: '16px 44px' }}>
            View Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
