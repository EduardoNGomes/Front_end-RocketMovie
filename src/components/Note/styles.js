import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK_2};
  position: relative;
  width: 99%;

  padding: 32px;
  margin-bottom: 24px;

  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;

  border-radius: 10px;
  border: none;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    text-align: left;
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

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    color: white;

    span {
      padding: 10px 15px;
    }
  } /* 

*/
`
