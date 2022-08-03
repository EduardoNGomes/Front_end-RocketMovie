import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  padding: 0 32px;

  border: none;
  border-radius: 10px;

  height: 48px;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
`
