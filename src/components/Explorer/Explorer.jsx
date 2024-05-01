import './style.css'

export default ({title}) => {
    return(
        <div className="explorer">
            <div className="header">
                <div className="title">titulo</div>
                <div className="buttons">
                    <div className="minimize-button"></div>
                    <div className="zoom-button"></div>
                    <div className="close-button"></div>
                </div>
            </div>
        </div>
    )
}