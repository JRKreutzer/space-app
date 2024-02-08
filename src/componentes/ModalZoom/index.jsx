import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"
import { useEffect, useRef } from "react";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    background: transparent;
    width: 1156px;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    img {
        width: 100%;
        height: 100%;
    }
    form {
            display: flex;
            justify-content: end;
            position: relative;
            top: 50px;
            right: 70px;
            padding: 0;
            margin: 0;
            width: 100%;
            img {
                width: 30px;
                height: 30px;
            }
            
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlterarFavorito }) => {

    const dialogRef = useRef(null);

    useEffect(() => {
        const calcularPosicao = () => {
          if (dialogRef.current) {
            const windowHeight = window.innerHeight;
            const dialogHeight = dialogRef.current.offsetHeight;
            const topPosition = Math.max(
              0,
              windowHeight / 2 - dialogHeight / 2 + window.scrollY
            );
    
            dialogRef.current.style.top = `${topPosition}px`;
          }
        };
    
        calcularPosicao();
    
        window.addEventListener("scroll", calcularPosicao);
        return () => {
          window.removeEventListener("scroll", calcularPosicao);
        };
      }, [foto]);

    return (
        <>
            { foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar} ref={dialogRef}>
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Fechar"/>
                        </BotaoIcone>
                    </form>
                    <Imagem foto={foto} expandida={true} aoAlterarFavorito={aoAlterarFavorito}/>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom