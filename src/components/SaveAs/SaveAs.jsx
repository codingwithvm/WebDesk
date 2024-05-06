import { useState } from 'react'
import './style.css'
import { createNewFile } from '../../data/folders'

export default ({ fileBody, path }) => {
    const [closeSaveAs, setCloseSaveAs] = useState(false)
    const [inputText, setInputTetxt] = useState('')

    const handleSaveButton = () => {
        // Localiza último caractérer / do título do explorer
        const lastBar = path.lastIndexOf('/')
        // Cria o caminho selecionando o texto antes da /
        const p = path.substring(lastBar +1)

        console.log({ label: inputText, body: fileBody, type: 'text', p })
        const document = {
            label: inputText, 
            body: fileBody, 
            type: 'text', 
            path: p
        }

        // Salvar documento
        createNewFile(document)

        // Fechar janela
        setCloseSaveAs(true)
    }

    const handleCancelButton = () => {
        setCloseSaveAs(true)
    }

    if (closeSaveAs) return null

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
                    onChange={e => setInputTetxt(e.target.value)}
                    autoFocus />
            </div>
            <div className="save-as-footer">
                <input type="submit" value="Salvar" onClick={handleSaveButton} />
                <input type="button" value="Cancelar" onClick={handleCancelButton} />
            </div>
        </div>
    )
}
