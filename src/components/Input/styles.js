import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  padding-left: 20px;
  > input {
    padding: 19px 24px;
    border-radius: 10px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
