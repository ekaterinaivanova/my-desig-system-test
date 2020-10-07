import { lighten, darken } from 'polished';

export const blue = {
    100: '#3a36e0',
    200: '#0804b8',
    300: '#030086',
    400: '#5f25a4',
    500: '#050449',
};

export const green = {
    100: '#529e66',
    200: '#367b48',
    300: '#276738',
};

export const yellow = {
    100: '#e1c542',
    200: '#cab23f',
    300: '#b49e35',
};

export const neutral = {
    100: '#ffffff',
    200: '#f4f5f7',
    300: '#e1e1e1',
    400: '#5e5e5e',
    500: '#4a4b53',
    600: '#000000',
};

const pinkColor = '#E5989B';

export const pink = {
    100: lighten(0.2, pinkColor),
    200: lighten(0.1, pinkColor),
    300: pinkColor,
    400: darken(0.1, pinkColor),
    500: darken(0.3, pinkColor),
    600: darken(0.5, pinkColor),
};
const purpleColor = '#9C89B8';

export const purple = {
    100: lighten(0.5, purpleColor),
    200: lighten(0.1, purpleColor),
    300: purpleColor,
    400: darken(0.1, purpleColor),
    500: darken(0.3, purpleColor),
    600: darken(0.5, purpleColor),
};
const orangColor = '#E76F51';
export const orange = {
    100: lighten(0.5, orangColor),
    200: lighten(0.1, orangColor),
    300: orangColor,
    400: darken(0.1, orangColor),
    500: darken(0.3, orangColor),
    600: darken(0.5, orangColor),
};

const sageColor = '#81B29A';
export const sage = {
    100: lighten(0.5, sageColor),
    200: lighten(0.1, sageColor),
    300: sageColor,
    400: darken(0.1, sageColor),
    500: darken(0.3, sageColor),
    600: darken(0.5, sageColor),
};
const redColor = '#9D0208';
export const red = {
    100: lighten(0.5, redColor),
    200: lighten(0.1, redColor),
    300: redColor,
    400: darken(0.1, redColor),
    500: darken(0.3, redColor),
    600: darken(0.5, redColor),
};
