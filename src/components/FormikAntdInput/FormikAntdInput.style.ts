import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Input } from 'formik-antd';

import INPUT_MODIFIERS from '../../utils/InputModifiers';
interface Itheme {
  secondaryActiveColor: string, 

}

interface Iprops {
  theme: Itheme,
  modifiers: string[] | string
}
const MyStyledInput = styled(Input)<Iprops>`
  &:focus,
  &:hover {
    border-color: ${(props: Iprops): string => props.theme.secondaryActiveColor};
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor};
    box-shadow: 0 0 0 2px ${(props: Iprops): string => props.theme.secondaryActiveColor};
  }
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default MyStyledInput;