import TaskbarIcon from '../TaskbarIcon/TaskbarIcon'
import Explorer from '../Explorer/Explorer'
import './style.css'

export default ({explorer, setExplorer}) => {
    const icons = [
        { src: "src/assets/folder.png", alt: "folder", label: "Arquivos", explorer: true },
        { src: "src/assets/settings.png", alt: "settings", label: "Configurações" },
        { src: "src/assets/Calculator.png", alt: "calculator", label: "Calculadora" }
    ]

    const iconHanldleClick = (label) => {
        setExplorer([...explorer, <Explorer key={explorer.length} title={label} />])
    }

    return (
        <div className="taskbar">
            <div className="taskbar-icons">
                <div className="taskbar-icons-fixed">
                    {icons.map((icon, index) => (
                        <TaskbarIcon key={index} srcImage={icon.src} alt={icon.alt} iconHanldleClick={() => {
                            if(icon.explorer) {
                                iconHanldleClick(icon.label)
                            }
                        }}/>
                    ))}
                </div>
            </div>
        </div>
    )
}