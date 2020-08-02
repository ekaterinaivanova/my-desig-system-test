import styled from 'styled-components'
import {typeScale} from '../utils'
import {applyStyleModifiers} from 'styled-components-modifiers'

const secondaryColor =  '#362222'
const tertiaryColor =  '#A1A1A1'

const textInvertColor = '#fff'

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
        color: ${props.theme.textInvertColor};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px slid ${props.theme.status.warningColorHover};
        }
        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    font-family: 'Heebo', sans-serif;
    border: none;
    margin: 8px;
    transition: background-color 0.2s linear, color 0.2s linear;
    `
const PrimaryButton =  styled(Button)`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textColorOnPrimary};

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
    }
   
    &:focus {
        outline: 3px solid: ${props => props.theme.primaryHoverColor};
        outline-offset: 4px;
    }
    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        border-color: ${props => props.theme.primaryActiveColor};
    }

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;

    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`
const SecondaryButton =  styled(Button)`
    background-color: ${secondaryColor};
    color: ${textInvertColor};
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

   
`
const TertiaryButton =  styled(Button)`
    background-color: ${tertiaryColor};
    color: ${textInvertColor};
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

   
`

export {SecondaryButton, TertiaryButton, PrimaryButton}