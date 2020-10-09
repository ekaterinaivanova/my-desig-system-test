import React, {useState, FunctionComponent} from 'react';
import { Field, ErrorMessage, FormikProps, FieldMetaProps, FieldInputProps, FormikValues } from 'formik';

import MyStyledAutocomplete from './Autocomplete.style';
import { AutoComplete } from 'antd';
import FormDiv from '../common/FormDiv';
import {AutocompleteOption, HandleAutocompleteSearchFn} from '../../types/form.types';

const { Option } = AutoComplete;

interface OtherProps {
    placeholder: string;
    name: string;
    onSelect?: (value: string) => void;
    options?: AutocompleteOption[];
    type?: string
}


type AutocompleteProps = OtherProps & FormikProps<FormikValues>

export const MyAutocomplete: FunctionComponent<AutocompleteProps> = (properties) => {
    const {isSubmitting, options, onSelect, name, placeholder} = properties;
    const [items, setItems] = useState<AutocompleteOption[]>([]);
    //TODO FIX SEARCh
    const handleSearch: HandleAutocompleteSearchFn = (value) => {
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
        <Field name={name}>
            {({form, meta, field}: {form: FormikProps<FormikValues>, meta: FieldMetaProps<FormikValues>, field: FieldInputProps<string>}):JSX.Element => {

                const {setTouched} = form.getFieldHelpers(field.name);
                return (
                    <FormDiv>
                        <MyStyledAutocomplete
                            {...field}
                            disabled={isSubmitting}
                            placeholder={placeholder}
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

