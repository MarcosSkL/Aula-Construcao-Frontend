import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

const index = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    apiFilmes.get("/movie/popular").then(resultado => {
      setFilmes(resultado.data.results)
    })
  }, [])

  return (

    <Pagina titulo="index filmes">
      <h1>Filmes Populares</h1>

      {filmes.map(item => (
        <div>
          <p>{item.title}</p>
          <img style={{ Width: '100%', height: '170px' }} src='{item.backdrop_path}' />
        </div>

      ))}

    </Pagina>
  )
}

export default index