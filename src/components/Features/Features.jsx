import { useSelector } from 'react-redux';
import css from './Features.module.css';
import { useParams } from 'react-router-dom';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import { getTrucks } from '../../redux/selectors.js';
import { CircularProgress } from '@mui/material';

export default function Features() {
  const { items, isLoading, error } = useSelector(getTrucks);
  const { id } = useParams();

  const item = items?.find(item => item.id === id);

  const features = item
    ? Object.keys(item).filter(key => item[key] === true)
    : [];

  return (
    <div className={css.featuresBox}>
      {isLoading && !error && <CircularProgress color="primary" />}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <>
          <FeaturesList features={features} item={item} />
          <div className={css.vehicleDetails}>
            <h3>Vehicle details</h3>
            <table>
              <tbody>
                <tr>
                  <th>Form</th>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <th>Length</th>
                  <td>{item.length}</td>
                </tr>
                <tr>
                  <th>Width</th>
                  <td>{item.width}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{item.height}</td>
                </tr>
                <tr>
                  <th>Tank</th>
                  <td>{item.tank}</td>
                </tr>
                <tr>
                  <th>Consumption</th>
                  <td>{item.consumption}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
