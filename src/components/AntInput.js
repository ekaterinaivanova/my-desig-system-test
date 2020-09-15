import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Input } from 'formik-antd';
import { MyButton } from './AntdButtons';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import 'antd/dist/antd.css';

import {createAutocomplete} from './Autocomplete/Autocomplete'
import createNumberInput from './Input/Input'
import FormDiv from './FormDiv'
import FormStyle from './FormStyle'


//  INPUT ACTIVE BORDER COLOR
const INPUT_MODIFIERS = {
  error: (props) => `
    border-color: ${props.theme.status.errorColor};
  `,
};
const items = [
  { name: 'Ekaterina', id: 1 },
  { name: 'Matej', id: 2 },
  { name: 'Simon', id: 3 },
  { name: 'Nik', id: 4 },
  { name: 'Miha', id: 5 },
  { name: 'Jure', id: 6 },
];

//AUTOCOMPLETE

const getOptions = (filterString) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        items
          .filter((item) => item.name.toLowerCase().indexOf(filterString) > -1)
          .map((item) => ({
            ...item,
            name: `${item.name}@smartis.si`,
          }))
      );
    }, 1000);
  });
};
const myTestAutocomplete = createAutocomplete(getOptions)
//NUMBER INPUT 
const myTestInput = createNumberInput()


//STYLED INPUT
const MyStyledInput = styled(Input)`
  &:focus,
  &:hover {
    border-color: ${(props) => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
  }
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;


const FormTest = () => {
  return (
    <div className="form-container">
      <h1>Hello Form!</h1>
      <Formik
        initialValues={{
          firstName: 'Ekaterina',
          age: 20,
          email: 'ekaterina@mail.com',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <FormDiv>
              <MyStyledInput
                disabled={isSubmitting}
                modifiers={[errors.firstName && 'error']}
                placeholder="First Name"
                name="firstName"
                type="text"
              />
              <ErrorMessage
                component="div"
                className="error-message"
                name="firstName"
              />
            </FormDiv>

            <FormDiv>
              <Field
                disabled={isSubmitting}
                name="age"
                modifiers={[errors.age && 'error']}
                placeholder="Enter Age"
                component={myTestInput}
              />
              <ErrorMessage
                component="div"
                className="error-message"
                name="age"
              />
            </FormDiv>
            <FormDiv>
              <Field
                disabled={isSubmitting}
                name="email"
                modifiers={[errors.email && 'error']}
                placeholder="Enter Email"
                allowClear={true}
                component={myTestAutocomplete}
              />
            </FormDiv>
            <MyButton
              disabled={isSubmitting}
              modifiers={['secondary']}
              style={{ marginTop: '12px' }}
              htmlType="submit"
            >
              Submit
            </MyButton>
          </Form>
        )}
      </Formik>
      <FormStyle />
    </div>
  );
};
export default FormTest;
