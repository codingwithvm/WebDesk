import './style.css'

export default ({ text, imageSrc, handleIconClick }) => {
    return (
        <div className="icon" onClick={handleIconClick}>
            <img src={imageSrc} alt={text} />
            {text}
        </div>
    )
}