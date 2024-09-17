import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mui/material';
import css from './BookingForm.module.css';
import CalendarInput from './CalendarInput.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    .test(
      'dates-required',
      'Please select both start and end dates',
      value => value[0] !== null && value[1] !== null
    )
    .required('Required'),
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
  const toastIdRef = useRef(null);

  const handleSubmit = (values, actions) => {
    const name = values.name;
    const email = values.email;
    const bookingDateStart = formatDate(values.bookingDate[0]);
    const bookingDateEnd = formatDate(values.bookingDate[1]);
    const bookingDate = `${bookingDateStart} - ${bookingDateEnd}`;

    toastIdRef.current = toast.success(
      `Name: ${name}, Email: ${email}, Date: ${bookingDate}`,
      {
        autoClose: false,
      }
    );
    actions.resetForm();
  };
  const handleFieldClick = ev => {
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = null;
    }
  };

  return (
    <div className={css.formBox}>
      <div>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        {({ errors, touched, handleSubmit, validateForm, setTouched }) => {
          console.log(errors);

          const handleCustomSubmit = async e => {
            e.preventDefault();

            setTouched({
              name: true,
              email: true,
              bookingDate: true,
            });
            const formErrors = await validateForm();

            if (Object.keys(formErrors).length > 0) {
              if (formErrors) {
                toastIdRef.current = toast.error(
                  `Please fill in all required fields (*)`,
                  {
                    autoClose: false,
                  }
                );
              }
            } else {
              handleSubmit();
            }
          };

          return (
            <Form
              className={css.form}
              onSubmit={handleCustomSubmit}
              onClick={handleFieldClick}
            >
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Name*"
                className={
                  touched.name && errors.name
                    ? `${css.formField} ${css.errorField}`
                    : css.formField
                }
              />

              <Field
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email*"
                className={
                  touched.email && errors.email
                    ? `${css.formField} ${css.errorField}`
                    : css.formField
                }
              />

              <CalendarInput />

              <Field
                as="textarea"
                name="comment"
                id={commentFieldId}
                rows="5"
                placeholder="Comment"
                className={css.formField}
              />

              <Button
                type="submit"
                variant="prima"
                sx={{
                  margin: '0 auto',
                  padding: '16px 60px',
                  marginTop: '10px',
                }}
              >
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </div>
  );
}
