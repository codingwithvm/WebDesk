import { useRef, useEffect } from 'react'
import './style.css'

export default ({ srcImage, alt, iconHanldleClick }) => {
    const iconRef = useRef(null)

    const addActive = () => {
        iconRef.current.classList.add('taskbar-icon-active')
    }

    return (
        <div ref={iconRef} className="taskbar-icon" onClick={() => {
            addActive()
            iconHanldleClick()
        }}>
            <img src={srcImage} alt={alt} />
        </div>
    )
}