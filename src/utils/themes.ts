import { blue, neutral, yellow, red, green, pink, sage } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
    primary: blue[300],
    primaryHoverColor: blue[200],
    primaryActiveColor: blue[100],
    primaryBorderColor: blue[400],

    secondary: pink[300],
    secondaryHoverColor: pink[200],
    secondaryActiveColor: pink[100],
    secondaryBorderColor: pink[400],

    tertiary: sage[300],
    tertiaryHoverColor: sage[200],
    tertiaryActiveColor: sage[100],
    tertiaryBorderColor: sage[400],

    textColorOnPrimary: neutral[100],
    textColorOnSecondary: neutral[100],
    textColorOnTertiary: neutral[100],

    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont,
    disabledColor: neutral[100],
    colorOnDisabled: neutral[600],
    formElementBackground: neutral[100],
    textOnFormElement: neutral[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[200],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300],
    },
};

//TODO
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
        successColorActive: green[300],
    },
};
