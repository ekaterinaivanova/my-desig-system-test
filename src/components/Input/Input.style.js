import styled from 'styled-components';
import { InputNumber } from 'antd';
import { applyStyleModifiers } from 'styled-components-modifiers';

import INPUT_MODIFIERS from '../InputModifiers'


//NUMBER INPUT STYLED
const MyStyledInputNumber = styled(InputNumber)`
  width: 100%;
  &: focus;
  &:hover {
    border-color: ${(props) => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondaryActiveColor};
  }
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledInputNumber