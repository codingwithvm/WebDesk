import './style.css'

export default ({srcImage, alt}) => {
    return (
        <div className="taskbar-icon">
            <img src={srcImage} alt={alt} />
        </div>
    )
}