import { AutoComplete } from 'antd';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import INPUT_MODIFIERS from '../../utils/InputModifiers';

interface Itheme {
  [key: string]: string
}

interface Iprops {
  theme: Itheme,
  modifiers?:string[] | string
}

const MyStyledAutocomplete = styled(AutoComplete)<Iprops>`
  width: 100%;
  &:focus,
  &:hover,
  &:active,
  :not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${(props: Iprops): string => props.theme.secondaryActiveColor}!important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor}!important;
    box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor}!important;
  }
  input {
    &:focus,
    &:hover,
    &:active {
      border-color: ${(props: Iprops): string => props.theme.secondaryActiveColor}!important;
    }
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledAutocomplete;
