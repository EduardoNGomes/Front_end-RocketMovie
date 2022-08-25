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
export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 5px;
    right: 5px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: white;
    }
  }
`
