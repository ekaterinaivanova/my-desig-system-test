import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PrimaryButton } from './Buttons';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from '../utils';

export const Basic = () => {
  const FormStyle = createGlobalStyle`
    ${normalize()}
    .form-container {
        padding: 16px;
        .form-input {
            margin-bottom: 16px;
        }
    }
`;
  return (
    <div>
      <h1>Hello Form!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <div className="form-input">
              <Field type="email" name="email" placeholder="Jane Doe" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-input">
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <PrimaryButton
              modifiers="small"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </PrimaryButton>
          </Form>
        )}
      </Formik>
      <FormStyle />
    </div>
  );
};
