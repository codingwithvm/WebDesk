import TaskbarIcon from '../TaskbarIcon/TaskbarIcon'
import './style.css'

export default () => {
    const icons = [
        { src: "src/assets/folder.png", alt: "folder", label: "Arquivos", explorer: true },
        { src: "src/assets/settings.png", alt: "settings", label: "Configurações" },
        { src: "src/assets/Calculator.png", alt: "calculator", label: "Calculadora" }
    ]

    return (
        <div className="taskbar">
            <div className="taskbar-icons">
                <div className="taskbar-icons-fixed">
                    {icons.map((icon, index) => (
                        <TaskbarIcon key={index} srcImage={icon.src} alt={icon.alt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}