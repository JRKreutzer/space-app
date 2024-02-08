import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 32px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 18px;
`

const ItemNavegacao = ( {children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone" />
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao