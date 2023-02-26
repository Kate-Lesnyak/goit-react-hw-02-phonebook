import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
width: 400px;
display: flex;
gap: 12px;
flex-direction: column;
padding: 12px;
border: ${({ theme }) => `1px solid ${theme.colors.backgroundAndBorderColor}`};
border-radius: 10px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
`;

export const StyledFormField = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`;

export const StyledLabel = styled.span`
color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledButton = styled.button`
max-width: 152px;
margin: auto;
padding: 8px 32px;
font-weight: 500;
margin-top: 4px;
`;

export const StyledInput = styled(Field)`
padding: 8px 16px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: 10px;
transition-property: border;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

:focus {
outline: none;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
}
 `;

export const StyledErrorMessage = styled(ErrorMessage)`
color: red;
`;
// export const StyledInput = styled.input`
  // padding: 8px 16px;
  // border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
  // border-radius: 10px;
  // transition-property: border;
  // transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  // :focus {
  // outline: none;
  // border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
  // }

