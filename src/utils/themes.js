import {blue, neutral, yellow, red, green, purple, pink, sage, orange} from './colors'
import {primaryFont} from './typography'
console.log('orange', orange)



export const defaultTheme = {
    primary: purple[300],
    primaryHoverColor: purple[200],
    primaryBorderColor: purple[400],
    primaryHoverBorderColor: purple[300],
    primaryActiveColor: purple[200],
    textColorOnPrimary: neutral[100],
    
    secondary: neutral[100],
    secondaryHoverColor: neutral[200],
    secondaryBorderColor: purple[300],
    secondaryHoverBorderColor: purple[400],
    secondaryActiveColor: pink[100],
    textColorOnSecondary: purple[400],

    tertiary: sage[300],
    tertiaryHoverColor: sage[200],
    tertiaryBorderColor: sage[400],
    tertiaryHoverBorderColor: sage[300],
    tertiaryActiveColor: sage[100],
    textColorOnTertiary: neutral[100],
    
    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont,
    disabledColor: neutral[300],
    disabledBorder: neutral[400],
    colorOnDisabled: neutral[400],
    formElementBackground: neutral[100],
    textOnFormElement: neutral[600],
    status: {
        warningColor: orange[300],
        warningBorderColor: orange[400],
        warningColorHover: orange[200],
        warningColorActive: orange[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}

export const darkTheme = {
    primary: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[300],
    primaryFont,
    disabledColor: neutral[100],
    colorOnDisabled: neutral[600],
    formElementBackground: blue[100],
    textOnFormElement: neutral[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}

