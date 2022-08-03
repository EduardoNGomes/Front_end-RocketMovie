import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 125px auto;
  grid-template-areas:
    'header'
    'content';

  main {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const Content = styled.div`
  padding-right: 10px;

  height: 70vh;
  grid-area: content;
  overflow-y: scroll;
  .sub-header {
    .btn {
      display: flex;
      justify-content: start;
      margin: 10px 0;
    }

    > button {
      margin: 40px 0 24px;
    }
    text-align: left;
    margin-bottom: 24px;

    .title {
      display: flex;
      align-items: baseline;
      gap: 20px;
      margin-bottom: 24px;

      h2 {
        font-size: 36px;
        font-weight: 500px;
        line-height: 46.5px;
      }
      ul {
        list-style: none;
        display: flex;

        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 20px;

        li {
          margin-right: 5px;
        }
      }
    }

    .author {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      span {
        line-height: 18.75px;
        font-size: 12px;
        font-weight: 400;
        text-align: justify;
      }

      .time {
        display: flex;
        gap: 5px;

        > svg {
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }
    }

    .anothertag {
      background-color: ${({ theme }) => theme.COLORS.PINK_2};
    }
  }

  .text {
    text-align: justify;
    line-height: 21px;
    font-size: 16px;
    font-weight: 400;
  }
`
