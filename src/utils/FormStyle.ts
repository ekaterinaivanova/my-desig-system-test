import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

interface Iprops {
    theme?: {
        status?: {
            errorColor: string        
        }
    }
}

export const FormStyle = createGlobalStyle`
${normalize()}
.form-container {
    padding: 16px;
    .error-message {
      color: ${(props: Iprops) => props && props.theme && props.theme.status ? props.theme.status.errorColor : ''}
    }
}
`;
