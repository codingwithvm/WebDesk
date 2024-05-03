import { useRef, useState, useEffect } from 'react'
import './style.css'

export default ({ srcImage, alt, iconHanldleClick, explorer, file }) => {
    const [previewWindow, setPreviewWindow] = useState([])
    const [showPreviewWindow, setShowPreviewWindow] = useState(false)
    const iconRef = useRef(null)

    // Função para renderizar os explorers minimizados
    const handleMouseDown = () => {
        const arrOfTitles = []
        for(const ex of explorer) {
            const title = ex.props.title
            arrOfTitles.push(title)
        }

        if(file.explorer) {
            setPreviewWindow(arrOfTitles)
            setShowPreviewWindow(true)
        }
    }

    const handleOnMouseLeave = () => {
        setShowPreviewWindow(false)
    }

    return (
        <div ref={iconRef} className="taskbar-icon" onMouseOver={handleMouseDown} onMouseLeave={handleOnMouseLeave} onClick={() => {
            iconHanldleClick()
        }}>
            <img src={srcImage} alt={alt} />
            {showPreviewWindow && (
                <div className="preview-window">
                    <ul>
                        {
                            previewWindow.length > 0 ? (
                                previewWindow.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))
                            ) : (
                                setShowPreviewWindow(false)
                            )
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}