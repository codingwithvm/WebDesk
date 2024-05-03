import { useState } from 'react'
import './style.css'

const NoteblockEditor = () => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="noteblock-editor">
      <div className="header">
        <div className="title">Bloco de Notas</div>
        <div className="buttons">
          <div className="minimize-button"></div>
          <div className="zoom-button"></div>
          <div className="close-button"></div>
        </div>
      </div>
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
