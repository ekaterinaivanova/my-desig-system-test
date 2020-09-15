import React, {useState} from 'react'
import { Field, ErrorMessage, useField } from 'formik';

import MyStyledAutocomplete from './Autocomplete.style';
import { AutoComplete } from 'antd';
import FormDiv from '../FormDiv'
const { Option } = AutoComplete;




export const createAutocomplete = (getOptions) => {

    const MyAutocomplete = ({ field, form, ...props }) => {

      const [items, setItems] = useState([]);
      const handleSearch = async (value) => {
        let res = await getOptions(value);
        setItems(res || []);
      };
      return (
        <MyStyledAutocomplete
          {...field}
          {...props}
          onSearch={handleSearch}
          onSelect={(val) => {
            console.log(`Selected ${val}`);
          }}
          onChange={(viewValue) => {
            form.setFieldValue(field.name, viewValue);
          }}
        >
          {items.map((item) => (
            <Option key={item.id} value={item.name}>
              {item.name}
            </Option>
          ))}
        </MyStyledAutocomplete>
      );
    };
    return MyAutocomplete


}

export const MyAutocomplete = ({isSubmitting, options, onSelect, ...props}) => {
 
  const [items, setItems] = useState([]);
  const handleSearch = async (value) => {
    let filtered = options
    if (value) {
      filtered = options
      .filter((item) => item.name.toLowerCase().indexOf(value) > -1)
      
    }
    filtered = filtered.map((item) => ({
      ...item,
      name: `${item.name}@smartis.si`,
    }))
    setItems(filtered || []);
  };
  return (
    <Field name={props.name}>
      {({form, meta, field}) => {
        const {setTouched} = form.getFieldHelpers(field.name)
        return (
          <FormDiv>
            <MyStyledAutocomplete
              {...field}
              disabled={isSubmitting}
              placeholder={props.placeholder}
              allowClear={true}
              onSearch={handleSearch}
              onSelect={(val) => {
                if (typeof onSelect === 'function') {
                  onSelect(val)
                }
              }}
              onChange={(viewValue) => {
                if (meta.touched === false) {
                    setTouched(true, true)
                }
                form.setFieldValue(field.name, viewValue);
              }}
              modifiers={[meta.error && meta.touched && 'error']}
            >
        
              {items.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </MyStyledAutocomplete>
            <ErrorMessage
                  component="div"
                  className="error-message"
                  name={field.name}
                  />
          </FormDiv>  
        )
      }}
    </Field>
      
    );

}

