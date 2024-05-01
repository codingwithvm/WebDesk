import './style.css'
import Explorer from '../Explorer/Explorer'

export default ({ text, imageSrc, handleIconClick }) => {
    return (
        <div className="icon" onClick={handleIconClick}>
            <img src={imageSrc} alt={text} />
            {text}
            {/* {showExplorer && <Explorer title={text}/>} */}
        </div>
    )
}