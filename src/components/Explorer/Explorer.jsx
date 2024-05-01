import { useRef, useState } from 'react'
import './style.css'

export default ({ title }) => {
    const explorerRef = useRef(null)
    const [isZoomed, setIsZoomed] = useState(false)

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

    return (
        <div ref={explorerRef} className="explorer">
            <div className="header">
                <div className="title">{title}</div>
                <div className="buttons">
                    <div className="minimize-button"></div>
                    <div className="zoom-button" onClick={handleZoomClick}></div>
                    <div className="close-button"></div>
                </div>
            </div>
        </div>
    )
}
