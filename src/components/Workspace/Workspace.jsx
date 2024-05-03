import { useState } from 'react'
import Explorer from '../Explorer/Explorer'
import Icon from '../Icon/Icon'
import Taskbar from '../Taskbar/Taskbar'
import { workspaceFiles } from '../../data/folders'
import './style.css'
import NoteblockEditor from '../Noteblock/Noteblock'

export default () => {
    const [showExplorer, setShowExplorer] = useState([])
    const [workspaceFile, setWorkspaceFile] = useState(workspaceFiles)

    const handleIconClick = (title) => {
        setShowExplorer([...showExplorer, <Explorer key={showExplorer.length} title={title} changeState={changeState}/>])
    }

    const changeState = (newState) => {
        setWorkspaceFile(newState)
    }

    return (
        <div className="workspace">
            <div className="background">
                <div className="icons">
                    {
                        workspaceFile.map((file, index) => {
                            return <Icon key={index} text={file.label} imageSrc={file.icon.src} handleIconClick={() => {
                                if (file.explorer) {
                                    handleIconClick(file.label)
                                }
                            }}/>
                        })
                    }
                </div>
            </div>
            <Taskbar explorer={showExplorer} setExplorer={setShowExplorer}/>
            {showExplorer && showExplorer.map((explorer, index) => (
                <div key={index}>{explorer}</div>
            ))}
            <NoteblockEditor />
        </div>
    )
}