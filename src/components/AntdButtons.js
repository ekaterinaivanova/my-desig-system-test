import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Button } from 'antd';

const secondaryColor = '#362222';
const tertiaryColor = '#A1A1A1';

const textInvertColor = '#fff';

const BUTTON_MODIFIERS = {
  small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
  large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
  warning: (props) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textInvertColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px slid ${props.theme.status.warningColorHover};
        }
        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
};

const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};

  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &:focus {
    color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
  }
  &:active {
    color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.secondary};
  border-color: ${(props) => props.theme.secondary};

  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &:focus {
    color: ${(props) => props.theme.secondary};
    border-color: ${(props) => props.theme.secondary};
  }
  &:active {
    color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  background-color: ${tertiaryColor};
  color: ${textInvertColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { SecondaryButton, TertiaryButton, PrimaryButton };
