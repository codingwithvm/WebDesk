import { useState } from 'react'
import Explorer from '../Explorer/Explorer'
import Icon from '../Icon/Icon'
import './style.css'
import Taskbar from '../Taskbar/Taskbar'

export default () => {
    const [showExplorer, setShowExplorer] = useState([])
    const icons = [
        { src: "src/assets/trash.png", alt: "trash", label: "Lixeira", explorer: true },
        { src: "src/assets/computer.png", alt: "computer", label: "Meu Computador", explorer: true },
        { src: "src/assets/terminal.png", alt: "terminal", label: "Terminal" }
    ]


    const handleIconClick = (title) => {
        setShowExplorer([...showExplorer, <Explorer key={showExplorer.length} title={title} />])
    }

    return (
        <div className="workspace">
            <div className="background">
                <div className="icons">
                    {
                        icons.map(icon => {
                            return <Icon key={icon.label} text={icon.label} imageSrc={icon.src} handleIconClick={() => {
                                if (icon.explorer) {
                                    handleIconClick(icon.label)
                                }
                            }} />
                        })
                    }
                </div>
            </div>
            <Taskbar explorer={showExplorer} setExplorer={setShowExplorer}/>
            {showExplorer && showExplorer.map((explorer, index) => (
                <div key={index}>{explorer}</div>
            ))}
        </div>
    )
}