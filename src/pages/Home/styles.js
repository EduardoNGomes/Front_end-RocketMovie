import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 125px auto auto;
  grid-template-areas:
    'header'
    'search'
    'content';
  main {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .text-home {
    grid-area: search;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: 50px auto;

    h2 {
      width: 25%;
      font-size: 32px;
      font-weight: 400;
    }

    input {
      height: 50px;
    }
  }
`
