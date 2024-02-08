import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const ContainerImagem = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '448px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        height: 256px;
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        display: flex;
        justify-content: space-between;
        max-height: 80px;
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 5px;
        }
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 20px;
            margin: 0;
        }
        h4 {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            
        }
        footer {
            display: flex;
            align-items: flex-end;
            gap: 20px;
        }
    }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlterarFavorito }) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    return (
        <ContainerImagem $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo}/>
            <figcaption>
                <section>
                    <h3>{foto.titulo}</h3>
                    <h4>{foto.fonte}</h4>
                </section>
                <footer>
                    <BotaoIcone onClick={() => aoAlterarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Favoritar" />
                    </BotaoIcone>
                    {!expandida && 
                        <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Expandir" />
                        </BotaoIcone>}
                </footer>
            </figcaption>
        </ContainerImagem>
    )
}

export default Imagem