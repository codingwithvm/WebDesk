import { useEffect, useState } from 'react'
import './style.css'

export default ({fileBody}) => {
    const [closeSaveAs, setCloseSaveAs] = useState(false)
    const [inputText, setInputTetxt] = useState('')

    const handleSaveButton = () => {
        console.log({title: inputText, text: fileBody})

        // Salvar documento
        
        
        // Fechar janela
        setCloseSaveAs(true)
    }

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
                <input 
                    type="text" 
                    name="file-name" 
                    placeholder="nome do arquivo" 
                    value={inputText} 
                    onChange={e => setInputTetxt(e.target.value)} />
            </div>
            <div className="save-as-footer">
                <input type="submit" value="Salvar" onClick={handleSaveButton}/>
                <input type="button" value="Cancelar" onClick={handleCancelButton}/>
            </div>
        </div>
    )
}
