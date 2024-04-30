import Icon from '../Icon/Icon'
import './style.css'

export default () => {
    const generateIcons = () => {
        const icons = []
        for (let i = 0; i < 98; i++) {
            icons.push(<Icon key={i} text={i}/>)
        }
        return icons
    }

    return (
        <div className="workspace">
            <div className="background">
                <div className="icons">
                    {generateIcons()}
                </div>
            </div>
        </div>
    )
}