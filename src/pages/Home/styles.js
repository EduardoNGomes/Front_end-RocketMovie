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
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;

    h2 {
      font-size: 32px;
      font-weight: 400;
    }
  }
`

export const Content = styled.div`
  height: 70vh;
  grid-area: content;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
    margin-top: 0;
  }

  .card {
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.PINK_2};
    width: 99%;

    padding: 32px;
    margin-bottom: 24px;

    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;

    border-radius: 10px;

    h3 {
      font-size: 24px;
      font-weight: 700;
    }

    .btn {
      display: flex;
      justify-content: end;
    }

    ul {
      margin: 10px 0;
      display: flex;
      gap: 10px;

      li {
        list-style: none;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 18.75px;

      color: ${({ theme }) => theme.COLORS.GRAY_1};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`
