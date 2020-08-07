import styled from 'styled-components'
import {typeScale} from '../utils'
import {applyStyleModifiers} from 'styled-components-modifiers'


const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: (props) =>`
        background-color: ${props.theme.status.warningColor};
        border: 1px solid ${props.theme.status.warningBorderColor};
        color: ${props.theme.textInvertColor};

        &:hover {
            background-color: ${props.theme.status.warningColorHover};
            border: 1px solid ${props.theme.status.warningBorderColor};
        }
    `
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 4px;
    min-width: 100px;
    font-family: 'Heebo', sans-serif;
    margin: 8px;
    white-space: nowrap;
    transition: background-color 0.2s linear, color 0.2s linear;
    outline:none;
`
const PrimaryButton =  styled(Button)`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textColorOnPrimary};
    border: 1px solid ${props => props.theme.primaryBorderColor};
    
    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        border: 1px solid ${props => props.theme.primaryHoverBorderColor};
    }

    &:disabled{
        background-color: ${props => props.theme.disabledColor};
        color: ${props => props.theme.colorOnDisabled};
        border: 1px solid ${props => props.theme.disabledBorder};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`
const SecondaryButton =  styled(Button)`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textColorOnSecondary};
    border: 1px solid ${props => props.theme.secondaryBorderColor};
    
    &:hover {
        background-color: ${props => props.theme.secondaryHoverColor};
        border: 1px solid ${props => props.theme.secondaryHoverBorderColor};
    }
  

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;

    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

   
`
const TertiaryButton =  styled(Button)`
   
    background-color: ${props => props.theme.tertiary};
    color: ${props => props.theme.textColorOnTertiary};
    border: 1px solid ${props => props.theme.tertiaryBorderColor};
    
    &:hover {
        background-color: ${props => props.theme.tertiaryHoverColor};
        border: 1px solid ${props => props.theme.tertiaryHoverBorderColor};
    }
  

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;

    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

   
`

export {SecondaryButton, TertiaryButton, PrimaryButton}