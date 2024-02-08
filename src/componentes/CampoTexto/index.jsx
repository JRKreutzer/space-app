import styled from "styled-components"
import search from "./search.png"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border: 2px solid #c98cf1;
    border-radius: 10px;
    width: 566px;
    background: transparent;
    box-sizing: border-box;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    
    &::placeholder {
        color: #d9d9d9;
    }
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({placeholder, setFiltro}) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado  
                placeholder={placeholder}
                onChange={(e) => {setFiltro(e.target.value)}}
            />
            <IconeLupa src={search}  alt="Lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto