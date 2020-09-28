import React from 'react';
import { FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import {MyInput} from './FormikAntdInput/FormikAntdInput'
import {MyAutocomplete} from './Autocomplete/Autocomplete'
import FormStyle from './FormStyle'
import { MyButton } from './AntdButtons';


const firstName = Yup.string()
.max(15, 'Must be 15 characters or less')
.required('Required');
const lastName =  Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required')
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
})

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
}

let inputList = [
  {
   componentType: 'textField', placeholder: 'Name', type: 'text', name: 'firstName'
  },
  {
    componentType: 'textField', placeholder: 'Last Name', type: 'text', name: 'lastName'
  },
  {
    componentType: 'autocomplete', placeholder: 'Email', type: 'email', name: 'email', options: items
  }
]

 
 const MyForm = props => {
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
          let fieldProps = {
            formik: props,
            ...inputConfig,
            isSubmitting
          };
            switch (componentType) {
              case 'textField':
                return ( 
                  <MyInput key={index} {...fieldProps}/>
                )
              case 'autocomplete':
                  return (
                    <MyAutocomplete key={index} {...fieldProps}/>
                  )
            }
         
        })
      }
      <h1>Guests</h1>
      {!Array.isArray(values.friends) || values.friends.length === 0 && 'You have no guests yet'}
      <FieldArray name="friends">
        {({ remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                   <div key={index}>
                   <div style={{display: 'flex'}}>
                     <h1 style={{ width: '100%' }}>Friend {index + 1}</h1>
                     <MyButton
                      disabled={isSubmitting}
                      modifiers={['tertiary', 'small']}
                      style={{ marginTop: '26px' }}
                      onClick={() => remove(index)}
                    >
                      Remove
                    </MyButton>
                   </div>
                     {
                      inputList.map((inputConfig) => {
                      let name = `friends.${index}.${inputConfig.name}`
                        let fieldProps = {
                          formik: props,
                          ...inputConfig,
                          name,
                          isSubmitting
                        };
                        switch(inputConfig.componentType) {
                          case 'textField':
                          return (<MyInput key={name} {...fieldProps}/>)
                          case 'autocomplete':
                            return (
                              <MyAutocomplete key={index} {...fieldProps}/>
                            )
                        }
                        
                      })
                     }
                   </div>
                  )
                )}

                <MyButton
                  disabled={isSubmitting}
                  modifiers={['secondary']}
                  style={{ marginTop: '12px' }}
                  onClick={() => push({ firstName: '', email: '', lastName: '' })}
                >
                  Add friend
                </MyButton>
              </div>
            )}

      </FieldArray>
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
   handleSubmit: (values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },
 
   displayName: 'BasicForm',
 })(MyForm);

export default MyEnhancedForm;
