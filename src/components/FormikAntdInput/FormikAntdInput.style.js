import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Input } from 'formik-antd';

import INPUT_MODIFIERS from '../InputModifiers'

const MyStyledInput = styled(Input)`
  &:focus,
  &:hover {
    border-color: ${(props) => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
  }
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledInput