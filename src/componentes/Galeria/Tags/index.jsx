import styled from 'styled-components'
import tags from './tags.json'
import Titulo from './../../Titulo/index';

const ContainerTags = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const TagTexto = styled.p`
    font-size: 24px;
    color: #d9d9d9;
    width: 219px;
    line-height: 29px;
    font-weight: 400;
`

const TagBotao = styled.button`
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    border: 2px solid transparent;
    background-color: rgba(219, 217, 217, 0.3);
    transition: background-color 0.3s ease;
    padding: 8px;
    border-radius: 10px;
    box-sizing: border-box;
    &:hover {
        border-color: #c98cf1;
    }

    
`

const Tags = ({enviarParaGaleria, setFiltroTag}) => {   

    return <ContainerTags>
        <TagTexto>Busque por tags:</TagTexto>
        {tags.map(tag => <TagBotao 
            key={tag.id}
            onClick={() => setFiltroTag(tag.id) }
        >
                {tag.titulo}
        </TagBotao> )}
    </ContainerTags> 
    
}

export default Tags