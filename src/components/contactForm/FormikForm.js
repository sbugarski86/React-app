import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormikForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div className='formikForm'>
        <div className='formikDiv'>
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          <Field
            type='text'
            name='firstName'
            placeholder='First name'
            className='formikField'
          />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          <Field
            type='text'
            name='lastName'
            placeholder='Last name'
            className='formikField'
          />
        </div>
        <div className='formikDiv'>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field
            type='email'
            name='email'
            placeholder='Email'
            className='formikField'
          />
        </div>
        <div className='formikDiv'>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type='password'
            name='password'
            placeholder='Password'
            className='formikField'
          />
        </div>
      </div>
      <div>
        <button className='formikButton' disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </Form>
  );
};
const FormikApp = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    setTimeout(() => {
      if (values.email === 'bugarski.stevan@gmail.com') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
        setStatus({ success: 'Email sent!' });
      }
      setSubmitting(false);
    }, 2000);
  }
})(FormikForm);
export default FormikApp;
