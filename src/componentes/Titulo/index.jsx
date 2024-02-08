import styled from "styled-components";

const Titulo = styled.h2`
    color: #7b78e6;
    font-size: 32px;
    /* Se eu recebi essa prob, use essa prob como alinhamento, senão alinhe para esquerda */
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`

export default Titulo