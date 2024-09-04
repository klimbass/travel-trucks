import RadioButton from '../RadioButton/RadioButton.jsx';
import css from './VehicleType.module.css';

export default function VehicleType() {
  return (
    <div className={css.vehicleTypeBox}>
      <h3 className={css.title}>VehicleType</h3>

      <div className={css.checkBox}>
        <RadioButton name={'panelTruck'} label={'Van'} />
        <RadioButton name={'fullyintegrated'} label={'Fully Integrated'} />
        <RadioButton name={'alcove'} label={'Alcove'} />
      </div>
    </div>
  );
}
