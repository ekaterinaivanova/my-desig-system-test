import React, {useState, FunctionComponent} from 'react';
import { Field, ErrorMessage, FormikProps, FieldMetaProps, FieldInputProps } from 'formik';

import MyStyledAutocomplete from './Autocomplete.style';
import { AutoComplete } from 'antd';
import FormDiv from '../common/FormDiv';

const { Option } = AutoComplete;

interface Ioption {
  id: number,
  name: string
}

interface IhandleSearchFn {
  (value: string | undefined): void
}

interface OtherProps {
    placeholder: string;
    name: string;
    onSelect?: (value: string) => void;
    options?: Ioption[];
    type?: string

}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}
  
type AutocompleteProps = OtherProps & FormikProps<FormValues>

export const MyAutocomplete: FunctionComponent<AutocompleteProps> = (properties: AutocompleteProps) => {
    const {isSubmitting, options, onSelect, ...props} = properties;
    const [items, setItems] = useState<Ioption[]>([]);

    const handleSearch: IhandleSearchFn = (value) => {
        let filtered = options || [];
        if (value) {
            filtered = filtered
                .filter((item) => item.name.toLowerCase().indexOf(value) > -1);
        }
        filtered = filtered.map((item) => ({
            ...item,
            name: `${item.name}@smartis.si`,
        }));
        setItems(filtered || []);
    };
    return (
        <Field name={props.name}>
            {({form, meta, field}: {form: FormikProps<FormValues>, meta: FieldMetaProps<FormValues>, field: FieldInputProps<string>}):JSX.Element => {

                const {setTouched} = form.getFieldHelpers(field.name);
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
                                    onSelect(val);
                                }
                            }}
                            onChange={(viewValue) => {
                                if (meta.touched === false) {
                                    setTouched(true, true);
                                }
                                form.setFieldValue(field.name, viewValue);
                            }}
                            modifiers={[meta.error && meta.touched ?  'error' : '']}
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
                );
            }}
        </Field>
      
    );

};

