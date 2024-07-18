import { TablePage } from './components/TablePage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #191A1F;
  }

`;

export const App = () => {

  return (

    <>

      <GlobalStyle />

      <TablePage />

    </>

  );

}

export default App;
