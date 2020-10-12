import React from 'react';
import { FieldArray, FormikProps, FormikValues } from 'formik';
import {componentConfig, arrayFieldInputConfig} from '../../types/form.types';
import { MyInput } from '../FormikAntdInput/FormikAntdInput';
import {MyAutocomplete} from '../Autocomplete/Autocomplete';
import { MyButton } from '../Buttons/Button';

export const FormItem: <T> ({values, ...props}: {values: T} &  FormikProps<T> & componentConfig) => JSX.Element = function FormItem <T>({values, ...props}: {values: T} & FormikProps<T> & componentConfig) {
    const {
        componentType
    } = props;

    switch (componentType) {
    case 'textField':
        return ( 
            <MyInput {...props}/>
        );
    case 'autocomplete':
        if (props.options) {
            return (
                <MyAutocomplete values={values} {...props}/>
            );
        }
        return (<div>Autocomplete options are missing</div>);
    default: 
        return <div>No form Type specified</div>;
    }
};
//TODO add titles to configs
export const FormArrayItem: <T extends FormikValues> ({values, ...props}: {values: T} &  FormikProps<T> & arrayFieldInputConfig) => JSX.Element = function FormArrayItem  <T extends FormikValues>({values, ...props}: {values: T} & FormikProps<T> & arrayFieldInputConfig) {

    const {isSubmitting, name, componentConfigs} = props;
    
    return <FieldArray name={name}>
        {
            ({ remove, push }) => {
                return (
                    <div>

                        {
                            values && values[name] && Array.isArray(values[name]) && values[name].length > 0 ? <div>
                                {
                                    values[name].map((_: any, index: number) => (
                                        <div key={index}>
                                            <div style={{display: 'flex'}}>
                                                <h1 style={{ width: '100%' }}>{props.arrayItemLabel} {index + 1}</h1> 
                                                <MyButton
                                                    disabled={isSubmitting}
                                                    modifiers={['tertiary', 'small']}
                                                    style={{ marginTop: '26px' }}
                                                    onClick={() => remove(index)}
                                                >
                                                    {props.removeButtonTitle || 'Remove'}
                                                </MyButton>
                                            </div>
                                            {
                                                componentConfigs.map((inputConfig) => {
                                                    const fieldName = `${name}.${index}.${inputConfig.name}`;
                                                    const fieldProps = {
                                                        ...props,
                                                        ...inputConfig,
                                                        name: fieldName,
                                                        isSubmitting
                                                    };
                                                    return <FormItem values={values} key={`fieldArray${fieldName}${index}`} {...fieldProps} />;
                                                })
                                            } 
                                        </div>
                                    ))
                                }
                            </div>: <div>{props.noItemsLabel || 'There are no items'}</div>
                        
                        }

                        <MyButton
                            disabled={isSubmitting}
                            modifiers={['secondary']}
                            style={{ marginTop: '12px' }}
                            onClick={() => push({ firstName: '', email: '', lastName: '' })}
                        >
                            {props.addButtonTitle || 'Add'} 
                        </MyButton>

                    </div>
                );
            }
        }

    </FieldArray>;
};
