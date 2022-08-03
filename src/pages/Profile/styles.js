import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  .bg {
    width: 100%;
    height: 145px;

    background-color: ${({ theme }) => theme.COLORS.PINK_2};
  }

  .btn {
    display: flex;
    justify-content: start;
    padding: 30px;
  }

  main {
    max-width: 1200px;
    margin: -90px auto;
    text-align: center;

    img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
    }

    .info {
      max-width: 340px;
      margin: 64px auto;

      div {
        margin-bottom: 10px;
      }

      div:nth-child(even) {
        margin-bottom: 24px;
      }

      button {
        width: 100%;
      }
    }
  }
`
