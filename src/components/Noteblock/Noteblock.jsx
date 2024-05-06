import { useRef, useState } from 'react'
import './style.css'
import SaveAs from '../SaveAs/SaveAs'

const NoteblockEditor = ({path}) => {
    const [noteIsClosed, setNoteIsClosed] = useState(false)
    const [showSubheader, setShowSubheader] = useState(false)
    const [showSaveAs, setShowSaveAs] = useState(false)
    const [text, setText] = useState('')
    const noteblockRef = useRef(null)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClickSave = () => {
        setShowSaveAs(true)
    }

    const handleCloseClick = () => {
        const closeWitthEffect = () => {
            noteblockRef.current.style.width = '400px'
            noteblockRef.current.style.height = '250px'
            noteblockRef.current.style.opacity = '0'
            setTimeout(() => {
                setNoteIsClosed(true)
            }, 200)  // Ajustado aos mesmos 200ms da animação
        }

        closeWitthEffect()

        // verifica se tem algo escrito
        if (text.length > 0) {
            const confirm = window.confirm('Deseja sair sem salvar ?')
            if (confirm) {
                closeWitthEffect()
            }
        }
    }

    const handleFileClick = e => {
        // e.stopPropagation()

        setShowSubheader(!showSubheader)
    }

    const handleSubheaderMenu = e => {
        e.stopPropagation()
        setShowSubheader(!showSubheader)
    }

    if (noteIsClosed) return null

    return (
        <div ref={noteblockRef} className="noteblock-editor">
            <div className="header">
                <div className="title">Bloco de Notas</div>
                <div className="buttons">
                    <div className="minimize-button"></div>
                    <div className="zoom-button"></div>
                    <div className="close-button" onClick={handleCloseClick}></div>
                </div>
            </div>
            <div className="subheader">
                <ul>
                    <li key="arquivo" onClick={handleFileClick}>
                        Arquivo
                        <div className="subheader-menu" onClick={handleSubheaderMenu}>
                            {
                                showSubheader && (
                                    <ul>
                                        <li key={1}>Novo</li>
                                        <li key={2}>Nova Janela</li>
                                        <li key={3} onClick={handleClickSave}>Salvar</li>
                                    </ul>
                                )
                            }
                        </div>
                    </li>
                    <li key="editar">Editar</li>
                    <li key="formatar">Formatar</li>
                    <li key="exibir">Exibir</li>
                </ul>
            </div>
            {
                showSaveAs && (
                    <SaveAs fileBody={text} path={path}/>
                )
            }
            <textarea
                className="editor-textarea"
                value={text}
                onChange={handleChange}
                placeholder="Digite seu texto aqui..."
            />
        </div>
    )
}

export default NoteblockEditor
