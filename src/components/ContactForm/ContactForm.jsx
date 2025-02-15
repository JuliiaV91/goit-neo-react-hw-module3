import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 characters!')
    .max(50, 'Max 50 characters!')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone must be in format XXX-XX-XX')
    .required('Phone number is required!'),
});

const initialValues = {
  name: '',
  number: '',
};

function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.divStyle}>
          <label className={css.labelStyle} htmlFor="name">
            Name
          </label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.divStyle}>
          <label className={css.labelStyle} htmlFor="number">
            Number
          </label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.btnStyle} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
