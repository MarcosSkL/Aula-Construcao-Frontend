import Cabecalho from "../components/Cabecalho";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina titulo="Pagina Inicial">
        <Container>
          <h1>Hello World!</h1>
          <p>Paragrafo 1</p>
          <p>Paragrafo 2</p>
          <p>Paragrafo 3</p>
        </Container>
      </Pagina>

      
    </>
    )
  }
