import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

//FORM STYLE
const FormStyle = createGlobalStyle`
${normalize()}
.form-container {
    padding: 16px;
    .error-message {
      color: ${(props) => props.theme.status.errorColor}
    }
}
`;

export default FormStyle