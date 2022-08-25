import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    outline: none;

    ::-webkit-scrollbar {
      width: 8px;
    }
  
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
      margin-top: 100px;

    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  
    ::-webkit-scrollbar-thumb:hover {
      background-color: #ffa1b3;
    }


  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
    color: ${({ theme }) => theme.COLORS.WHITE};

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.9);
  }
`
