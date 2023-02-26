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
color: ${({ theme }) => theme.colors.buttonTextColor};
background-color: transparent;
border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
border-radius: 10px;
transition-property: color, background-color, box-shadow;
transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};

:hover, :focus {
  outline: none;
color: ${({ theme }) => theme.colors.secondaryTextColor};
background-color: ${({ theme }) => theme.colors.accentColor};
box-shadow: ${({ theme }) => theme.boxShadow};
}
`;
