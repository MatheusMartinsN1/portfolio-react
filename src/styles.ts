import styled, { createGlobalStyle } from 'styled-components';

import {} from './themes/dark';

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0px;
  padding: 0px;
  font-family: "Inter", sans-serif;
  list-style: none;
}

body {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.corDeFundo};

  @media(max-width: 768px) {
    padding-top: 16px;
  }
}
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`;
