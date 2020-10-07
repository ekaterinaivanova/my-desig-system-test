import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Button } from 'antd';


interface Itheme {
    [key: string]: string
}

interface Iprops {
    theme: Itheme,
    modifiers:string[] | string
}

const BUTTON_MODIFIERS = {
    raised: (props: Iprops) => {
        if (props.modifiers.indexOf('secondary') > -1) {
            return `
          background-color: ${props.theme.secondary};
          color: ${props.theme.textColorOnSecondary};
          border-color: ${props.theme.secondaryBorderColor};
      
          &:hover {
            background-color: ${props.theme.secondaryHoverColor};
            color: ${props.theme.textColorOnSecondary};
            border-color: ${props.theme.secondaryBorderColor};
          }
      
          &:focus, &:active {
            background-color: ${props.theme.secondary};
          color: ${props.theme.textColorOnSecondary};
          border-color: ${props.theme.secondaryBorderColor};
          }
        `;
        } else if (props.modifiers.indexOf('tertiary') > -1) {
            return `
          background-color: ${props.theme.tertiary};
          color: ${props.theme.textColorOnTertiary};
          border-color: ${props.theme.tertiaryBorderColor};
      
          &:hover {
            background-color: ${props.theme.tertiaryHoverColor};
            color: ${props.theme.textColorOnTertiary};
            border-color: ${props.theme.tertiaryBorderColor};
          }
      
          &:focus, &:active {
            background-color: ${props.theme.tertiary};
          color: ${props.theme.textColorOnTertiary};
          border-color: ${props.theme.tertiaryBorderColor};
          }
        `;
        } else {
            {
                return `
            background-color: ${props.theme.primary};
            color: ${props.theme.textColorOnPrimary};
            border-color: ${props.theme.primaryBorderColor};
        
            &:hover {
              background-color: ${props.theme.primaryHoverColor};
              color: ${props.theme.textColorOnPrimary};
              border-color: ${props.theme.primaryBorderColor};
            }
        
            &:focus, &:active {
              background-color: ${props.theme.primary};
            color: ${props.theme.textColorOnPrimary};
            border-color: ${props.theme.primaryBorderColor};
            }
          `;
            }
        }

        return '';
    },
    secondary: (props: Iprops) => `
    color: ${props.theme.secondary};
    border-color: ${props.theme.secondary};

    &:hover {
      color: ${props.theme.secondaryHoverColor};
      border-color: ${props.theme.secondaryHoverColor};
    }

    &:focus {
      color: ${props.theme.secondary};
      border-color: ${props.theme.secondary};
    }
    &:active {
      color: ${props.theme.secondaryActiveColor};
      border-color: ${props.theme.secondaryActiveColor};
    }
  `,
    tertiary: (props: Iprops) => `
    color: ${props.theme.tertiary};
    border-color: ${props.theme.tertiary};

    &:hover {
      color: ${props.theme.tertiaryHoverColor};
      border-color: ${props.theme.tertiaryHoverColor};
    }

    &:focus {
      color: ${props.theme.tertiary};
      border-color: ${props.theme.tertiary};
    }
    &:active {
      color: ${props.theme.tertiaryActiveColor};
      border-color: ${props.theme.tertiaryActiveColor};
    }
  `,
    small: () => `    
  font-size: 0.9em;
  padding: 2px 8px;
  line-height: 0.9em;`
};

const MyButton = styled(Button)<Iprops>`
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

export { MyButton };
