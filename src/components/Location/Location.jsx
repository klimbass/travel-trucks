import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setNameFilter } from '../../redux/filtersSlice.js';
import Icons from '../../img/Icons/Icons.jsx';
import { components } from 'react-select';
import style from './Location.module.css';
import { selectorGetLocation } from '../../redux/selectors.js';

const CustomControl = ({ children, selectProps, ...props }) => {
  const { menuIsOpen, value } = selectProps;

  return (
    <components.Control {...props}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Icons
          iconName="icon-map"
          color={
            menuIsOpen || value ? 'var(--main-text-color)' : 'var(--grey-color)'
          }
          width="20px"
          height="20px"
        />
        <div style={{ marginLeft: '0', width: '100%' }}>{children}</div>
      </div>
    </components.Control>
  );
};

const colourStyles = {
  control: provided => ({
    ...provided,
    padding: '16px 20px',
    borderRadius: '20px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'var(--inputs-color  )',
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 576px) and (max-width: 768px)': {
      padding: '4px 20px',
      borderRadius: '12px',
    },
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = 'var(--secondary-text-color)';
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? 'var(--button-color)'
          : isFocused
            ? 'var(--button-hover-color)'
            : undefined,
      color: isDisabled
        ? 'var(--inputs-color-transparent)'
        : isSelected
          ? color
          : 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? 'var(--inputs-color-transparent)'
            : 'var(--secondary-text-color)'
          : undefined,
      },
    };
  },
  input: styles => ({
    ...styles,
  }),
  placeholder: styles => ({ ...styles }),
  singleValue: styles => ({ ...styles }),
};

export default function Location({ items }) {
  const selectedLocation = useSelector(selectorGetLocation);
  const selectedOption = selectedLocation
    ? { value: selectedLocation, label: selectedLocation }
    : null;
  const locationList = items
    .map(item => {
      const [country, city] = item.location.split(', ');
      return { value: `${city}, ${country}`, label: `${city}, ${country}` };
    })
    .filter(
      (location, index, self) =>
        index === self.findIndex(l => l.value === location.value)
    );
  const dispatch = useDispatch();
  const handleOnChange = selectedOption => {
    const [city, country] = selectedOption.value.split(',');
    dispatch(setNameFilter({ location: city.trim() }));
  };

  return (
    <div className={style.container}>
      <Select
        value={selectedOption}
        placeholder="City"
        options={locationList}
        styles={colourStyles}
        components={{
          Control: CustomControl,
        }}
        onChange={handleOnChange}
      />
      <div className=""></div>
    </div>
  );
}
