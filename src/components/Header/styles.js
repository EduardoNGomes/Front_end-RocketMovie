import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 125px;
  padding: 24px 120px;

  display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    align-items: center;
    justify-items: center;

    .text {
      display: flex;
      flex-direction: column;
    }

    .text h2 {
      font-size: 14px;
    }

    .text a {
      align-self: end;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }
  }
`
