import MyStyledInputNumber from './Input.style';
import React, {FunctionComponent} from 'react';
import {FormikHelpers} from 'formik';

interface Ifield {
  name: string
}

interface FormValues {
  firstName: string;
  lastName: string;
}

interface Iprops {
  form: FormikHelpers<FormValues>,
  field: Ifield
}

const createInput = (): FunctionComponent<Iprops> => {

    const MyInputNumber: FunctionComponent<Iprops> = ({ field, form, ...props }: Iprops) => {
        return (
            <MyStyledInputNumber
                {...field}
                {...props}
                onChange={(option) => {form.setFieldValue(field.name, option);}}
            />
        );
    };

    return MyInputNumber;
};

export default createInput;