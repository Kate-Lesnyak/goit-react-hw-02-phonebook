import styled from 'styled-components';

export const StyledForm = styled.form`
width: 400px;
display: flex;
gap: 12px;
flex-direction: column;
padding: 12px;
border: 1px solid #338309;
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
color: #000000;
`;

export const StyledButton = styled.button`
max-width: 152px;
margin: auto;
padding: 8px 32px;
font-weight: 500;
color: #2C2B2B;
background-color: transparent;
border: 1px solid #F0940A;
border-radius: 10px;
margin-top: 4px;
transition-property: color, background-color;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus {
outline: none;
color: #ffffff;
background-color: #F0940A;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
`;

export const StyledInput = styled.input`
padding: 8px 16px;
border: 1px solid #010101;
border-radius: 10px;
transition-property: border;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

:focus {
outline: none;
border: 1px solid #F0940A;
}

`;
