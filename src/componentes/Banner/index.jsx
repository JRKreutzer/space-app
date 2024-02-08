import styled from "styled-components"
import backgroundImage from './banner.png'

const BannerEstilizado = styled.div`
    background-image: url(${backgroundImage});
    display: flex;
    flex-grow: 1;
    height: 328px;
    border-radius: 20px;
    align-items: center;
    max-width: 100%;
    background-size: cover;
    h2 {
        font-size: 40px;
        font-weight: 400;
        color: #ffffff;
        max-width: 301px;
        min-width: 266px;
        margin-left: 64px;
        user-select: none;
    }
`

const Banner = () => {
    return (
        <BannerEstilizado>
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </BannerEstilizado>
    )
}

export default Banner