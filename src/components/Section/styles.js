import styled from 'styled-components'

export const Container = styled.div`
  height: 70vh;
  grid-area: content;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
    margin-top: 0;
  }
`
