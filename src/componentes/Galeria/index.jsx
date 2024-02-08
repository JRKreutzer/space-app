import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"
import { useState } from "react"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensCotainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlterarFavorito, setFiltroTag }) => {

    return (
        <>
            <Tags setFiltroTag={setFiltroTag}/>
            <GaleriaContainer>
                
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensCotainer>
                        {fotos.map(foto => 
                        
                            <Imagem 
                                key={foto.id}
                                foto={foto}
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlterarFavorito={aoAlterarFavorito}
                            />)
                        }
                    </ImagensCotainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria