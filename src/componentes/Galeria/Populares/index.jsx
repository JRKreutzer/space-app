import Titulo from "../../Titulo"
import fotos from '../../../fotos.json'
import Imagem from "../Imagem"
import styled from "styled-components"


const SecaoPopular = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const ImagemPopular = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {

    return (
        <>
            <section>
                <Titulo $alinhamento="center">Populares</Titulo>
                <SecaoPopular>
                    {fotos.map(foto => 
                        <ImagemPopular 
                            key={foto.id}
                            src={foto.path}
                            alt={foto.titulo}
                        />)
                    }
                </SecaoPopular>
                <Botao>Ver mais</Botao>
            </section>
        </>
    )
}

export default Populares