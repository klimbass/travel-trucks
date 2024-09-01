import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useId } from 'react';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Button } from '@mui/material';
import css from './BookingForm.module.css';
import { toast } from 'react-toastify';

const DateRangePicker = ({ field, form }) => {
  const { setFieldValue } = form;
  const { name, value } = field;

  return (
    <DatePicker
      selectsRange
      startDate={value[0]}
      endDate={value[1]}
      onChange={dates => {
        setFieldValue(name, dates);
      }}
      isClearable={true}
      dateFormat="dd/MM/YYYY"
      placeholderText="Booking date*"
      className={css.formField}
      style={{ width: '100%' }}
    />
  );
};

const formatDate = date => {
  if (date instanceof Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  return '';
};

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  bookingDate: Yup.array()
    .of(Yup.date().nullable())
    .required()
    .min(2, 'Choose two dates for start and finish rent'),
  comment: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

export default function BookingForm() {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: [null, null],
    comment: '',
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    const name = values.name;
    const email = values.email;
    const bookingDateStart = formatDate(values.bookingDate[0]);
    const bookingDateEnd = formatDate(values.bookingDate[1]);
    const bookingDate = `${bookingDateStart} - ${bookingDateEnd}`;
    console.log(`Name: ${name}, Email: ${email}, Date: ${bookingDate}`);

    toast.success(`Name: ${name}, Email: ${email}, Date: ${bookingDate}`);
    actions.resetForm();
  };
  const handleError = er => {
    console.log(er);
  };

  return (
    <div className={css.formBox}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
        error={handleError}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId} />
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name*"
            className={css.formField}
          />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={emailFieldId} />
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
            className={css.formField}
          />
          <ErrorMessage name="email" component="span" />

          <div>
            <label htmlFor="bookingDate"></label>
            <Field name="bookingDate" component={DateRangePicker} />
            <ErrorMessage
              name="bookingDate"
              component="div"
              className="error"
            />
          </div>

          <label htmlFor={commentFieldId} />
          <Field
            as="textarea"
            name="message"
            id={commentFieldId}
            rows="5"
            placeholder="Comment"
            className={css.formField}
          />
          <ErrorMessage name="message" component="span" />

          <Button
            type="submit"
            variant="prima"
            sx={{ margin: '0 auto', padding: '16px 60px' }}
          >
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
