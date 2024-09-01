import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { setStatusFilter } from '../../redux/filtersSlice.js';
import Icons from '../../img/Icons/Icons.jsx';
import { components } from 'react-select';

const customStyles = {
  control: provided => ({
    ...provided,
    padding: '18px 20px',
    borderRadius: '12px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    alignItems: 'center',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    marginLeft: '8px',
    color: '#101828',
  }),
};
// const CustomSingleValue = ({ data, ...props }) => (
//   <components.SingleValue {...props}>
//     <MyIcon style={{ marginRight: '8px' }} /> {<Icons iconName={'icon-map'} />}
//     {data.label}
//   </components.SingleValue>
// );

export default function Location({ items }) {
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
    dispatch(setStatusFilter({ location: city.trim() }));
  };

  return (
    <Select
      placeholder="City"
      options={locationList}
      onChange={handleOnChange}
      styles={customStyles}
      // components={{ SingleValue: CustomSingleValue }}
    />
  );
}
