import styled from 'styled-components'

export const Container = styled.button`
  margin: 20px 8px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};

  border: ${({ theme, isNew }) =>
    isNew ? `${theme.COLORS.BACKGROUND_700} 2px dashed` : 'none'};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};

  &:hover {
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.WHITE : theme.COLORS.WHITE};
  }

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 16px;
  padding: 16px;

  border-radius: 8px;

  font-size: 16px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
