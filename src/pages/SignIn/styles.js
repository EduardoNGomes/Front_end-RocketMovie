import styled from 'styled-components'
import backgroundImg from '../../assets/images/bg.png'

export const Container = styled.div`
  main {
    display: flex;
  }

  .login {
    width: 340px;
    margin: 160px;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 64px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    h2 {
      margin: 48px 0;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }

    div {
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      margin: 20px 0 30px;
    }

    button:last-child {
      justify-content: center;
    }
  }
`
export const Background = styled.div`
  height: 100vh;
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  filter: brightness(40%);
`
