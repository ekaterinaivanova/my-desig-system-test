import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { PrimaryButton } from './Buttons';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from '../utils';
import * as Yup from 'yup';

import { Input, SubmitButton } from 'formik-antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';

const Basic = () => {
  const FormStyle = createGlobalStyle`
    ${normalize()}
    .form-container {
        padding: 16px;
        .error-message {
          color: ${(props) => props.theme.status.errorColor}
        }
    }
`;

  return (
    <div className="form-container">
      <h1>Hello Form!</h1>
      <Formik
        initialValues={{ firstName: 'Ekaterina' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Input placeholder="First Name" name="firstName" type="text" />
              <ErrorMessage
                component="div"
                className="error-message"
                name="firstName"
              />
            </div>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <FormStyle />
    </div>
  );
};
export default Basic;
