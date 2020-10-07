import React, {FunctionComponent} from 'react';
import { Field, useField, ErrorMessage } from 'formik';

import MyStyledInput from './FormikAntdInput.style';
import FormDiv from '../common/FormDiv';

interface Iprops {
  isSubmitting: boolean,
  placeholder: string,
  name: string
}


export const MyInput: FunctionComponent<Iprops> = ({isSubmitting, ...props}: Iprops) => {
    /* meta = {
        error,
        initialError,
        initialTouched,
        initialValue,
        touched,
        value
    } */
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
                            modifiers={[meta.error && meta.touched ?  'error' : '']}
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

};

