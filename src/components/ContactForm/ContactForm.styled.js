import styled from 'styled-components';

export const StyledForm = styled.form`
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
color: ${({ theme }) => theme.colors.buttonTextColor};
background-color: transparent;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
border-radius: 10px;
margin-top: 4px;
transition-property: color, background-color, box-shadow;
transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};


:hover, :focus {
outline: none;
color: ${({ theme }) => theme.colors.secondaryTextColor};
background-color: ${({ theme }) => theme.colors.accentColor};
box-shadow: ${({ theme }) => theme.boxShadow};
}
`;

export const StyledInput = styled.input`
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
