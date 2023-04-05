import React from 'react'
import Cabecalho from '../components/Cabecalho'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const Array = () => {

  const pessoas = [
    "Marcos",
    "João",
    "Maria"
  ]
  const carros = [
    "Celta",
    "Marea",
    "Larborghine",
    "Gol",
    "Camaro",
    "Doblo",
    "Civic"
  ]

  const pessoa = {nome: "Orion", Idade: 40, telefone: "(61)1234-5678"}

  const nome = "Marcos"
  const idade = 29
  const telefone = "(61) 996521488"

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