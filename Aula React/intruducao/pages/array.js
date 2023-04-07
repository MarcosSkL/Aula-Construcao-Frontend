import React from 'react'
import Cabecalho from '../components/Cabecalho'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const Array = () => {

  const carros = ["Celta", "Marea", "Larborghine", "Gol", "Camaro", "Doblo", "Civic"]

  return (
    <>
        <Pagina titulo="Array">
          <Container>
            <h2>Lista Ordenada:</h2>
            <ol>
              {carros.map(item => (
                
                <li>{item}</li>
                
              ))}
            </ol>
      
          </Container>

        </Pagina>
    
    </>
  )
}

export default Array