import styled from 'styled-components';
import { InputNumber } from 'antd';
import { applyStyleModifiers } from 'styled-components-modifiers';

import INPUT_MODIFIERS from '../../utils/InputModifiers';

interface Itheme {
    secondaryActiveColor: string, 

}

interface Iprops {
    theme: Itheme
}

//NUMBER INPUT STYLED
const MyStyledInputNumber = styled(InputNumber)<Iprops>`
  width: 100%;
  &:focus;
  &:hover {
    border-color: ${(props: Iprops): string => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor};
  }
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledInputNumber;