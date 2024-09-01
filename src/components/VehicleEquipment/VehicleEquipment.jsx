import { useDispatch } from 'react-redux';
import ToggleButton from '../ToggleButton/ToggleButton.jsx';
import css from './VehicleEquipment.module.css';
import { delStatusFilter, setStatusFilter } from '../../redux/filtersSlice.js';
import { useEffect, useState } from 'react';

export default function VehicleEquipment({ items, addFilter }) {
  const featureList = items.reduce((acc, item) => {
    const allFeatures = Object.keys(item).filter(key => item[key] === true);
    allFeatures.forEach(feature => {
      if (!acc.includes(feature)) {
        acc.push(feature);
      }
    });

    return acc;
  }, []);

  const [nameActiveBtn, setNameActiveBtn] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const key = Object.keys(nameActiveBtn)[0];
    if (key) {
      nameActiveBtn[key]
        ? dispatch(setStatusFilter({ [key]: nameActiveBtn[key] }))
        : dispatch(delStatusFilter({ [key]: nameActiveBtn[key] }));
    }
  }, [nameActiveBtn]);

  return (
    <div className={css.vehEqBox}>
      <h3>Vehicle Equipment</h3>
      <ul className={css.envList}>
        {featureList.map((item, key) => {
          return (
            <li key={`${item}`}>
              <ToggleButton name={item} setNameActiveBtn={setNameActiveBtn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
