import { useState } from 'react'
import './style.css'

export default () => {
    const [closeSaveAs, setCloseSaveAs] = useState(false)

    const handleCancelButton = () => {
        setCloseSaveAs(true)
    }

    if(closeSaveAs) return null

    return (
        <div className="save-as-window">
            <div className="save-as-header">
                Salvar Como
            </div>
            <div className="save-as-body">
                <input type="text" name="file-name" placeholder="nome do arquivo" />
            </div>
            <div className="save-as-footer">
                <input type="submit" value="Salvar" />
                <input type="button" value="Cancelar" onClick={handleCancelButton}/>
            </div>
        </div>
    )
}
