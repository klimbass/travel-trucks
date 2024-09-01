import { useEffect, useState } from 'react';
import Location from '../Location/Location.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import css from './AsidePanel.module.css';

export default function AsidePanel({ items }) {
  const [itemsDef, setItemsDef] = useState([]);

  useEffect(() => {
    if (items.length > 0 && itemsDef.length === 0) {
      setItemsDef(items);
    }
  }, [items]);
  return (
    <div className={css.asidePanel}>
      <Location items={itemsDef} />
      <p className={css.filtersTitle}>Filters</p>
      <VehicleEquipment items={itemsDef} />
      <VehicleType />
    </div>
  );
}
