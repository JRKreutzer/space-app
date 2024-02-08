import { FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #04244F;
    height: 80px;
    margin-top: 75px;
`
const LinksEstilizados = styled.ul`
    display: flex;
    text-decoration: none;
    list-style: none;
    margin: 0 0 0 25px;
    padding: 0;
    li {
        margin-right: 35px;
        a {
            text-decoration: none;
            svg {
                width: 35px;
                height: 35px;
                color: #ffffff;
            }
        }
    }
`

const TextosEstilizado = styled.div`
    color: #ffffff;
    margin-right: 25px;
    h2 {
        font-size: 18px;
        font-weight: 400;
        margin: 0;
    }
    h3 {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
    }
`

const Rodape = () => {
    return (
        <>
            <RodapeEstilizado>
                <div>
                    <LinksEstilizados>
                        <li>
                            <a href="https://github.com/JRKreutzer"><FaGithub /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jr.kreutzer/"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/josé-kreutzer-614372173/"><FaLinkedin /></a>
                        </li>
                    </LinksEstilizados>    
                </div>
                <div>
                    <TextosEstilizado>
                        <h2>Desenvolvido por José Rodolfo Kreutzer.</h2>
                        <h3>Curso Alura</h3>
                    </TextosEstilizado>
                </div>
            </RodapeEstilizado>
        </>
    )
}

export default Rodape