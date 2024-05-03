import TaskbarIcon from '../TaskbarIcon/TaskbarIcon'
import Explorer from '../Explorer/Explorer'
import { taskbarFiles } from '../../data/folders'
import './style.css'

export default ({explorer, setExplorer}) => {
    const iconHanldleClick = (label) => {
        setExplorer([...explorer, <Explorer key={explorer.length} title={label} />])
    }

    return (
        <div className="taskbar">
            <div className="taskbar-icons">
                <div className="taskbar-icons-fixed">
                    {taskbarFiles.map((file, index) => (
                        <TaskbarIcon key={index} explorer={explorer} file={file} srcImage={file.icon.src} alt={file.icon.alt} iconHanldleClick={() => {
                            if(file.explorer) {
                                iconHanldleClick(file.label)
                            }
                        }}/>
                    ))}
                </div>
            </div>
        </div>
    )
}