import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.COLORS.PINK};
  justify-content: center;

  align-items: center;
  background: none;
  border: none;

  font-size: 16px;
  gap: 5px;
`
