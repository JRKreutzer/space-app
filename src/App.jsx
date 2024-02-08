import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const ContainerMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtroInput, setFiltroInput] = useState('')
  const [filtroTag, setFiltroTag] = useState(0)
  const [expancao, setExpancao] = useState('')

  const aoAlterarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return {
        ...fotosDaGaleria,
        favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [aoAlterarFavorito]);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !filtroTag || foto.tagId === filtroTag
      const filtroPorTitulo = !filtroInput || foto.titulo.toLowerCase().includes(filtroInput.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtroInput, filtroTag])

  console.log(filtroTag)

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltroInput={setFiltroInput} />
        <ContainerMain>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              fotos={fotosDaGaleria}
              aoAlterarFavorito={aoAlterarFavorito}
              setFiltroTag={setFiltroTag}
            />
          </ConteudoGaleria>
          </ContainerMain>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlterarFavorito={aoAlterarFavorito} 
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
