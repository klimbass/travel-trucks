import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function Home() {
  return (
    <div className={css.boxHomePage}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.disc}>
          You can find everything you want in our catalog
        </h2>
        <Link to="/catalog" className={css.toCatalogButton}>
          View Now
        </Link>
      </div>
    </div>
  );
}
