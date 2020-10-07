import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

interface Itheme {
  status: {
    errorColor: string
  }
}

//FORM STYLE
const FormStyle = createGlobalStyle`
${normalize()}
.form-container {
    padding: 16px;
    .error-message {
      color: ${(props: {theme: Itheme}) => props.theme.status.errorColor}
    }
}
`;

export default FormStyle;