import React, {useState, FunctionComponent} from 'react';
import { Field, ErrorMessage, FormikProps, FieldMetaProps, FieldInputProps } from 'formik';

import MyStyledAutocomplete from './Autocomplete.style';
import { AutoComplete } from 'antd';
import FormDiv from '../common/FormDiv';
import {AutocompleteOption, HandleAutocompleteSearchFn} from '../../types/form.types';
import {PersonValue} from '../../types/friend.types';

const { Option } = AutoComplete;

interface OtherProps {
    placeholder: string;
    name: string;
    onSelect?: (value: string) => void;
    options?: AutocompleteOption[];
    type?: string
}

type AutocompleteProps = OtherProps & FormikProps<PersonValue>

export const MyAutocomplete: FunctionComponent<AutocompleteProps> = (properties: AutocompleteProps) => {
    const {isSubmitting, options, onSelect, ...props} = properties;
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
        //TODO FIX WARNING name and placeholder
        <Field name={props.name}>
            {({form, meta, field}: {form: FormikProps<PersonValue>, meta: FieldMetaProps<PersonValue>, field: FieldInputProps<string>}):JSX.Element => {

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

