import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';

const Objetos = () => {

  const carros = [
    { marca: "Chevrolet", modelo: "Celta", ano: "2011", cor: "Branco", foto: "https://www.novalidermultimarcas.com.br/carros/93b3122ba779cac324e31828ca19df37-thumbjpeg-chevrolet-celta-8795615-1000-750-70.jpg" },
    { marca: "Chevrolet", modelo: "Marea", ano: "2008", cor: "Preto", foto: "https://s3-sa-east-1.amazonaws.com/priroda01/cdn/img_447090_4_458e11c9-9e9d-49ef-9837-539e5262a4d7.jpg" },
    { marca: "Audi", modelo: "A3", ano: "2023", cor: "Branco", foto: "https://www.motortrend.com/uploads/2022/05/2023-Audi-A3-003-front-three-quarter-view.jpg?fit=around%7C875:492.1875" },
    { marca: "Volkswagen", modelo: "Gol", ano: "2015", cor: "Vermelho", foto: "https://extra.globo.com/incoming/13893966-16a-479/w640h360-PROP/04_volks_marketing3.jpg" },
    { marca: "Chevrolet", modelo: "Camaro", ano: "2022", cor: "Amarelo", foto: "https://autoentusiastas.com.br/ae/wp-content/uploads/2017/05/Camaro-SS-Fifty-conversivel-01-1140x720.jpg" },
    { marca: "Fiat", modelo: "Doblo", ano: "2015", cor: "Prata", foto: "http://www.autocerto.com/fotos/1012/516213/18.jpg" },
    { marca: "Honda", modelo: "Civic", ano: "2023", cor: "Branco", foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0D59vC0jFoMsPtS3znAJWvJ1Nw9OBUqAGe_JsbKEWcQ-_mVwldN-q2x_9xilrAKkxykrUOZaZXuJl73l1V1YAxpynO-XciFqG9JlTwgS14S-bZOHeiRMblYxQi64sXI7TJrHPzxELjgiTDLfODT-InlYFbabFFzey-xI9T54bKlRO_KfWy3lE8SrfFw/s2560/Novo-Civic-2023%20%282%29.jpg" },
    { marca: "BMW", modelo: "M4", ano: "2023", cor: "Grafite", foto: "https://cdn.motor1.com/images/mgl/AkknQW/s1/2022-bmw-m4-csl.jpg" }
  ]

  return (
    <Pagina titulo="Carros">

      <Row className="px-5 mx-5">
        {carros.map(item => (
          <Col md={3} className="mb-4" >
            <Card>
              <Card.Img style={{ maxWidth: '100%', height: '200px' }} variant="top" src={item.foto} />
              <Card.Body>
                <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                <p>Ano: <strong>{item.ano}</strong></p>
                <div className="d-flex flex-column align-items-end">
                  <Button variant="primary text-white" href="#">Detalhes</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>



    </Pagina>
  )
}

export default Objetos
