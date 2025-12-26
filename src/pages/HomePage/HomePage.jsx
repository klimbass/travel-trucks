import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('no-scroll');

    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);
  return (
    <div className={css.boxHomePage}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.disc}>
          You can find everything you want in our catalog
        </h2>

        <Link to="/catalog">
          <Button variant="shane" sx={{ padding: '16px 44px' }}>
            View Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
