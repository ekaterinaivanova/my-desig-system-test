import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import {createInput, MyInput} from './FormikAntdInput/FormikAntdInput'
import FormStyle from './FormStyle'


const initialValues = {
  friends: [
    {
      name: 'Ekaterina',
      email: 'Ekaterina',
    },
  ],
};



const InviteFriends = () => (
  <div>
    <h1>Invite friends</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`friends.${index}.name`}>Name</label>
                        <Field
                          name={`friends.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`friends.${index}.email`}>Email</label>
                        <Field
                          name={`friends.${index}.email`}
                          placeholder="jane@acme.com"
                          type="email"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: '', email: '' })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}
    </Formik>
  </div>
);

const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().required('Required').email(),
})

const initialValuess = {
  firstName: 'Ekaterina',
  lastName: 'Ivanova',
  email: 'ekaterin@smartis.si'
}

let inputList = [
  {
   placeholder: 'Name', type: 'text', name: 'firstName'
  },
  {
   placeholder: 'Last Name', type: 'text', name: 'lastName'
  },
  {
    placeholder: 'Email', type: 'email', name: 'email'
  }
]

 
 const MyForm = props => {
   const {
     values,
     touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting
    } = props;

   return (
     <div className="form-container">
      <form onSubmit={handleSubmit}>

      {
        inputList.map((inputConfig, index) => {
          let fieldProps = {
            formik: props,
            ...inputConfig,
            isSubmitting
          };
          return ( 
            <MyInput key={index} {...fieldProps}/>
          )
        })
      }
       
        <button type="submit">Submit</button>
      </form>
      <FormStyle/>
     </div>
   );
 };
 
 const MyEnhancedForm = withFormik({
   mapPropsToValues: () => initialValuess,
 
   // Custom sync validation
   validationSchema: formValidationSchema,
 
  //  handleSubmit: (values, { setSubmitting }) => {
  //    setTimeout(() => {
  //      alert(JSON.stringify(values, null, 2));
  //      setSubmitting(false);
  //    }, 1000);
  //  },
 
   displayName: 'BasicForm',
 })(MyForm);

export default MyEnhancedForm;
