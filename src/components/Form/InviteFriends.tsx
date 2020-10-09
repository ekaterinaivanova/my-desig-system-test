import React from 'react';
import { FieldArray, withFormik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import {MyInput} from '../FormikAntdInput/FormikAntdInput';
import {MyAutocomplete} from '../Autocomplete/Autocomplete';
import {FormStyle} from '../../utils/FormStyle';
import { MyButton } from '../Buttons/Button';
import {componentConfig, arrayFieldInputConfig} from '../../types/form.types';

import {PersonValue} from '../../types/friend.types';
import {FormItem, FormArrayItem} from './Form';

const firstName = Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required');
const lastName =  Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required');
const email = Yup.string().required('Required').email('Invalid email');

const formValidationSchema = Yup.object({
    firstName,
    lastName,
    email,
    friends: Yup.array().of(
        Yup.object().shape({
            firstName,
            lastName,
            email
        })
    )
});

const items = [
    { name: 'Ekaterina', id: 1 },
    { name: 'Matej', id: 2 },
    { name: 'Simon', id: 3 },
    { name: 'Nik', id: 4 },
    { name: 'Miha', id: 5 },
    { name: 'Jure', id: 6 },
];

const initialValues = {
    firstName: 'Ekaterina',
    lastName: 'Ivanova',
    email: 'ekaterin@smartis.si',
    friends: []
};

const inputList: (componentConfig | arrayFieldInputConfig)[] = [
    {
        componentType: 'textField', 
        placeholder: 'Name',
        type: 'text',
        name: 'firstName',
        options: []
    },
    {
        componentType: 'textField',
        placeholder: 'Last Name',
        type: 'text',
        name: 'lastName',
        options: []
    },
    {
        componentType: 'autocomplete',
        placeholder: 'Email',
        type: 'email',
        name: 'email',
        options: items
    },
    {
        componentType: 'fieldArray',
        name: 'friends',
        componentConfigs: [
            {
                componentType: 'textField', 
                placeholder: 'Name',
                type: 'text',
                name: 'firstName',
                options: []
            },
            {
                componentType: 'textField',
                placeholder: 'Last Name',
                type: 'text',
                name: 'lastName',
                options: []
            },
            {
                componentType: 'autocomplete',
                placeholder: 'Email',
                type: 'email',
                name: 'email',
                options: items
            }
        ]
    }
];

interface MyFormProps {
    initial: {
        firstName: string;
        lastName: string;
        email:string
    }
}

function testFn (object:  {[field: string]: any}) {
    console.log(object);
}

testFn(initialValues);
 
const MyForm = (props: FormikProps<FormikValues>) => { //FormikProps<PersonValue> doesn't work why?
    const {
        values,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Host</h1>
                {

                    
                    inputList.map((inputConfig, index) => {
                        const fieldProps = {
                            ...props,
                            ...inputConfig,
                            isSubmitting
                        };
                        if (fieldProps.componentType === 'fieldArray' ) {
                            return <FormArrayItem key={index} {...fieldProps}/>;
                        } else {
                         
                            return <FormItem key={index} {...fieldProps} />;
                        }
                    })
                }
                <MyButton
                    disabled={isSubmitting}
                    modifiers={['primary']}
                    style={{ marginTop: '12px' }}
                    htmlType="submit"
                >
                    Submit
                </MyButton>
            </form>
            <FormStyle/>
        </div>
    );
};
 
const MyEnhancedForm = withFormik({
    mapPropsToValues: () => initialValues,
 
    // Custom sync validation
    validationSchema: formValidationSchema,
    handleSubmit: (values: FormikValues,
        { props, setSubmitting, setErrors }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
 
    displayName: 'BasicForm',
})(MyForm);

export default MyEnhancedForm;
