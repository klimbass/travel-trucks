import { useEffect, useState } from 'react';
import Location from '../Location/Location.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import css from './AsidePanel.module.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { delAllFilters } from '../../redux/filtersSlice.js';

export default function AsidePanel({ items }) {
  const [itemsDef, setItemsDef] = useState([]);

  useEffect(() => {
    if (items.length > 0 && itemsDef.length === 0) {
      setItemsDef(items);
    }
  }, [items]);

  const dispatch = useDispatch();
  const handleClearFilters = () => {
    dispatch(delAllFilters());
  };

  return (
    <div className={css.asidePanel}>
      <Location items={itemsDef} />
      <p className={css.filtersTitle}>Filters</p>
      <VehicleEquipment items={itemsDef} />
      <VehicleType />
      <Button
        type="button"
        variant="shane"
        sx={{ width: '180px', margin: '0 auto' }}
        onClick={handleClearFilters}
      >
        Reset
      </Button>
    </div>
  );
}
