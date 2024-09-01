import { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton.jsx';
import css from './VehicleType.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice.js';

export default function VehicleType() {
  const [activeIndex, setActiveIndex] = useState(null);
  const dispatch = useDispatch();

  const handleButtonClick = index => {
    setActiveIndex(index);
    dispatch(setStatusFilter({ form: index }));
  };

  return (
    <div className={css.vehicleTypeBox}>
      <h3 className={css.title}>VehicleType</h3>

      {/* <hr /> */}
      <div className={css.checkBox}>
        <RadioButton
          name={'van'}
          isActive={activeIndex === 'panelTruck'}
          onClick={() => handleButtonClick('panelTruck')}
        />
        <RadioButton
          name={'fullyintegrated'}
          isActive={activeIndex === 'fullyIntegrated'}
          onClick={() => handleButtonClick('fullyIntegrated')}
        />
        <RadioButton
          name={'alcove'}
          isActive={activeIndex === 'alcove'}
          onClick={() => handleButtonClick('alcove')}
        />
      </div>
    </div>
  );
}
