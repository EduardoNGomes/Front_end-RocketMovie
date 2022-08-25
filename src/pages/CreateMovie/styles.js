import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 125px auto;
  grid-template-areas:
    'header'
    'content';
  main {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Content = styled.div`
  padding-right: 10px;
  height: 80vh;
  grid-area: content;
  overflow-y: auto;
  .sub-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin: 40px 0;

    h2 {
      font-size: 36px;
      font-weight: 500px;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  .markup {
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(13, 12, 15, 1);
    padding: 15px;
    margin: 24px 0 40px;

    border-radius: 8px;
  }

  > .buttons {
    width: 100%;
    display: flex;
    gap: 40px;
    padding-bottom: 10px;

    .btn-save,
    .btn-remove {
      width: 100%;
      justify-content: center;
    }

    .btn-remove {
      background-color: rgba(13, 12, 15, 1);
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
