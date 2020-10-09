import React from 'react';
import { FieldArray, FormikProps, FormikValues } from 'formik';
import {componentConfig, arrayFieldInputConfig} from '../../types/form.types';
import { MyInput } from '../FormikAntdInput/FormikAntdInput';
import {MyAutocomplete} from '../Autocomplete/Autocomplete';
import { MyButton } from '../Buttons/Button';


export const FormItem: (props: FormikProps<FormikValues> & componentConfig) => JSX.Element = function(props: FormikProps<FormikValues> & componentConfig) {


    switch (props.componentType) {
    case 'textField':
        return ( 
            <MyInput {...props}/>
        );
    case 'autocomplete':
        if (props.options) {
            return (
                <MyAutocomplete {...props}/>
            );
        }
        return (<div>Autocomplete options are missing</div>);
    default: 
        return <div>No form Type specified</div>;
    }
};
//TODO add titles to configs
export const FormArrayItem: (props: FormikProps<FormikValues> & arrayFieldInputConfig) => JSX.Element = function(props: FormikProps<FormikValues> & arrayFieldInputConfig) {
    const {values, isSubmitting, name, componentConfigs} = props
    
    return <FieldArray name={name}>
        {
            ({ remove, push }) => {
                return (
                    <div>

                        {
                            Array.isArray(values[name]) && values[name].length > 0 ? <div>
                                {
                                    values[name].map((friend, index) => (
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
                                                componentConfigs.map((inputConfig) => {
                                                    const fieldName = `${name}.${index}.${inputConfig.name}`;
                                                    const fieldProps = {
                                                        ...props,
                                                        ...inputConfig,
                                                        name: fieldName,
                                                        isSubmitting
                                                    };
                                                    return <FormItem key={`fieldArray${fieldName}${index}`} {...fieldProps} />;
                                                })
                                            } 
                                        </div>
                                    ))
                                }
                            </div>: <div>You have no friends :(</div>
                        
                        }

                        <MyButton
                            disabled={isSubmitting}
                            modifiers={['secondary']}
                            style={{ marginTop: '12px' }}
                            onClick={() => push({ firstName: '', email: '', lastName: '' })}
                        >
                        Add friend
                        </MyButton>

                    </div>
                );
            }
        }

    </FieldArray>;
};