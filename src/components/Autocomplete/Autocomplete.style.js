import { AutoComplete } from 'antd';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import INPUT_MODIFIERS from '../InputModifiers'

const MyStyledAutocomplete = styled(AutoComplete)`
  width: 100%;
  &:focus,
  &:hover,
  &:active,
  :not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${(props) => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
  }
  input {
    &:focus,
    &:hover,
    &:active {
      border-color: ${(props) => props.theme.secondaryActiveColor};
    }
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledAutocomplete;
