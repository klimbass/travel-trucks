import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  //   bookingDate: Yup.string()
  //     .required('Required'),
  comment: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

export default function BookingForm() {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name*</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={emailFieldId}>Email*</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={commentFieldId}>Comment</label>
          <Field as="textarea" name="message" id={commentFieldId} rows="5" />
          <ErrorMessage name="message" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
