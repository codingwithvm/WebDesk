import './style.css'

export default ({ text, imageSrc }) => {
    return (
        <div className="icon">
            <img src={imageSrc} alt={text} />
            {text}
        </div>
    )
}