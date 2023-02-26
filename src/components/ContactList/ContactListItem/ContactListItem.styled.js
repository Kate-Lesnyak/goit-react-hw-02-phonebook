import styled from 'styled-components';

export const StyledContactListItem = styled.li`
display: flex;
justify-content: space-between;
gap: 12px;
`;

export const StyledName = styled.p`
font-weight: 500;
`;

export const StyledButton = styled.button`
max-width: 73px;
margin-left: auto;
padding: 4px 14px;
color: #2C2B2B;
background-color: transparent;
border: 1px solid #F0940A;
border-radius: 10px;
transition-property: color, background-color;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus {
  outline: none;
color: #ffffff;
background-color: #F0940A;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
`;
