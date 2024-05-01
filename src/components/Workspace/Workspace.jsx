import Explorer from '../Explorer/Explorer'
import Icon from '../Icon/Icon'
import './style.css'

export default () => {
    const icons = [
        { src: "src/assets/trash.png", alt: "trash", label: "Lixeira" },
        { src: "src/assets/computer.png", alt: "computer", label: "Meu Computador" },
        { src: "src/assets/terminal.png", alt: "terminal", label: "Terminal" }
    ]
    
    return (
        <div className="workspace">
            <div className="background">
                <div className="icons">
                    {
                        icons.map(icon => {
                            return <Icon key={icon.label} text={icon.label} imageSrc={icon.src} />                            
                        })
                    }
                </div>
            </div>
            <Explorer title={"Eplorador de Arquivos"}/>
        </div>
    )
}