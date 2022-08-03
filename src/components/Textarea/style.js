import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 275px;

  margin: 40px 0;
  padding: 19px 16px;

  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.WHITE};

  resize: none;
`
