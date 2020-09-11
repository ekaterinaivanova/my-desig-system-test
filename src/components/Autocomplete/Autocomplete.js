import React, {useState} from 'react'
import MyStyledAutocomplete from './Autocomplete.style';
import { AutoComplete } from 'antd';


const createAutocomplete = (getOptions) => {
    const { Option } = AutoComplete;

    const MyAutocomplete = ({ field, form, ...props }) => {

      const [items, setItems] = useState([]);
      const handleSearch = async (value) => {
        let res = await getOptions(value);
        console.log('res', res);
    
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


export default createAutocomplete;
