import ToggleButton from '../ToggleButton/ToggleButton.jsx';
import css from './VehicleEquipment.module.css';

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

  return (
    <div className={css.vehEqBox}>
      <h3>Vehicle Equipment</h3>
      <ul className={css.envList}>
        {featureList.map((item, key) => {
          return (
            <li key={`${item}`}>
              <ToggleButton name={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
