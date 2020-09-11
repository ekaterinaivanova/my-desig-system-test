import React from 'react'
import { Field, useField, ErrorMessage } from 'formik';

import MyStyledInput from './FormikAntdInput.style'
import FormDiv from '../FormDiv'


export const MyInput = ({isSubmitting, ...props}) => {
    /* meta = {
        error,
        initialError,
        initialTouched,
        initialValue,
        touched,
        value
    } */
    // eslint-disable-next-line no-unused-vars
    const [field, meta] = useField(props);
    return (

        
        <Field name={field.name}>
          {() => {
            return (

                <FormDiv>
                    <MyStyledInput
                    {...field}
                    disabled={isSubmitting}
                    placeholder={props.placeholder}
                    modifiers={[meta.error && meta.touched && 'error']}
                    />
                    <ErrorMessage
                    component="div"
                    className="error-message"
                    name={props.name}
                    />
                </FormDiv>
        
            );
          }}
        </Field>
      );

}

