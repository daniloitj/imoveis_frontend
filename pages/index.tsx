import Head from 'next/head'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Criando Sistema de Imóveis com Next.js Reactjs Typescript Styled-Components [Part 3] - Configurando Styled-Components</Title>
      </main>

      <footer>

      </footer>
    </div>
  )
}
