import { useState } from 'react'
import Explorer from '../Explorer/Explorer'
import Icon from '../Icon/Icon'
import Taskbar from '../Taskbar/Taskbar'
import { workspaceFiles } from '../../data/folders'
import './style.css'

export default () => {
    const [showExplorer, setShowExplorer] = useState([])

    const handleIconClick = (title) => {
        setShowExplorer([...showExplorer, <Explorer key={showExplorer.length} title={title} />])
    }

    return (
        <div className="workspace">
            <div className="background">
                <div className="icons">
                    {
                        workspaceFiles.map(file => {
                            return <Icon key={file.label} text={file.label} imageSrc={file.icon.src} handleIconClick={() => {
                                if (file.explorer) {
                                    handleIconClick(file.label)
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