import React from 'react';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';

export default function CalendarInput() {
  const DateRangePicker = ({ field, form }) => {
    const { setFieldValue, errors, touched, setTouched } = form;
    const { name, value } = field;

    return (
      <DatePicker
        selectsRange
        startDate={value[0]}
        endDate={value[1]}
        onChange={dates => setFieldValue(name, dates)}
        onBlur={() => setTouched({ bookingDate: true })}
        isClearable={true}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date*"
        className={
          touched.bookingDate && errors.bookingDate
            ? `${css.formField} ${css.errorField}`
            : css.formField
        }
      />
    );
  };
  return (
    <div className={css.dateContainer}>
      <Field name="bookingDate" component={DateRangePicker} />
    </div>
  );
}
