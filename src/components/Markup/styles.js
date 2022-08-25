import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 8px;
  input {
    background-color: ${({ theme, isNew }) =>
      isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};

    border: ${({ theme, isNew }) =>
      isNew ? `${theme.COLORS.BACKGROUND_700} 2px dashed` : 'none'};

    border-right: none;

    border-top-right-radius: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};

    padding: 15px;
    padding-right: 0;
    font-size: 16px;
  }

  button {
    padding: 15px;
    font-size: 16px;

    background-color: ${({ theme, isNew }) =>
      isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
    border: none;

    border: ${({ theme, isNew }) =>
      isNew ? `${theme.COLORS.BACKGROUND_700} 2px dashed` : 'none'};

    border-left: none;

    border-top-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;

    &:hover {
      filter: none;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
