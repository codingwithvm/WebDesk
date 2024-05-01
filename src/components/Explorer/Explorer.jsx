import { useRef, useState } from 'react'
import './style.css'

export default ({ title }) => {
    const explorerRef = useRef(null)
    const [isZoomed, setIsZoomed] = useState(false)
    const [isClosed, setIsClosed] = useState(false)

    const handleMinimizeClick = () => {
        explorerRef.current.style.height = '50px'
        explorerRef.current.style.opacity = '20%'
        explorerRef.current.style.top = '100%'
        setTimeout(() => {
            setIsClosed(true)
        }, 100)  // Ajustado aos mesmos 100ms da animação
    }

    const handleZoomClick = () => {
        if (isZoomed) {
            explorerRef.current.style.width = '800px'
            explorerRef.current.style.height = '500px'
        } else {
            explorerRef.current.style.width = '1080px'
            explorerRef.current.style.height = '600px'
        }

        setIsZoomed(!isZoomed)
    }

    const handleCloseClick = () => {
        explorerRef.current.style.width = '400px'
        explorerRef.current.style.height = '250px'
        explorerRef.current.style.opacity = '0'
        setTimeout(() => {
            setIsClosed(true)
        }, 200)  // Ajustado aos mesmos 200ms da animação
    }

    if (isClosed) return null

    return (
        <div ref={explorerRef} className="explorer">
            <div className="header">
                <div className="title">{title}</div>
                <div className="buttons">
                    <div className="minimize-button" onClick={handleMinimizeClick}></div>
                    <div className="zoom-button" onClick={handleZoomClick}></div>
                    <div className="close-button" onClick={handleCloseClick}></div>
                </div>
            </div>
            <div className="explorer-body">
                <div className="explorer-aside">
                    <h1>Favoritos</h1>
                    <ul>
                        <li>Área de Trabalho</li>
                        <li>Downloads</li>
                        <li>Documentos</li>
                        <li>Imagens</li>
                    </ul>
                    <h1>Locais</h1>
                    <ul>
                        <li>Este Computador</li>
                        <li>Drive</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
