import React from 'react';
import { FieldArray, withFormik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import {MyInput} from '../FormikAntdInput/FormikAntdInput';
import {MyAutocomplete} from '../Autocomplete/Autocomplete';
import {FormStyle} from '../../utils/FormStyle';
import { MyButton } from '../Buttons/Button';
import {componentConfig, arrayFieldInputConfig} from '../../types/form.types';

import {PersonValue} from '../../types/friend.types';
import {FormItem, FormArrayItem, FormComponent} from './Form';

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
        arrayItemLabel: 'Friend',
        removeButtonTitle: 'Remove',
        addButtonTitle: 'Add a Friend',
        noItemsLabel: 'You have no friends :(',
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
 

//TODO how to pass PersonValues TYPE
const handleSubmit: (values: PersonValue, { setSubmitting }: {setSubmitting:  (isSubmitting: boolean) => void}) => void = function(values: PersonValue, { setSubmitting }: {setSubmitting:  (isSubmitting: boolean) => void}) {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 1000);
};

const FriendsForm = () => (
    <FormComponent handleSubmit={handleSubmit} formValidationSchema={formValidationSchema} initialValues={initialValues} inputList={inputList}/>
);

export default FriendsForm;
