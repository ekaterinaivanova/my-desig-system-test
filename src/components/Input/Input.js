import MyStyledInputNumber from './Input.style'
import React from 'react'

const createInput = () => {

    const MyInputNumber = ({ field, form, ...props }) => {
        return (
          <MyStyledInputNumber
            {...field}
            {...props}
            onChange={(option) => form.setFieldValue(field.name, option)}
          />
        );
      };

      return MyInputNumber
}

export default createInput