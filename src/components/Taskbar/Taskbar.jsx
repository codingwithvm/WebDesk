import './style.css'

export default () => {
    return (
        <div className="taskbar">
            <div className="taskbar-icons">
                <div className="taskbar-icons-fixed">
                    <div className="taskbar-icon">
                        <img src="src/assets/computer.png" alt="computer" />
                    </div>
                    <div className="taskbar-icon">
                        <img src="src/assets/trash.png" alt="computer" />
                    </div>
                </div>
            </div>
        </div>
    )
}