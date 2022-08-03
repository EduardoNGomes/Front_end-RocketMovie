import styled from 'styled-components'

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: inline-block;
  padding: 5px 16px;
  margin-top: 30px;
  margin-right: 10px;

  border: none;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`
