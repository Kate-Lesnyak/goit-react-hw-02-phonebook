import styled from 'styled-components';

export const StyledFilter = styled.label`
display: flex;
gap: 10px;
align-items: center;
width: 400px;
color: #000000;
margin-left: auto;
margin-right: auto;
margin-bottom: 12px;
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
