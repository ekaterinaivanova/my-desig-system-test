import React, { FunctionComponent, InjectedFormikProps } from 'react';
import { FieldArray, withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import {MyInput} from '../FormikAntdInput/FormikAntdInput';
import {MyAutocomplete} from '../Autocomplete/Autocomplete';
import {FormStyle} from '../../utils/FormStyle';
import { MyButton } from '../Buttons/Button';


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

interface inputConfig  {
    componentType: 'textField' | 'autocomplete',
    placeholder: string,
    type: string,
    name: string,
}

interface componentConfig extends inputConfig{
    options: Ioption[] | undefined
}

const inputList: componentConfig[] = [
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
];

interface Iperson {
  firstName: string;
  lastName: string;
  email: string;
  friends?: Iperson[];
}



interface FormValues {
    firstName: string;
    lastName: string;
    email: string
}
interface Ioption {
    id: number;
    name: string;
  }
  

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initial: {
        firstName: string;
        lastName: string;
        email:string
    }
}
 
const MyForm =(props: OtherProps & FormikProps<FormValues>) => {
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
                    inputList.map(({componentType,...inputConfig}, index) => {
                        const fieldProps = {
                            ...props,
                            ...inputConfig,
                            isSubmitting
                        };
                        switch (componentType) {
                        case 'textField':
                            return ( 
                                <MyInput key={index} {...fieldProps}/>
                            );
                        case 'autocomplete':
                            if (fieldProps.options) {
                                return (
                                    <MyAutocomplete key={index} {...fieldProps}/>
                                );
                            }
                            return (<div>Autocomplete options are missing</div>);
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
 
const MyEnhancedForm = withFormik<MyFormProps & OtherProps, FormValues>({
    mapPropsToValues: () => initialValues,
 
    // Custom sync validation
    validationSchema: formValidationSchema,
    handleSubmit: (values: FormValues,
        { props, setSubmitting, setErrors }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
 
    displayName: 'BasicForm',
})(MyForm);

export default MyEnhancedForm;
